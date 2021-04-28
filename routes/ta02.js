//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

const users = ['Adam','Mary','Michael'];
var errors = '';
router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Team Activity 02', 
        users:users,
        error:errors,
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/addUser', (req, res, next) => {
    const username = req.body.username;
    if(username!=''){
        if(users.indexOf(username)==-1){
            users.push(username);
            errors='';
        }else{
            errors='Duplicated User';
        }
    }else{
        errors='Empty User';
    }   
    res.redirect('/ta02');
});
router.post('/removeUser', (req, res, next) => {
    const id =users.indexOf(req.body.username)
    if (id!=-1){
        errors='';
        users.splice(id,1);
    }else{
        errors='User Name not found';
    }
    res.redirect('/ta02');
});

module.exports = router;