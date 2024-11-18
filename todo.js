const express=require("express");
const app = express();
app.use(express.json());
// {
//     id:1234,
//     title:"go to gym",
//     discrpition:"got to gym at 4pm"
// },{
//     id:13254,
//     title:"study",
//     discription:"deep study for 4hrs"
// }
let todolist = [{
    "id": 123456,
    "title": "new task",
    "comp": "false",
    "disp": "donon what is this task"
    },
    {
    "id": 12345,
    "title": "study",
    "comp": "false",
    "disp": "deep study sessions for 4hrs"
    },
    {
    "id": 1234,
    "title": "gym",
    "comp": "false",
    "disp": "go to gym everyday at 4pm"
    }];



app.get('/todos',(req,res)=>{
    res.json(todolist);
})

app.get('/todos/:id',(req,res)=>{
    res.json(todolist.filter((n)=>{
        if(n.id==req.params.id)
            return n;
    }))
})

app.post('/todos',(req,res)=>{
    const {id,title,comp,disp} = req.body;
    const newtodo = {id,title,comp,disp}
    todolist.push(newtodo);
    res.json({
        msg:" new todo was created "
    })
})

app.put('/todos/:id',(req,res)=>{
    const comp = req.body.comp;
    todolist.filter((n)=>{
        if(n.id==req.params.id)
            n.comp=comp
    })
    res.json({
        msg:"task updateed"
    })
})

app.delete('/todos/:id',(req,res)=>{
    const edit = todolist.filter((n)=>
        (n.id!=req.params.id)
    )
    res.send(edit)
})

app.listen(3001)