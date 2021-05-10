//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

var books = [
    {name:"How to avoid a Climate Disaster",
    summary:"How To Avoid A Climate Disaster is Bill Gates’ plea to the individuals, governments, and business leaders of the world to reduce greenhouse emissions by changing the way we make things, plug in, grow things, get around, and keep warm and cool.",
    extraInfo:""
    },
    {name:"Breath",
    summary:"Breath is a fascinating and helpful guide to understanding the science of breathing, including how doing it slowly and through your nose is best for your lungs and body, and the many proven mental and physical benefits of being more mindful of how you inhale and exhale.",
    extraInfo:"The favorite quote from the author: \"By taking longer breaths, we allow our lungs to soak up more in fewer breaths\" "
    },
];
var error='';
router.get('/',(req, res, next) => {
    res.render('pages/proveActivities/prove02', { 
        title: 'Prove Activity 02', 
        books:books,
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});
router.post('/addBook',(req, res, next) => {
    let name =  req.body.name;
    let summary =  req.body.summary;
    let extraInfo =  req.body.extrainfo;
    books.push({name:name,summary:summary,extraInfo:extraInfo});
    res.redirect('/proveActivities/02');
});

module.exports = router;