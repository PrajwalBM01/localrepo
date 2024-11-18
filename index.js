const express = require("express");
const app = express();
var users = [{
    name:"jhon",
    kidneys:[{
        helthy:false
    },{
        healthy:true
    }]
}];


app.use(express.json());

app.get('/',(req,res)=>{
    const johankidney = users[0].kidneys;
    const nok = johankidney.length;
    let healthykidney = 0;
    for(i=0;i<nok;i++){
        if(johankidney[i].healthy)
            healthykidney+=1;
    }
    let unhealthy = nok-healthykidney;
    res.json({
        nok,
        healthykidney,
        unhealthy
    })
});


app.post('/',(req,res)=>{
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    })
    res.json({
        msg: 'done!'
    })
})

app.put('/',(req,res)=>{
    
    for(let i=0;i<users[0].kidneys.length;i++)
        users[0].kidneys[i].healthy = true;
    res.json({});
})

app.delete('/',(req,res)=>{
    const newkideneys = [];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy)
            newkideneys.push({
                healthy:true
            })
    }
    users[0].kidneys = newkideneys;
    res.json({msg:"done"})
})
app.listen(3000);
