const {UserService} = require("../services/UserService.js");


class UserController {

    /**
     * @param {UserService} userService 
     */
    constructor(userService){
        this.userService = userService;
    }


    /**
     * @desc saves a user to the database
     * @method post
     * @url /user
     * @param {{ body{ email: String, password: String}}} req 
     * @param {*} res 
     * @returns 
     */
    addUser = async (req, res) => {

        const {email, password} = req.body;
        if(!email){
            return res.status(400).json({msg: "Please include an email"})
        }

        if(!password){
            return res.status(400).json({msg: "Please include a password"})
        }

        const savedUser = await this.userService.addUser({email: email, password: password})

        return res.status(201).json({savedUser});
    }


    /**
     * @method post
     * @url /signin
     * @param {{body: {email: String, password: String}}} req 
     * @param {*} res 
     * @returns 
     */
    signin = async (req, res) => {
        const {email, password} = req.body;
        if(!email){
            return res.status(401).json({msg: "Please include an email"})
        }

        if(!password){
            return res.status(400).json({msg: "Please include a password"})
        }

        const userToken = await this.userService.signin({email: email, password: password});

        return res.status(200).json({userToken});
    }

}

module.exports ={UserController};