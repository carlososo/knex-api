const JWT = require('jsonwebtoken');
const SECRET_KEY ='LcSvBwReH+2nXwbDSC8+wqCamTDZ7CEED1M2WtRNBD2jMggogkVctA=='

module.exports = ({user_id,rol, email}) => {
    const payload ={
        user_id,
        rol,
        email,
    }
    return JWT.sign(payload,SECRET_KEY,{expiresIn:'1h'})
}