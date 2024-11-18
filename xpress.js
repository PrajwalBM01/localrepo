//http consist of, https,URL,routes,header,body, and methods
//common methods usend in http: POST,GET,PUT,DELETE

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get('/',(req,res)=>{
//     res.send("Hello world");
// })

// app.listen(port,()=>{
//     console.log(`Exapmple app liostning on port ${port}`);
// })



//map
//given an array, give me back a new array in which every value is multiplied by 2

const input=[1,2,3,4,5];

const ans = input.map((i)=>{return i*2});
console.log(ans)

//filter
//gicen an input array. give me back all the even values in it

const newarr = [1,2,3,4,5,6];

const ans2 = newarr.filter((n)=>{if(n%2==0) return true})
console.log(ans2)