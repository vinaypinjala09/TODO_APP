const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://vinaypinjala:T0H6PuUfjkzgrft4@cluster0.mr7p0cv.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title:String,
    description: String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}