var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/developer_db', { useNewUrlParser: true },(err)=>{
    if(err){
        process.exit(1);
    }/*else {
        console.log("DB connection success");
    }*/


});
