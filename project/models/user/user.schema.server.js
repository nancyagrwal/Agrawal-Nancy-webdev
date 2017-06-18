
module.exports = function () {
    var mongoose =  require('mongoose');
    var UserProjectSchema = mongoose.Schema(
        {
            username: {type: String, required: true, unique: true},
            userType: String,
            password: String,
            firstName: String,
            lastName: String,
            email: String,
            phone: String,
            dateCreated: {type: Date, default: Date.now()},
            facebook : {
                id: String,
                token: String
            },
            google: {
                id: String,
                token: String
            }
        }, {
            collection:"user"
        });
    return UserProjectSchema;
};
