const routes = require('express').Router();
const teamActivities = require('./teamRoutes');
const proveActivities = require('./proveRoutes');

routes
    .use('/teamActivities',teamActivities)
    .use('/proveActivities',proveActivities)
    .get('/',(req,res,next)=>{
        res.render('pages/index',{title: 'Wellcome to my CSE341',path:'/'});
    })
    .use((req,res,next)=>{
        res.render('pages/404',{title: '404 - Page Not Found',path:req.url});
    })

module.exports=routes;