const app = new Vue({
  el: "#app",
  data: {
    friends: [
      {
        first: "Bobby",
        last: "Boone",
        age: 25
      },
      {
        first: "John",
        last: "Boone",
        age: 35,
      }
    ],
  },
  filters: {
    ageInOneYear(age) {
      return age + 1;
    },
    fullName(value) {
      return `${value.last}, ${value.first}`;
    }
  },
  methods: {
    decrementAge(friend) {
      friend.age = friend.age - 1;
    },
    incrementAge(friend) {
      friend.age = friend.age + 1;
    },
  },
  template: `
    <div>
      <h2 v-for="friend in friends">
        <h4>{{friend | fullName}}</h4>
        <h5>age: {{friend.age}}</h5>
        <button v-on:click="decrementAge(friend)">-</button>
        <button v-on:click="incrementAge(friend)">+</button>
        <input v-model="friend.first"/>
        <input v-model="friend.last"/>
      </h2>
    </div>
  `
})
