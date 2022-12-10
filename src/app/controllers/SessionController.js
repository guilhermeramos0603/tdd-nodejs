const { User } = require('../models')

class SessionController {
    async store(req, res) {
        const { mail, password } = req.body;

        const user = await User.findOne({where: {mail}})

        if(!user){
            return res.status(401).json({
                message: 'User not found with mail informed'
            })
        }

        if(!(await user.checkPassword(password))){
            return res.status(401).json({
                message: 'Incorrect password, try again!'
            })
        }



        return res.json({
            user,
            token: user.generateToken()
        })
    }
}

module.exports = new SessionController()