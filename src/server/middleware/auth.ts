
var admin = require("firebase-admin");

var serviceAccount = require("../utils/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

function checkAuth(req, res, next) {
    try{
    if (req.headers.authtoken) {
      admin.auth().verifyIdToken(req.headers.authtoken)
        .then(() => {
          next()
        }).catch(() => {
          res.status(403).send('Unauthorized')
        });
    } else {
      res.status(403).send('Unauthorized')
      }
    } catch {
    res.status(401).json({
        error: new Error('Invalid request!')
        });
    }
  }

  export default checkAuth;
