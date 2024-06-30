const express = require("express")
const { createTodo, updateTodo } = require("./types")
const app = express()
const port = 3000

app.use(express.json())


app.post("/todo",function(req,res){
    const createPayload  = req.body;
     const parsePayload = createTodo.safeParse(createPayload)
     if(!parsePayload.success) {
        req.statusCode(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
     }
     //save this in mongo db
})


app.get("/todos",function(req,res){

})

app.put("/completed",function(req,res){
    const updatedPayload = req.body;
    const parsePayload = updateTodo.safeParse(updatedPayload)
    if(!parsePayload.success) {
        req.statusCode(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
})