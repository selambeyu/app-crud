var userService=require('../service/user');

exports.create=function(req,res,next){
    var body=new User(req.body);
    if(!body.username){
        res.status(400).send("user name is missing");
        return;
    }
    userService.createUser(body,function(error,response){
        if(response){
            res.status(201).send(response);
        }else if (error) {
            res.status(400).send(error)
        }{

        }
    });
}


exports.find = function (req, res) {
    var params = req.params || {};
    var query = {
        username: params.username
    };
    if (!query) {
        res.status(400).send('Bad Request');
        return;
    }
    userService.findUser(query, function (error, response) {
        if (error) {
            res.status(404).send(error);
            return;
        }
        if (response) {
            res.status(200).send(response);
            return;
        }
        if (!response) {
            res.status(204).send('No Data Found');
        }
    });
}




exports.updateById = function (req, res) {
    var body = req.body;

    if (!body.id) {
        res.status(400).send('Id is missing');
        return;
    }
    var updateData = body.data || {}
    userService.updateUserById(body.id, updateData, (err, response) => {
        if (response) {
            res.status(200).send(response);
        } else if (err) {
            res.status(400).send(err);
        }
    });
}



exports.delete = function (req, res) {
    var body = req.body || {};
    var query = body.query;
    if (!query) {
        res.status(400).send('Bad Request');
        return;
    }
    userService.deleteUser(query, function (error, response) {
        if (error) {
            res.status(400).send(error);
            return;
        }
        if (response) {
            if (response.n === 1 && response.ok === 1) {
                res.status(202).send(body);
            }
            if (response.n === 0 && response.ok === 1) {
                res.status(204).send({
                    message: 'No data found'
                });
            }
        }
    });
}



class User {
    constructor(userData) {
        this.username = userData.username || '';
        this.firstName = userData.firstName || '';
        this.lastName = userData.lastName || '';
        this.dob = userData.dob || '';
        this.address = userData.address || '';
        this.phone = userData.phone || '';
        this.role = userData.role || '';
    }
}