

class UserController {
    constructor(service){

        // Computer does not know that this.userService = UserService, but the developer knows
        this.userService = service;
    }

    addUser = async (req, res) => {
        const userDTO = req.body
        const savedUser = await this.userService.createUser(userDTO);
        return res.status(200).json({savedUser});
    }

    getUsers = async (req, res) => {
        const users = await this.userService.retrieveUsers();
        return res.status(200).json({users});
    }

    findUser = async (req, res) => {
        const username = req.params.username;
        const user = await this.userService.findByUserName(username);
        return res.status(200).json({user});
    }

    updateUser = async (req, res) => {
        const username = req.params.username;
        const updatedUser = req.body;

        const user = await this.userService.updateDetails(username, updatedUser);
        return res.status(200).json({user})
    }
}

module.exports = { UserController}