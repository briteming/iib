const crypto = require('crypto');
const env = require('process').env;

module.exports = {
    keys: [ env.KEY ],
    // keys: ['awhzUxNPNvQ9JeAd8KnVuBsCDSyxR0r4pDL/aupk/iLS6cuRaRBNlQnN7lXFZZTzUiGa2fpvRlwN0V9S+EWJPg==']
    // keys: [ crypto.pseudoRandomBytes(64).toString('base64') ]
    client_id: env.Ov23liq0VjxWPMAVb8Ig,
    client_secret: env.d9ca3c22bf57be1920a5cf47c4baa7c960981d36
};
