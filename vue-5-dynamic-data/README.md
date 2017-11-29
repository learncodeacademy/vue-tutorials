## Check if data exists

Visit [http://rest.learncode.academy/api/vue-5/friends](http://rest.learncode.academy/api/vue-5/friends) to see the data.

## Add data via curl

Open console and run commands:

`curl -H "Content-Type:application/json" -X POST -d '{"name":"Will"}' http://rest.learncode.academy/api/vue-5/friends`

`curl -H "Content-Type:application/json" -X POST -d '{"name":"John"}' http://rest.learncode.academy/api/vue-5/friends`

`curl -H "Content-Type:application/json" -X POST -d '{"name":"Bill"}' http://rest.learncode.academy/api/vue-5/friends`

Then visit [http://rest.learncode.academy/api/vue-5/friends](http://rest.learncode.academy/api/vue-5/friends) and ensure the data has been added.
