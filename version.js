const fs = require('fs');
const CryptoJS = require('crypto-js');
const code = fs.readFileSync('./src/car.js', 'utf8');
const hash = CryptoJS.SHA256(code).toString(CryptoJS.enc.Hex);
const { version } = require('./package.json');
console.log(`Version: ${version} - Hash: ${hash}`);