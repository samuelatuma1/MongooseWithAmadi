const {User} = require("../MyModels/UserModel");

// UserDTO = {
//     username: String,
//     password: String,
//     age: Number
// }

class UserService {

    /**
     * 
     * @param {UserDTO} userDTO 
     */
    createUser = async ( userDTO /** UserDTO */ ) => {

        const user = new User(userDTO);
        
        return await user.save();
    }

    retrieveUsers = async () => {
        const allUsers = await User.find();
        return allUsers;
    }
    /**
     * @desc Finds a user with the matchiung userrname and returns. if no user is found,
     * returnas null
     * @param {String} username 
     * @returns {Promise<User>}
     */
    findByUserName = async ( username /** string */) => {
        const finduser = await User.findOne({username: new RegExp(username, "i")});
        return finduser;
    }


    updateDetails = async (username, updatedUser) => {
        const updateUser = await User.updateMany({username: username}, {
            $set: updatedUser
        })
        return await this.findByUserName(username);

    }

}

module.exports = {UserService};