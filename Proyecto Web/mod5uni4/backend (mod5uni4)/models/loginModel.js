var pool = require('./bd');
var md5 = require('md5');

async function getUserByUsernameAndPassword(mail, password) {
    try {
        var query = "select * from usuarioslab where mail = ? and password = ? limit 1";
        var rows = await pool.query(query, [mail, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getUserByUsernameAndPassword}