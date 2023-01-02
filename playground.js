const jwt = require("jsonwebtoken");

// Create Data to encrypt
const myDetails = {
    name : "AMADI VICTOR",
    age: 25
}
const key = "myveryimportantsecret";

// Encrypt data using jwt
const encryptedToken = jwt.sign(myDetails, key, {expiresIn: 60} );
console.log({token: encryptedToken});

// Decrypt data using jwt
const decryptedToken = jwt.verify(encryptedToken, key);

console.log(decryptedToken);

