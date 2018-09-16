const mongoose = require('mongoose');
const Scheme =mongoose.Schema;


const taskScheme = new Scheme({

    title:String,
    description:String,
    status:{
        type:Boolean,
        default:false
    }

});

module.exports = mongoose.model('tasks',taskScheme);