var express = require('express');
var router = express.Router();
var passport = require('passport');
var SimpleStorage = require('../controllers/contract');
router.get('/validate', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const token = req.query.token

    if (token)
        res.json({ success:true})
    else
        res.status(401).json({ success:false })
})
// router.get('/contract',(req,res,next)=>{
//     SimpleStorage.start().then(data=>{
//         console.log(data.accounts);

//         res.json({ success: true, acc:data.accounts})
//     })
    
// })
router.get('/set/:id', passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    // console.log(req.params.id);
    
    // console.log(data.accounts);
    
    SimpleStorage.set(req.params.id).then(data=>{
        res.json({ success: data.success})
    })
    
})
router.get('/get',(req,res,next)=>{
    SimpleStorage.get().then(data=>{
        // console.log(data.accounts);

        res.json({ success: data.success,val:data.val})
    })
    
})
module.exports = router;
