<template>
  <footer>
    You're doing great.  You have {{FriendStore.friends.length}} friends.
  </footer>
</template>

<script>
import FriendStore from "../stores/FriendStore"

export default {
  data() {
    return {
      FriendStore: FriendStore.data
    };
  },
}
</script>


<style scoped>
footer {
  background: #333;
  color: white;
  margin-top: 20px;
  padding: 20px;
  text-align: center;
  width:100%;
}
</style>
