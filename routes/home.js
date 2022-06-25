const{Router}= require('express')
const router = Router()
router.get('/',async (req,res)=>{

    res.render('index'),
    {
        title:'Shop'
    }
})

router.get('/admin',async (req,res)=>{

    res.render('admin'),
    {
        title:'Admin',
        isAdmin:true
    }
})


module.exports = router