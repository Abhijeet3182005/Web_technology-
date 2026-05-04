middleware function  :-
        middle is a function that execute during request before sending the final response
--they have access to 
  1.request 
  2.response
  3.next()

FLOW :
  client---->middleware---->server
        
if we not use next()in miidleware fucntion then it will show loading animation it hang up

activity :
1.why we use middleware
2.types of middleware
3.benefits of middleware
4.where to use in companies level
5.what is query parameter

-----------------------------------------------------------------------------------------------------
HANDLING REQUEST & RESPONSE

express application handle http request and response
request:- the request object(req) contains information about the client reqeust
        ex:- url,headers,query parameters,request body

app.get((req,res)=>{
    console.log(req.query.name);
})

most imp for interview :- what is query parameter

Activities:-
1.detailed study of query parameter with 2 to 4 real time exp.
2.where use in real life company.

-----------------------------------------------------------------------------------------------------

Response object seens data back in line
common reponse method
1.response.send :- send text
2.response.json :- json format data transfer
3.response.status :- check http method
4.response.sendfile :- send files

