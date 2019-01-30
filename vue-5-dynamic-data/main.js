const app = new Vue({
    el: "#app",
    data: {
      editFriend: null,
      friendname: "",
      newFriend: false,
      friends: [],
    },
    methods: {
      addFriend(friend) {
      	this.friends.push({'name' : friend});
      	this.friendname = "";
      	this.newFriend = false;

        fetch("http://rest.learncode.academy/api/vue-5/friends/", {
          body: JSON.stringify({'name' : friend}),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
      },

      deleteFriend(id, i) {
        fetch("http://rest.learncode.academy/api/vue-5/friends/" + id, {
          method: "DELETE"
        })
        .then(() => {
          this.friends.splice(i, 1);
        })
      },

      updateFriend(friend) {
        fetch("http://rest.learncode.academy/api/vue-5/friends/" + friend.id, {
          body: JSON.stringify(friend),
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          this.editFriend = null;
        })
      }
    },
    mounted() {
      fetch("http://rest.learncode.academy/api/vue-5/friends")
        .then(response => response.json())
        .then((data) => {
          this.friends = data;
        })
    },
    template: `
    <div>
      <li v-for="friend, i in friends">
        <div v-if="editFriend === friend.id">
          <input v-on:keyup.13="updateFriend(friend)" v-model="friend.name" />
          <button v-on:click="updateFriend(friend)">save</button>
        </div>
        <div v-else>
          <button v-on:click="editFriend = friend.id">edit</button>
          <button v-on:click="deleteFriend(friend.id, i)">x</button>
          {{friend.name}}
        </div>
      </li>
      <div><button v-on:click="newFriend = true">Add</button></div>
      <div v-if="newFriend === true">
          <input v-model="friendname" v-on:keyup.13="addFriend(friendname)" />
          <button v-on:click="addFriend(friendname)">save</button>
      </div>
    </div>
    `,
});
