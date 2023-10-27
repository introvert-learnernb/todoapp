const router = require('express').Router();
const Todo = require('../models/Todo');

//routes

router.post('/add/todo',(req,res)=>{
    const {todo} = req.body;
   
    //save the todo..

    const newToDo = new Todo({todo});

    newToDo.save()
    .then(()=>{
        console.log("Successfully Added the todo..");
        res.redirect('/');
    })
    .catch((err)=> {console.log(err)});

})
.get('/delete/todo/:_id', (req,res)=>{
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(() =>{
        console.log('Deleted Todo..');
        res.redirect('/')
    })
    .catch((err) => {console.log(err)});
})








module.exports = router;