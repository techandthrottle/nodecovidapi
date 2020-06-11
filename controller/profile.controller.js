let Profiles = require('../models/profile.model')

exports.profile_get_all_user = (req, res) => {
    Profiles.find()
        .then(profiles => res.status(200).json({
            "records": profiles.length,
            "data": profiles.map(profile => {
                return {
                    id: profile._id,
                    name: profile.lastname + ', ' + profile.firstname + ' ' + profile.middlename + ' ' + profile.ext,
                    email: profile.email,
                    username: profile.username
                }
            })
        }))
        .catch(err => res.status(500).json({
            error:  + err
            })
        ) ;
}

exports.profile_get_user = (req, res) => {
    
    let userName = req.params.username
    Profiles.findOne({ username : userName })
        .then(users => {
            if(users){
                res.status(200).json({  
                    "id": users._id,
                    "name": users.lastname + `, ` + users.firstname + ` `  + users.middlename + ` ` + users.ext,
                    "email": users.email,
                    "username": users.username
                })
            } else {
                res.status(500).json({
                    "records": users.length,
                    "username": userName,
                    "message": "No data found using the username"
                })
            }
        })
        .catch(err => res.status(400).json({
            error:  + err,
            "Passed name": userName
            })
        ) ;
}

exports.profile_register = (req, res) => {

    const firstname = req.body.firstname;
    const middlename = req.body.middlename;
    const lastname = req.body.lastname;
    const ext = req.body.ext;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const date = new Date();

    bcrypt.hash(password, 10, (err, hash) => {
        if(err){
            return res.status(500).json({
                error:err
            });
        } else {
            Profiles.findOne({ username : username })
            .then(profile => {
                if(!profile){
                    bcrypt.hash(password, 10, (err, hash) => {
                        const newProfile = new Profiles({
                            firstname,
                            middlename,
                            lastname,
                            ext,
                            email,
                            username,
                            password,
                            date
                        })
                        newProfile.password = hash
                        Profiles.create(newProfile)
                        .then(profile => {
                            res.status(201).json({
                                "message": profile.username + " is now registered!",
                                "data": profile
                            })
                        })
                        .catch(err => {
                            res.status(500).json({
                                "error": err
                            })
                        })
                    })
                } else {
                    res.status(500).json({
                        error: "Username already exist"
                    })
                }
            })
        }
    })  
}

exports.profile_delete = (req, res) => {

    let username = req.params.username
    Profiles.findOneAndDelete({username : username } )
    .then(() => {
        console.log(username);
        res.status(200).json({
            message : 'User profile successfully deleted',
            user: username
        })
    })
    .catch(err => {
        res.status(500).json({
            error : err
        })
    });
}

exports.profile_update = (req, res) => {
    Profiles.findById(req.params.username)
    .then(profile  => {
        console.log(result)
        profile.firstname = req.body.firstname
        profile.middlename = req.body.middlename
        profile.lastname = req.body.lastname
        profile.ext = req.body.ext
        profile.email = req.body.email
        profile.password = bcrypt.hash(req.body.password, 10)

        profile.save()
        .then(() => {
            res.status(200).json({
                message: username + " updated successfully"
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err + " user update error"
            })
        })
        
    })
    .catch(err => {
        res.status(500).json({
            error : err
        })
    
    })
}