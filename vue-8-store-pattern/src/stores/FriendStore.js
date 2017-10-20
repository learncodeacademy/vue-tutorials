const FriendStore = {
  data: {
    friends: ["bobby", "billy"],
  },
  methods: {
    addFriend(name) {
      FriendStore.data.friends.push(name);
    }
  }
};

export default FriendStore;