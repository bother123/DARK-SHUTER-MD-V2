const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: 'DARK-SHUTER-MD=yd9wGLyT#ncBHklFCzL0xQ2qdP6VHC9P7gHvfSCzN159zn8MMi6c',
GITHUB_AUTH_TOKEN: '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', 
GITHUB_USER_NAME: 'brother123',

};
