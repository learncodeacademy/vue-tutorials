const app = new Vue({
  el: "#app",
  data: {
    bobby: {
      first: "Bobby",
      last: "Boone",
      age: 25
    },
    john: {
      first: "John",
      last: "Boone",
      age: 35,
    }
  },
  computed: {
    johnAgeInOneYear() {
      return this.john.age + 1;
    }
  },
  filters: {
    ageInOneYear(age) {
      return age + 1;
    },
    fullName(value) {
      return `${value.last}, ${value.first}`;
    }
  },
  template: `
    <div>
      <h2>Name: {{john | fullName}}</h2>
      <h2>Age: {{john.age | ageInOneYear}}</h2>
      <h2>Name: {{bobby | fullName}}</h2>
      <h2>Age: {{bobby.age | ageInOneYear}}</h2>
    </div>
  `
})
