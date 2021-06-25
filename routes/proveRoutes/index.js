const routes = require('express').Router();

routes
    .use('/02',require('./prove02'))
    .use('/03',require('./prove03'))
    .use('/04',require('./prove04'))
    .use('/05',require('./prove05'))
    .use('/10',require('./prove10'))
    /*.get('/',(req,res,next)=>{
        res.render('pages/proveActivities/',{
            pageTitle: 'Prove Activities',
            path:'/proveActivities'
        })
    })*/

module.exports = routes;