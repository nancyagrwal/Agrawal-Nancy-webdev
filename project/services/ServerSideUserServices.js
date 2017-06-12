var app = require('../../express');

var multer = require('multer');
var upload = multer({ dest: __dirname+'/../../public/project/uploads' });


var users = [{
        _id: "1",
        firstName: "Edward",
        lastName: "Kemp",
        username: "EdwardKemp",
        userType: "Commercial",
        email: "ed@ed",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/ed.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [
            {
            "locationName" : "Nairobi",
            "locationId" : 70015
        },
            {
                "locationName" : "Manila",
                "locationId" : 68284
            },
            {
                "locationName" : "Bahrain",
                "locationId" : 42312
            },
            {
                "locationName" : "Luanda",
                "locationId" : 65348
            },
            {
                "locationName" : "Kuwait",
                "locationId" : 64105
            },
            {
                "locationName" : "Tel Aviv",
                "locationId" : 84326
            },
            {
                "locationName" : "Muscat",
                "locationId" : 67764
            },
            {
                "locationName" : "Tehran",
                "locationId" : 58913
            },
            {
                "locationName" : "Tehran",
                "locationId" : 58913
            },
            {
                "locationName" : "Larnaca",
                "locationId" : 65441
            },
            {
                "locationName" : "Larnaca",
                "locationId" : 65441
            },
            {
                "locationName" : "Chennai",
                "locationId" : 67649
            },
            {
                "locationName" : "Lisbon",
                "locationId" : 65747
            },
            {
                "locationName" : "Casablanca",
                "locationId" : 45198
            },
            {
                "locationName" : "Casablanca",
                "locationId" : 45198
            },
            {
                "locationName" : "Luqa",
                "locationId" : 68177
            },
            {
                "locationName" : "Corfu",
                "locationId" : 44869
            }]
    },{
        _id: "2",
        firstName: "Adriana",
        lastName: "Black",
        username: "AdrianaBlack",
        userType: "Business User",
        email: "adri@adri",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/adri.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [
            {
            "locationName" : "Lima",
            "locationId" : 65741
        },
            {
                "locationName" : "Reykjavik",
                "locationId" : 63238
            },
            {
                "locationName" : "Toronto",
                "locationId" : 96474
            },
            {
                "locationName" : "San Francisco",
                "locationId" : 81727
            },
            {
                "locationName" : "Managua",
                "locationId" : 67937
            },
            {
                "locationName" : "Tokyo",
                "locationId" : 70788
            },
            {
                "locationName" : "San Salvador",
                "locationId" : 81484
            },
            {
                "locationName" : "Yerevan",
                "locationId" : 50238
            },
            {
                "locationName" : "Helsinki",
                "locationId" : 56332
            },
            {
                "locationName" : "Bucharest",
                "locationId" : 73184
            },
            {
                "locationName" : "Bucharest",
                "locationId" : 73184
            },
            {
                "locationName" : "Budapest",
                "locationId" : 43268
            },
            {
                "locationName" : "Budapest",
                "locationId" : 43268
            },
            {
                "locationName" : "Cork",
                "locationId" : 73083
            },
            {
                "locationName" : "Shannon",
                "locationId" : 82110
            },
            {
                "locationName" : "Amsterdam",
                "locationId" : 40595
            }]
    },{
        _id: "3",
        firstName: "Andrew",
        lastName: "Smith",
        username: "AndrewSmith",
        userType: "Researcher",
        email: "andrew@andrew",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/andrew.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [
            {
            "locationName" : "Istanbul",
            "locationId" : 59316
        },
            {
                "locationName" : "Managua",
                "locationId" : 67937
            },
            {
                "locationName" : "Ahmedabad",
                "locationId" : 40580
            },
            {
                "locationName" : "Dhaka",
                "locationId" : 46915
            },
            {
                "locationName" : "Tunis Carthage",
                "locationId" : 84750
            },
            {
                "locationName" : "Tunis Carthage",
                "locationId" : 84750
            },
            {
                "locationName" : "Luxembourg",
                "locationId" : 66328
            },
            {
                "locationName" : "Tirana",
                "locationId" : 84161
            }]
    },{
        _id: "4",
        firstName: "Axel",
        lastName: "Berdugo",
        username: "AxelBerdugo",
        userType: "Researcher",
        email: "axel@axel",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/axel.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [
            {
            "locationName" : "Bangkok",
            "locationId" : 42795
        },
            {
                "locationName" : "Istanbul",
                "locationId" : 59316
            },
            {
                "locationName" : "Bahrain",
                "locationId" : 42312
            },
            {
                "locationName" : "Luanda",
                "locationId" : 65348
            },
            {
                "locationName" : "Cairo",
                "locationId" : 44617
            },
            {
                "locationName" : "Algiers",
                "locationId" : 40535
            },
            {
                "locationName" : "Algiers",
                "locationId" : 40535
            },
            {
                "locationName" : "Muscat",
                "locationId" : 67764
            },
            {
                "locationName" : "Reykjavik",
                "locationId" : 63238
            },
            {
                "locationName" : "Tehran",
                "locationId" : 58913
            },
            {
                "locationName" : "Larnaca",
                "locationId" : 65441
            },
            {
                "locationName" : "Beirut",
                "locationId" : 42521
            },
            {
                "locationName" : "Beirut",
                "locationId" : 42521
            },
            {
                "locationName" : "San Francisco",
                "locationId" : 81727
            },
            {
                "locationName" : "Skopje",
                "locationId" : 81968
            },
            {
                "locationName" : "Chennai",
                "locationId" : 67649
            },
            {
                "locationName" : "Ahmedabad",
                "locationId" : 40580
            },
            {
                "locationName" : "Yerevan",
                "locationId" : 50238
            },
            {
                "locationName" : "Colombo",
                "locationId" : 45186
            },
            {
                "locationName" : "Moscow",
                "locationId" : 82495
            },
            {
                "locationName" : "Warsaw",
                "locationId" : 90711
            },
            {
                "locationName" : "Warsaw",
                "locationId" : 90711
            },
            {
                "locationName" : "Tunis Carthage",
                "locationId" : 84750
            },
            {
                "locationName" : "Tunis Carthage",
                "locationId" : 84750
            },
            {
                "locationName" : "Helsinki",
                "locationId" : 56332
            },
            {
                "locationName" : "Vienna",
                "locationId" : 88773
            },
            {
                "locationName" : "Vienna",
                "locationId" : 88773
            },
            {
                "locationName" : "Madrid",
                "locationId" : 67652
            },
            {
                "locationName" : "Luxembourg",
                "locationId" : 66328
            },
            {
                "locationName" : "Porto",
                "locationId" : 72991
            },
            {
                "locationName" : "Tallinn",
                "locationId" : 84316
            },
            {
                "locationName" : "Bucharest",
                "locationId" : 73184
            },
            {
                "locationName" : "Bucharest",
                "locationId" : 73184
            },
            {
                "locationName" : "Copenhagen",
                "locationId" : 45336
            },
            {
                "locationName" : "Copenhagen",
                "locationId" : 45336
            },
            {
                "locationName" : "Tirana",
                "locationId" : 84161
            },
            {
                "locationName" : "Lagos",
                "locationId" : 66035
            },
            {
                "locationName" : "Casablanca",
                "locationId" : 45198
            },
            {
                "locationName" : "Casablanca",
                "locationId" : 45198
            },
            {
                "locationName" : "Belgrade",
                "locationId" : 42503
            },
            {
                "locationName" : "Milan",
                "locationId" : 68768
            },
            {
                "locationName" : "Milan",
                "locationId" : 65742
            },
            {
                "locationName" : "Budapest",
                "locationId" : 43268
            },
            {
                "locationName" : "Luqa",
                "locationId" : 68177
            },
            {
                "locationName" : "Athens",
                "locationId" : 40920
            },
            {
                "locationName" : "Cork",
                "locationId" : 73083
            },
            {
                "locationName" : "Shannon",
                "locationId" : 82110
            },
            {
                "locationName" : "Amsterdam",
                "locationId" : 40595
            },
            {
                "locationName" : "Amsterdam",
                "locationId" : 40595
            },
            {
                "locationName" : "Riga",
                "locationId" : 79576
            },
            {
                "locationName" : "Brussels",
                "locationId" : 43141
            },
            {
                "locationName" : "Sofia",
                "locationId" : 82150
            },
            {
                "locationName" : "Sofia",
                "locationId" : 82150
            },
            {
                "locationName" : "Geneva",
                "locationId" : 54833
            },
            {
                "locationName" : "Paris",
                "locationId" : 44759
            },
            {
                "locationName" : "Prague",
                "locationId" : 75383
            }]
    }
];


//Listen for incoming http requests
app.get('/api/project/user/:userId', findUserById);
app.get('/api/project/user' , findUserByCredentials);
app.get('/api/project/user', findUserByUsername);
app.post('/api/project/user', createUser);
app.put('/api/project/user/:userId', updateUser);
app.delete('/api/project/user/:userId', deleteUser);
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
    console.log(username);
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