/*
|--------------------------------------------------------------------------
| jwt Auth0 
|--------------------------------------------------------------------------
|
| jwt is json web token that middleware to given access with token that who take this token
| However, in most cases, very simple to implementations
|
*/

const TokenVerifiyBearerJwt = (req, res, next)=>{
    const HeaderBearerToken = req.headers['authorization']
    if(typeof HeaderBearerToken !== 'undefined'){
        const bearer = HeaderBearerToken.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.json({
            message: 'harus ambil token dulu'
        })
    }
}
module.exports = {
    TokenVerifiyBearerJwt,
}