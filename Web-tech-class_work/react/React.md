1. react :- is js library developed by meta to build a fast and interactive     user interfaces
2. it is single page application (SPA) page doesnot reload only contain change example - instagram,facebook etc
3. why we use react :-
    -problem with trditional js - fully page reload complex dom manipulation hard to manage large application 
    -updates only required parts use only resuable components

4. virtual DOM 
  react creates copy of real DOM means Virtual DOM
  when data changes react updates virtual DOM 
  updates only change part of real DOM 
  use;- " high performance "

5. how to create a project 

6. v8 fast build tool npm install means install depedencies and npm run dev means start server

7. jsx = javascript + xml it allows to write html mode in side the javascript 
    rules:- must reurn single parent use curly braces for javascript

8. components is heart of react simple functional component in react there is one component functinal component example ;-
 function student() {
    return <h1>This is h1 tag </h1>
 }

use component:- 
 functiona app(){
    return <>  <student/> </>
 } 

9. properties ;- data passing from parent to child
 parent:=  functiona app(){
    return < name = 'DIGVIJAY'> />
 }  

 child = function student(props){
    return <h2> Name:{props.name} </h2>
 }

 10. state means data that can change values chages over time when state changes ui updates automatically 
 why we use - without state values will not update state which state you are updata automatically 


activity:
1.diff in angular and react which has more markeet hype 
2.why react is created 
3.what is called empty brackets
4.what is compoenets and types of components where we use in react with two examples
5.what is props why we use and types with 2 exam

