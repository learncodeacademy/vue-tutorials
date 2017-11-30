
## Intro

From the video [Vue Tutorial #5 - AJAX data and Lifecycle Methods](https://youtu.be/inJDWcHmsss) notice we are using a test REST service from rest.learncode.academy: 

`http://rest.learncode.academy/api/vue-5/friends`

"vue-5" is the  user name, "friends" is the collection name.  The first time you try to access this collection, it gets created. 
So the syntax is: 

`http://rest.learncode.academy/api/{username}/{collection name}`

## Check if data exists

It's possible that data has been deleted before you run an example and see this tutorial.
Visit link below to see the data:

[http://rest.learncode.academy/api/someuser/friends](http://rest.learncode.academy/api/someuser/friends);

If data isn't there, move to the next chapter and create it!

## Add data via curl

Open console and run commands:

`curl -H "Content-Type:application/json" -X POST -d '{"name":"Will"}' http://rest.learncode.academy/api/someuser/friends`

`curl -H "Content-Type:application/json" -X POST -d '{"name":"John"}' http://rest.learncode.academy/api/someuser/friends`

`curl -H "Content-Type:application/json" -X POST -d '{"name":"Bill"}' http://rest.learncode.academy/api/someuser/friends`


Then visit [http://rest.learncode.academy/api/someuser/friends](http://rest.learncode.academy/api/someuser/friends) and ensure the data has been added.

NOTE! Use `http://rest.learncode.academy/api/someuser/friends` in your main.js
