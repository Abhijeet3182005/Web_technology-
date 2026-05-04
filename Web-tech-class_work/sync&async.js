//code exucutes line by line 
/*each task wait to privious task to finish before it can start
js by deafulat syncrounous language and single threaded language

console.log("start");
function add(a,b){
    return a+b;
}
let r = add(5,3);
console.log(r);
console.log("end");
*/
//asynchronous programming
/*each task can start without waiting for the previous task to finish
ayncronous in js concept some task take time API CALL,FILE READ,DATABASE QUERY
js dons not wait it moves to next line non blocking behaviour
used for:-
1.fetching data from server
2.reading files
3.database query
4.set timeout
*/
console.log("start");
setTimeout(() => {
    console.log("inside timeout");
}, 2000);
console.log("end");
/* set timeout is it waits for 2 seconds meanwhile js will js wait 8 after 2 seconds 
Activities :-
1.guess the output game
2.blocking vs non-blocking example 2
3.real time use in company 
4.react PAI fetch method */
