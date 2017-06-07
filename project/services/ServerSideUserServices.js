var app = require('../../express');

var multer = require('multer');
var upload = multer({ dest: __dirname+'/../../public/project/uploads' });
var users = [{
        _id: "1",
        firstName: "Edward",
        lastName: "Kemp",
        username: "EdwardKemp",
        email: "ed@ed",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/ed.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [{
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
        username: "Adriana Black",
        email: "adri@adri",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/adri.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [{
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
        username: "Andrew Smith",
        email: "andrew@andrew",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/andrew.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [{
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
        username: "Axel Berdugo",
        email: "axel@axel",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/axel.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [{
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
    },{
    _id: "5",
    firstName: "Becky",
    lastName: "Bolton",
        username: "Becky Bolton",
        email: "becky@becky",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/bex.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [{
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
                "locationName" : "Tel Aviv",
                "locationId" : 84326
            },
            {
                "locationName" : "Muscat",
                "locationId" : 67764
            },
            {
                "locationName" : "Lima",
                "locationId" : 65741
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
    _id: "6",
    firstName: "Ben",
    lastName: "Blowers",
        username: "Ben Blowers",
        email: "ben@ben",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/ben.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [{
            "locationName" : "Algiers",
            "locationId" : 40535
        },
            {
                "locationName" : "Warsaw",
                "locationId" : 90711
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
                "locationName" : "Milan",
                "locationId" : 68768
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
                "locationName" : "Brussels",
                "locationId" : 43141
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
    },{
    _id: "7",
    firstName: "Cameron",
    lastName: "Perrin",
        username: "Cameron Perrin",
        email: "cameron@cameron",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/cameron.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [{
            "locationName" : "Algiers",
            "locationId" : 40535
        },
            {
                "locationName" : "Warsaw",
                "locationId" : 90711
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
                "locationName" : "Milan",
                "locationId" : 68768
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
                "locationName" : "Brussels",
                "locationId" : 43141
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
            },
            {
                "locationName" : "Dusseldorf",
                "locationId" : 47891
            }]
    },{
    _id: "8",
    firstName: "Chetan",
    lastName: "Barot",
        username: "Chetan Barot",
        email: "chetan@chetan",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/chetan.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [{
            "locationName" : "Bangkok",
            "locationId" : 42795
        },
            {
                "locationName" : "Bangkok",
                "locationId" : 42795
            },
            {
                "locationName" : "Singapore",
                "locationId" : 81870
            },
            {
                "locationName" : "Singapore",
                "locationId" : 81870
            },
            {
                "locationName" : "Manila",
                "locationId" : 68284
            },
            {
                "locationName" : "Manila",
                "locationId" : 68284
            },
            {
                "locationName" : "Istanbul",
                "locationId" : 59316
            },
            {
                "locationName" : "Jeddah",
                "locationId" : 60932
            },
            {
                "locationName" : "Jeddah",
                "locationId" : 60932
            },
            {
                "locationName" : "Kuala Lumpur",
                "locationId" : 64012
            },
            {
                "locationName" : "Kuala Lumpur",
                "locationId" : 64012
            },
            {
                "locationName" : "Hong Kong",
                "locationId" : 56615
            },
            {
                "locationName" : "Hong Kong",
                "locationId" : 56615
            },
            {
                "locationName" : "Doha",
                "locationId" : 47592
            },
            {
                "locationName" : "Doha",
                "locationId" : 47592
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
                "locationName" : "Cairo",
                "locationId" : 44617
            },
            {
                "locationName" : "Addis Ababa",
                "locationId" : 40148
            },
            {
                "locationName" : "Addis Ababa",
                "locationId" : 40148
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
                "locationName" : "Tel Aviv",
                "locationId" : 84326
            },
            {
                "locationName" : "Bogota",
                "locationId" : 42983
            },
            {
                "locationName" : "Bogota",
                "locationId" : 42983
            },
            {
                "locationName" : "Buenos Aires",
                "locationId" : 50421
            },
            {
                "locationName" : "Sao Paulo",
                "locationId" : 54661
            },
            {
                "locationName" : "Hamilton",
                "locationId" : 42449
            },
            {
                "locationName" : "Mexico City",
                "locationId" : 67864
            },
            {
                "locationName" : "Cancun",
                "locationId" : 45582
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
                "locationName" : "Dubai",
                "locationId" : 48018
            },
            {
                "locationName" : "Washington",
                "locationId" : 58436
            },
            {
                "locationName" : "San Francisco",
                "locationId" : 81727
            },
            {
                "locationName" : "Nassau",
                "locationId" : 69971
            },
            {
                "locationName" : "Nassau",
                "locationId" : 69971
            },
            {
                "locationName" : "Bridgetown",
                "locationId" : 42601
            },
            {
                "locationName" : "Havana",
                "locationId" : 56150
            },
            {
                "locationName" : "Chennai",
                "locationId" : 67649
            },
            {
                "locationName" : "Seoul",
                "locationId" : 58542
            },
            {
                "locationName" : "Tokyo",
                "locationId" : 70788
            },
            {
                "locationName" : "Kathmandu",
                "locationId" : 63965
            },
            {
                "locationName" : "Montego Bay",
                "locationId" : 67706
            },
            {
                "locationName" : "Karachi",
                "locationId" : 63385
            },
            {
                "locationName" : "Colombo",
                "locationId" : 45186
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
                "locationName" : "Porto",
                "locationId" : 72991
            },
            {
                "locationName" : "Lisbon",
                "locationId" : 65747
            },
            {
                "locationName" : "Tallinn",
                "locationId" : 84316
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
                "locationName" : "Johannesburg",
                "locationId" : 61362
            },
            {
                "locationName" : "Johannesburg",
                "locationId" : 61362
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
                "locationName" : "Milan",
                "locationId" : 68768
            },
            {
                "locationName" : "Milan",
                "locationId" : 65742
            },
            {
                "locationName" : "Luqa",
                "locationId" : 68177
            },
            {
                "locationName" : "Luqa",
                "locationId" : 68177
            },
            {
                "locationName" : "Corfu",
                "locationId" : 44869
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
                "locationName" : "Stavanger",
                "locationId" : 82487
            },
            {
                "locationName" : "Stavanger",
                "locationId" : 82487
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
            },
            {
                "locationName" : "Prague",
                "locationId" : 75383
            },
            {
                "locationName" : "Dusseldorf",
                "locationId" : 47891
            }]
    },{
    _id: "9",
    firstName: "Chris",
    lastName: "Casey",
        username: "Chris Casey",
        email: "chris@chris",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/chris.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [{
            "locationName" : "Bangkok",
            "locationId" : 42795
        },
            {
                "locationName" : "Singapore",
                "locationId" : 81870
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
                "locationName" : "Hong Kong",
                "locationId" : 56615
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
                "locationName" : "Managua",
                "locationId" : 67937
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
                "locationName" : "Kathmandu",
                "locationId" : 63965
            },
            {
                "locationName" : "Yerevan",
                "locationId" : 50238
            },
            {
                "locationName" : "Karachi",
                "locationId" : 63385
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
                "locationName" : "Johannesburg",
                "locationId" : 61362
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
                "locationName" : "Budapest",
                "locationId" : 43268
            },
            {
                "locationName" : "Luqa",
                "locationId" : 68177
            },
            {
                "locationName" : "Corfu",
                "locationId" : 44869
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
            },
            {
                "locationName" : "Dusseldorf",
                "locationId" : 47891
            }]
    },{
    _id: "10",
    firstName: "Jason",
    lastName: "Lai",
        username: "Jason Lai",
        email: "jason@jason",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/jason.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [{
            "locationName" : "Algiers",
            "locationId" : 40535
        },
            {
                "locationName" : "Reykjavik",
                "locationId" : 63238
            },
            {
                "locationName" : "Skopje",
                "locationId" : 81968
            },
            {
                "locationName" : "Moscow",
                "locationId" : 82495
            },
            {
                "locationName" : "Luxembourg",
                "locationId" : 66328
            },
            {
                "locationName" : "Tallinn",
                "locationId" : 84316
            },
            {
                "locationName" : "Athens",
                "locationId" : 40920
            },
            {
                "locationName" : "Stavanger",
                "locationId" : 82487
            },
            {
                "locationName" : "Stavanger",
                "locationId" : 82487
            }]
    },{
    _id: "11",
    firstName: "Jeremy",
    lastName: "Smith",
        username: "Jeremy Smith",
        email: "jeremy@jeremy",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/jeremy.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [{
            "locationName" : "Lima",
            "locationId" : 65741
        },
            {
                "locationName" : "Reykjavik",
                "locationId" : 63238
            },
            {
                "locationName" : "Sao Paulo",
                "locationId" : 54661
            },
            {
                "locationName" : "Toronto",
                "locationId" : 96474
            },
            {
                "locationName" : "Cancun",
                "locationId" : 45582
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
            },
            {
                "locationName" : "Amsterdam",
                "locationId" : 40595
            }]
    },{
    _id: "12",
    firstName: "Juliana",
    lastName: "Wyatt",
        username: "Julian Wyatt",
        email: "julian@julian",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/julian.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [{
            "locationName" : "Istanbul",
            "locationId" : 59316
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
    _id: "13",
    firstName: "Will",
    lastName: "Cook",
        username: "Will Cook",
        email: "will@will",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/will.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [{
            "locationName" : "Nairobi",
            "locationId" : 70015
        },
            {
                "locationName" : "Nairobi",
                "locationId" : 70015
            },
            {
                "locationName" : "Manila",
                "locationId" : 68284
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
                "locationName" : "Bahrain",
                "locationId" : 42312
            },
            {
                "locationName" : "Macau",
                "locationId" : 67901
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
                "locationName" : "Kuwait",
                "locationId" : 64105
            },
            {
                "locationName" : "Tel Aviv",
                "locationId" : 84326
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
                "locationName" : "Lima",
                "locationId" : 65741
            },
            {
                "locationName" : "Auckland",
                "locationId" : 40492
            },
            {
                "locationName" : "Easter Island",
                "locationId" : 59155
            },
            {
                "locationName" : "Hamilton",
                "locationId" : 42449
            },
            {
                "locationName" : "Cancun",
                "locationId" : 45582
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
                "locationName" : "Mauritius",
                "locationId" : 68485
            },
            {
                "locationName" : "Saint Thomas",
                "locationId" : 82404
            },
            {
                "locationName" : "Nassau",
                "locationId" : 69971
            },
            {
                "locationName" : "Nassau",
                "locationId" : 69971
            },
            {
                "locationName" : "Oranjestad",
                "locationId" : 40961
            },
            {
                "locationName" : "Grand Cayman Island",
                "locationId" : 53933
            },
            {
                "locationName" : "Bridgetown",
                "locationId" : 42601
            },
            {
                "locationName" : "Pointe-a-Pitre",
                "locationId" : 75488
            },
            {
                "locationName" : "Chennai",
                "locationId" : 67649
            },
            {
                "locationName" : "Male",
                "locationId" : 68181
            },
            {
                "locationName" : "Liberia",
                "locationId" : 65746
            },
            {
                "locationName" : "Montego Bay",
                "locationId" : 67706
            },
            {
                "locationName" : "Lisbon",
                "locationId" : 65747
            },
            {
                "locationName" : "Saint-Denis",
                "locationId" : 80142
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
                "locationName" : "Luqa",
                "locationId" : 68177
            },
            {
                "locationName" : "Corfu",
                "locationId" : 44869
            }]
    },{
    _id: "14",
    firstName: "Kaitlyn",
    lastName: "Tierney",
        username: "Kaitlyn Tierney",
        email: "kat@kat",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/kat.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [{
            "locationName" : "Nairobi",
            "locationId" : 70015
        },
            {
                "locationName" : "Manila",
                "locationId" : 68284
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
                "locationName" : "Tel Aviv",
                "locationId" : 84326
            },
            {
                "locationName" : "Muscat",
                "locationId" : 67764
            },
            {
                "locationName" : "Lima",
                "locationId" : 65741
            },
            {
                "locationName" : "Hamilton",
                "locationId" : 42449
            },
            {
                "locationName" : "Cancun",
                "locationId" : 45582
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
                "locationName" : "Nassau",
                "locationId" : 69971
            },
            {
                "locationName" : "Bridgetown",
                "locationId" : 42601
            },
            {
                "locationName" : "Chennai",
                "locationId" : 67649
            },
            {
                "locationName" : "Montego Bay",
                "locationId" : 67706
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
                "locationName" : "Luqa",
                "locationId" : 68177
            },
            {
                "locationName" : "Corfu",
                "locationId" : 44869
            }]
    },{
    _id: "15",
    firstName: "Shu",
    lastName: "Chia",
        username: "ShuChia",
        email: "shu@shu",
        profilePicture: "https://s3-eu-west-1.amazonaws.com/travelly/ProfilePictures/shu.jpg",
        password: "password",
        passwordConfirmation: "password",
        filteredSearchResults: [{
            "locationName" : "Bangkok",
            "locationId" : 42795
        },
            {
                "locationName" : "Bangkok",
                "locationId" : 42795
            },
            {
                "locationName" : "Tel Aviv",
                "locationId" : 84326
            },
            {
                "locationName" : "Tel Aviv",
                "locationId" : 84326
            },
            {
                "locationName" : "Sydney",
                "locationId" : 82628
            },
            {
                "locationName" : "Liberia",
                "locationId" : 65746
            },
            {
                "locationName" : "Johannesburg",
                "locationId" : 61362
            },
            {
                "locationName" : "Paris",
                "locationId" : 73097
            }]
    }
];
/*
var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" , profilePicture: ""},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" , profilePicture: ""},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" , profilePicture: ""},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" , profilePicture: ""}
];*/

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