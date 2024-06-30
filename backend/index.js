const express = require("express")
const { createTodo, updateTodo } = require("./types")
const { todo } = require("./db")
const app = express()
const port = 3000

app.use(express.json())


app.post("/todo",async function(req,res){
    const createPayload  = req.body;
     const parsePayload = createTodo.safeParse(createPayload)
     if(!parsePayload.success) {
        req.statusCode(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
     }
     //save this in mongo db
     await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed: false
     })

     res.json({
        msg:"Todo Created"
     })
})


app.get("/todos",async function(req,res){

     const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){
    const updatedPayload = req.body;
    const parsePayload = updateTodo.safeParse(updatedPayload)
    if(!parsePayload.success) {
        req.statusCode(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }

    const todo = await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
})