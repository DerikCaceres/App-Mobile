const express = require('express');
const router = express.Router();
const Estudio = requied('../models/estudio') 
 
router.post('/',async(req, res)=>{
 
    try{

        const estudio = await new estudio(req.body).save();
        res.json({estudio});

    }catch(err){
        res.json({error: true, message: err.message })
    }

});

module.exports = router;