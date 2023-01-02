const {User} = require("../models/User.js");
const jwt = require("jsonwebtoken");


const UserDTO = {
    email : String,
    password: String
}



class UserService {

    /**
     * @desc This function adds a user to the mongoose database
     * @param {UserDTO} userDTO 
     * @returns {Promise<User>}
     */
    addUser = async (userDTO) => {
        const newUser = new User(userDTO);
        const savedUser = await newUser.save();
        return savedUser;
    }


    /**
     * 
     * @param {UserDTO} userDTO 
     * @returns {Promise<String>} the encrypted user Id in the form {id: userId}
     */
    signin = async (userDTO) => {
       
        const user = await User.findOne({email: userDTO.email, password: userDTO.password})
        if(user !== null){
            // if user exists, use jwt to encrypt _id
            const userId = user._id;
            const dataToEncrypt = { id: userId};
            const userToken = jwt.sign(dataToEncrypt, "secret", {expiresIn: '30d'});
            return userToken;

        } else{
            return null;
        }

    }
}


module.exports = {UserService};