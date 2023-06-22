const http = require("http") // importing the http module to  which can be used to create a simple server 
const server = http.createServer((req,res) => {  // req is request object,, when client makes http req it is passed through te call back function
    //   which is triggered  had ethods like rq.url which gives url of the request 
    // creating a server using create server method of http module 
    res.write("HEllO WORLD");  // res object has write method which is used to write data to response body
    res.end();      // end method to end the response and send data to client 



})
server.listen((3000),() => {

    console.log("server is running")  // start a server and make it listen to a specific port  here its 3000 second argument is optional ans 
    // a call back function and  which displays a message when server starts listening 

})