// synch in js  - code execute line by line 
// each task wait for previous task to finish , bloking in nature 
// js is by default synch and single threded 
// Example -->

console.log('Start');
function add (a,b){
    return a +b  ;
}
let r = add(5,6);
console.log("result = "+r);
console.log("END");


// async in js -> some task take time like api call, database entry, file read , 
// js doesnot wait it moves next line // behavior is non bloking 
// uses - > fetching data from server , reading file , set timeout , Api calles 
// example -->


console.log("start")
setTimeout(() => {
    console.log("this is asynchronous task");
}, 4000);

console.log("end");

// set timeout it is asynchronous it waits 4 sec js prints end then print the message in the function

// Activies --> 
// guess the output game 
// bloking and non bloking 2 example 
// real time where the syn and asyn is used in company level 
// api fetch activiy (react)