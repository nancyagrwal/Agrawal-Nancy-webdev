var app = require('../../express');


var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" , profilePicture: ""},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" , profilePicture: ""},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" , profilePicture: ""},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" , profilePicture: ""}
];

//Listen for incoming http requests
app.get('/api/assignment/user/:userId', findUserById);
app.get('/api/assignment/user' , findUserByCredentials);
app.get('/api/assignment/user', findUserByUsername);
app.post('/api/assignment/user', createUser);
app.put('/api/assignment/user/:userId', updateUser);
app.delete('/api/assignment/user/:userId', deleteUser);
app.post ("/api/upload", upload.single('myFile'), uploadImage);


function deleteUser(req, res) {
    var userId = req.params.userId;
    for (var u in users) {
        if (users[u]._id === userId) {
            users.splice(u, 1);
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}

function updateUser(req, res) {
    var user = req.body;
    for (var u in users) {
        if (users[u]._id === req.params.userId) {
            users[u] = user;
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}

function createUser(req, res) {
    var user = req.body;
    user._id = (new Date()).getTime() + "";
    users.push(user);
    res.json(user);
}


function findUserByCredentials(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    if (username && password) {

        for (var u in users) {
            var user = users[u];
            if (user.username === username &&
                user.password === password) {

                res.json(user);
                return;
            }
        }
        res.sendStatus(404);
        return;
    }
    else {
        res.json(users);
    }
}

function findUserByUsername(req, res) {
    var username = req.query.username;
    var password = req.query.password;
     if (username) {
        for (var u in users) {
            var user = users[u];
            if (user.username === username) {
                // res.send(user);
                res.json(user);
                return;
            }
        }
        res.sendStatus(404);
        return;

    }
    else {
        res.json(users);
    }
}

function findUserById(req, res) {


    var userId = req.params['userId'];
    for (var u in users) {
        if (userId === users[u]._id) {
            res.send(users[u]);
            return;
        }
    }
    return res.sendStatus(404);
}


function uploadImage(req, res) {

    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    var imageUpload = null;
    for(var w in users) {
        if (users[w]._id === userId) {
            imageUpload = users[w].profilePicture;
            break;
        }
    }
    imageUpload.url = '/project/uploads/'+filename;

    var callbackUrl   = "/project/#!/user/"+userId;

    res.redirect(callbackUrl);
}