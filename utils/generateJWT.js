const JWT = require('jsonwebtoken');
module.exports = ({user_id,rol, email}) => {
    const payload ={
        user_id,
        rol,
        email,
    }
    return JWT.sign(payload,process.env.SECRET_JWT_SEED,{expiresIn:'1h'})
}