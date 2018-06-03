var AuthenticationController = require('./controllers/authentication'),  
    TodoController = require('./controllers/todos'),  
    VendorController = require('./controllers/vendor'),  
    RelationController = require('./controllers/relation'),  
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});

module.exports = function(app){

    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        todoRoutes = express.Router(),
        vendorRoutes = express.Router(),
        relationRoutes = express.Router(); 

    // Auth Routes
    apiRoutes.use('/auth', authRoutes);

    authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);

    authRoutes.get('/protected', requireAuth, function(req, res){
        res.send({ content: 'Success'});
    });

    // Todo Routes
    apiRoutes.use('/todos', todoRoutes);

    todoRoutes.get('/', requireAuth, AuthenticationController.roleAuthorization(['reader','creator','editor']), TodoController.getTodos);
    todoRoutes.post('/', requireAuth, AuthenticationController.roleAuthorization(['creator','editor']), TodoController.createTodo);
    todoRoutes.delete('/:todo_id', requireAuth, AuthenticationController.roleAuthorization(['editor']), TodoController.deleteTodo);

// Below relation is to ensure, checking of relations
apiRoutes.use('/relation', relationRoutes);
    relationRoutes.post('/vendor/:vendor_id', requireAuth, AuthenticationController.roleAuthorization(['creator']), RelationController.createRelation);
    relationRoutes.post('/relationinit', requireAuth, AuthenticationController.roleAuthorization(['creator']), RelationController.relationInitialise);
    relationRoutes.post('/relationpause', requireAuth, AuthenticationController.roleAuthorization(['creator']), RelationController.relationPause);
    relationRoutes.get('/:relation_id', requireAuth, AuthenticationController.roleAuthorization(['creator']), RelationController.getRelations);


apiRoutes.use('/vendor', vendorRoutes);
    vendorRoutes.post('/', requireAuth, AuthenticationController.roleAuthorization(['creator']), VendorController.createVendor);
    vendorRoutes.post('/vendorinit', requireAuth, AuthenticationController.roleAuthorization(['creator']), VendorController.vendorInitialise);
    vendorRoutes.post('/vendorpause', requireAuth, AuthenticationController.roleAuthorization(['creator']), VendorController.vendorPause);
    vendorRoutes.get('/', requireAuth, AuthenticationController.roleAuthorization(['reader','creator','editor']), VendorController.getVendors);
    vendorRoutes.get('delete/:vendor_id', requireAuth, AuthenticationController.roleAuthorization(['reader','creator','editor']), VendorController.deleteVendor);
    vendorRoutes.get('download/:vendor_id', requireAuth, AuthenticationController.roleAuthorization(['reader','creator','editor']), VendorController.downloadVendor);

    // Set up routes
    app.use('/api', apiRoutes);

}
