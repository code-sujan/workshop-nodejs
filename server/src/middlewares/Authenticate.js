const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    const path = req.originalUrl;
    const anonymousUrls = [
        '/login',
        '/logout',
        '/apilogin',
        '/new',
        '/test'
    ];
    if(anonymousUrls.some(x => x == path)) next();
    else {
        if(req.session.user) {
            req.user = req.session.user;
        }
        var headers = req.headers['authorization'] ?? '';
        var headerList = headers.split(' ') ?? [];
        if(headerList.length > 0 && headerList[0] == 'Bearer'){
            var token = headerList[1];
            var decoded = jwt.verify(token, process.env.JwtSecret);
            if(decoded.id){
                req.user = decoded;
            }
        }
        if(req.user) next();
        else res.send("User not logged in");
    }
    
}