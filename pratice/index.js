const ex=require('express');
const ap=ex();
const pool=require('./db');

ap.use(ex.json());

const cors = require('cors');
ap.use(cors());  

const bodyParser=require('body-parser');
ap.use(bodyParser.json());

const {check,validationResult}=require('express-validator');
const {param}=require('express-validator');

ap.get('/',(req,res)=>{
    res.send("home page ");
});

ap.get('/data',async(req,res)=>{
    try{
        const r=await pool.query('select * from MenuItems')
        res.json(r.rows);
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
});

ap.get('/type',async(req,res)=>{
    try{
        const r=await pool.query('select * from menutype')
        res.json(r.rows);
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
});

ap.get('/tmenutype',async(req,res)=>{
    try{
        const r=await pool.query('select count(*) from menutype')
        res.json(r.rows);
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
})

ap.get('/tmenuitem',async(req,res)=>{
    try{
        const r=await pool.query('select count(*) from menuitems')
        res.json(r.rows);
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
});


// total breakfast

ap.get('/tbf',async(req,res)=>{
    try{
        const r=await pool.query('select count(mtid) from menuitems where mtid=1')
        res.json(r.rows);
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
})

// total lunch 

ap.get('/tlunch',async(req,res)=>{
    try{
        const r=await pool.query('select count(mtid) from menuitems where mtid=2')
        res.json(r.rows);
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
})

// total dinner

ap.get('/tdinner',async(req,res)=>{
    try{
        const r=await pool.query('select count(mtid) from menuitems where mtid=3')
        res.json(r.rows);
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
})


// total sweets

ap.get('/tsweets',async(req,res)=>{
    try{
        const r=await pool.query('select count(mtid) from menuitems where mtid=4')
        res.json(r.rows);
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
})


// total drinks

ap.get('/tdrink',async(req,res)=>{
    try{
        const r=await pool.query('select count(mtid) from menuitems where mtid=5')
        res.json(r.rows);
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
});

/////////////////////////////////////////////////////////////////////////
ap.get('/menut',async(req,res)=>{
    try{
        const r=await pool.query('select * from menutype')
        res.json(r.rows);
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
});

// breakfast 

ap.get('/bf',async(req,res)=>{
    try{
        const r=await pool.query('select mt.menutype,mi.dishname,mi.description,mi.price_half,mi.price_full from MenuType mt Join MenuItems mi On mt.mtid=mi.mtid where mt.mtid=1' );
        res.json(r.rows);
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
});


//lunch


ap.get('/lunch',async(req,res)=>{
    try{
        const r=await pool.query('select mt.menutype,mi.dishname,mi.description,mi.price_half,mi.price_full from MenuType mt Join MenuItems mi On mt.mtid=mi.mtid where mt.mtid=2');
        res.json(r.rows);
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
});

//dinner


ap.get('/dinner',async(req,res)=>{
    try{
        const r=await pool.query('select mt.menutype,mi.dishname,mi.description,mi.price_half,mi.price_full from MenuType mt Join MenuItems mi On mt.mtid=mi.mtid where mt.mtid=3');
        res.json(r.rows);
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
});

ap.get('/sweets',async(req,res)=>{
    try{
        const r=await pool.query('select mt.menutype,mi.dishname,mi.description,mi.price_half,mi.price_full from MenuType mt Join MenuItems mi On mt.mtid=mi.mtid where mt.mtid=4');
        res.json(r.rows);
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
});

ap.get('/drinks',async(req,res)=>{
    try{
        const r=await pool.query('select mt.menutype,mi.dishname,mi.description,mi.price_half,mi.price_full from MenuType mt Join MenuItems mi On mt.mtid=mi.mtid where mt.mtid=5');
        res.json(r.rows);
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
});

// data in

ap.post('/datain',[check('menutype').notEmpty().withMessage('Enter the type')],async(req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({erros:errors.array()});
    }

    try{
        const{menutype}=req.body;

        const ck=await pool.query('select *from menutype where menutype=$1',[menutype]);
        if(ck.rows.length>0){
            res.send("phele se he hai");
        }
        else{
            const q=('INSERT INTO menutype (menutype) VALUES($1)');
            const v=[menutype];
            await pool.query(q,v);
            res.send("saved");
        }
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
});

//  delete ka

ap.delete('/datadel',[check('mtid').notEmpty().withMessage('Enter id')],async(req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({erros:errors.array()});
        console.log(errors)
    }

    try{
        const{mtid}=req.body;

        const ck=await pool.query('select *from menutype where mtid=$1',[mtid]);
        if(ck.rows.length===0){
            res.send("Id does not exits");
        }
        else{
            const q=('delete from menutype where mtid =$1');
            const v=[mtid];
            await pool.query(q,v);
            res.send("data deleted");
        }
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
});

// updtade
ap.put('/dataup',[check('mtid').notEmpty().withMessage('enter id '),check('menutype').notEmpty().withMessage("Enter new data")],
async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({erros:errors.array()});
        console.log(errors)
    }
     try{
        const{mtid,menutype}=req.body;

        const ck=await pool.query('select *from menutype where mtid=$1',[mtid]);
        if(ck.rows.length===0){
            res.send("Id does not exits");
        }
        else{
            const q=('UPDATE menutype SET menutype = $1 WHERE mtid =$2');
            const v=[menutype,mtid];
            await pool.query(q,v);
            res.send("data updated");
        }
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
});


//menuitems

//1) insert a new data

ap.post('/datainn',[check('mtid').notEmpty().withMessage('Enter the type of dish'),
    check('dishname').notEmpty().withMessage('Enter the name of the dish'), 
    check('price_half').notEmpty().withMessage('Enter the half price'),
    check('price_full').notEmpty().withMessage('Enter the full price'),
    check('description').notEmpty().withMessage('Enter the discription of the dish')
],async(req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({erros:errors.array()});
    }

    try{
        const{mtid,dishname,price_half,price_full,description}=req.body;

        const ck=await pool.query('select * from menuitems where dishname=$1',[dishname]);
        if(ck.rows.length>0){
            res.send("ye dish phele se he hai");
        }
        else{
            const q=('INSERT INTO menuitems (mtid, dishname, price_half, price_full, description) VALUES ($1, $2, $3, $4, $5)' );
            const v= [mtid, dishname, price_half, price_full,description];
            await pool.query(q,v);
            res.send("saved");
        }
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
});


// deleting the data


ap.delete('/datadell',[check('dishid').notEmpty().withMessage('Enter id')],async(req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({erros:errors.array()});
        console.log(errors)
    }

    try{
        const{dishid}=req.body;

        const ck=await pool.query('select *from  menuitems where dishid=$1',[dishid]);
        if(ck.rows.length===0){
            res.send("Id does not exits");
        }
        else{
            const q=('delete from menuitems where dishid =$1');
            const v=[dishid];
            await pool.query(q,v);
            res.send("data deleted");
        }
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
});

// updtade
ap.put('/dataupp',[check('mtid').notEmpty().withMessage('enter id '),
    check('dishname').notEmpty().withMessage("Enter the new name of the dish"),
    check('price_half').notEmpty().withMessage("Enter the new half price"),
    check('price_full').notEmpty().withMessage("Enter the new full price"),
    check('description').notEmpty().withMessage("Enter the new name of the dish")],
async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({erros:errors.array()});
        console.log(errors)
    }
     try{
        const{dishid,mtid,dishname,price_half,price_full,description}=req.body;

        const ck=await pool.query('select *from menuitems where dishid=$1',[dishid]);
        if(ck.rows.length===0){
            res.send("Id does not exits");
        }
        else{
            const q=('UPDATE menuitems SET mtid=$2,dishname = $3, description =$4, price_half=$5,price_full =$6 WHERE dishid =$1');
            //const v=[dishid,mtid,dishname,price_half,price_full,description];



// सही sequence
            const v = [dishid, mtid, dishname, description, price_half, price_full];

            await pool.query(q,v);
            res.send("data updated");
        }
    }
    catch(err){
        console.error(err);
        res.status(500).send("not open");
    }
});




ap.listen(3000,'0.0.0.0',()=>{
    console.log("server start");
})