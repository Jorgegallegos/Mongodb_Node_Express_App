const express=require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/',async (req, res) => {
    const task = await Task.find();
    res.render('index',{
        task:task
    });
});

router.post('/add',async (req,res) => {
    const task = new Task(req.body);
    await task.save();
    res.redirect("/");
});

router.get('/delete/:id',async (req,res) => {
    const {id}=req.params;
    await Task.remove({ _id : id });
    res.redirect("/");
});

router.get('/edit/:id',async (req,res) =>{
    const {id}=req.params;
    const task=await Task.findById(id);
    res.render('index',{
        task:task
    });
});

module.exports = router;