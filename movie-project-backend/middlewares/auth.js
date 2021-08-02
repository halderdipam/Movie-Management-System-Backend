const jwt_decode = require('jwt-decode');


const auth = (req) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    try {
        const {id} =  jwt_decode(token);
        return id;
    }
    catch (e) {
        return e.message;
    }
}
module.exports =auth;