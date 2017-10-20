<template>
  <div>
    <h1>My Friends</h1>
    <li v-for="friend in FriendStore.friends">{{friend}}</li>
    <input v-model="newFriend" v-on:keyup.13="addFriend(newFriend)" />
  </div>
</template>

<script>
import FriendStore from "../stores/FriendStore"

export default {
  data() {
    return {
      newFriend: null,
      FriendStore: FriendStore.data,
    };
  },
  methods: {
    addFriend(name) {
      FriendStore.methods.addFriend(name)
      this.newFriend = null;
    }
  }
}
</script>
