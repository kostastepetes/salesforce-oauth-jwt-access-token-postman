var navigator = {}; // Fake a navigator object for the lib
var window = {}; // Fake a window object for the lib
eval(pm.globals.get("jsrsasign_code")); // Import jsrsasign lib

// Retrieve the private key from environment variables
var secret = pm.environment.get("JWT_PRIVATE");

// Header
var header = { alg: 'RS256', typ: 'JWT' };

// Payload data
let consumerKeySiteDev = pm.environment.get("CONSUMER_KEY");

let usernameSiteDev = pm.environment.get("USERNAME_DEV");


var tNow = KJUR.jws.IntDate.get('now');
var currentTime = Math.ceil((new Date()).getTime() / 1000); // Current time in seconds
var expirationTime = currentTime + 180; // Token expiration time

var data = {
    prn: usernameSiteDev,
    iat: expirationTime - 3,
    exp: expirationTime,
    aud: 'https://login.salesforce.com',
    iss: consumerKeySiteDev
};
console.log(data)
var sHeader = JSON.stringify(header);

var sPayload = JSON.stringify(data);


// Convert the private key in PEM format to a RSAKey object
var prvKey = KEYUTIL.getKey(secret);

// Sign the header and payload with the RSA private key
var sJWT = KJUR.jws.JWS.sign("RS256", sHeader, sPayload, prvKey);

// Save the JWT to an environment variable for later use
pm.environment.set('JWT_ASSERTION', sJWT);

console.log(sJWT); // Optional: for debugging purposes
