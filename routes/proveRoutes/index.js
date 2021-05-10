const routes = require('express').Router();

routes
    .use('/02',require('./prove02'))
    .use('/03',require('./prove03'))
    /*.get('/',(req,res,next)=>{
        res.render('pages/proveActivities/',{
            pageTitle: 'Prove Activities',
            path:'/proveActivities'
        })
    })*/

module.exports = routes;