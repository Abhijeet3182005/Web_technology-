
// Activity01
let obj = {
    name : "Atharv",
    age : 20,
    location : "Ichalakaranji",
    email : "atharvchothe@gmail.com",
    islogin :false,
    loginDay :['Monday','Tuesday','Wendnesday'],
    fullname : "Atharv Chothe ",
   // [mySymbol]:"mykeyOne",
}
// Activity02
console.log(obj.age);
console.log(obj.email);
console.log(obj.fullname);
console.log(obj.islogin);
console.log(obj.location);
obj.email = "chotheatharv@gmail.com";
console.log(obj.email);
//console.log(obj.[mySymbol])
Object.freeze(obj);
console.log(obj)

// Activity03
const mySymbol = Symbol('key')
const myobj2={
    [mySymbol]:"AC"
}
console.log(myobj2)
console.log(typeof(myobj2))

obj.greeting= function(){
    console.log('hello js user')
}
console.log(obj.greeting())














//There are two types of object 1)literals 2) constructor 3)singleton
//when you create constructor it creates singlten object it means itself object 
//when we crete object literal then sigltone object can not be created when object are are consrtuctor at time object can be created 
//object means key value pair 