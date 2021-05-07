const routes = require('express').Router();

routes
    .use('/02',require('./prove02'))
    .get('/',(req,res,net)=>{
        res.render('pages/teamActivities/',{
            pageTitle: 'Team Activities',
            path:'/teamActivities'
        })
    })