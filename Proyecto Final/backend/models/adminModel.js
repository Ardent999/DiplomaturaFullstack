var pool = require('./bd');

async function fetchUsers() {
    var query = "select * from usuarioslab order by id_usu asc";
    var rows = await pool.query(query);
    return rows;
}

async function insertUsers(obj) {
    try {
        var query = "insert into usuarioslab set ?"
        var rows = await pool.query(query, [obj])
        return rows;

    } catch (error) {
        console.log(error);
    }
}

async function deleteUserById(id) {
    var query = "delete from usuarioslab where id_usu = ? ";
    var rows = await pool.query(query, [id]);
    return rows
}


//para traer los datos al formulario de modificar
async function fetchUserById(id) {
    var query = "select * from usuarioslab where id_usu = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

/*para modificar UPDATE de los datos*/
async function modifyUserById(obj, id) {
    try {
        var query = "update usuarioslab set ? where id_usu=?";
        var rows = await pool.query(query, [obj, id]);
        return rows
    } catch (error) {
        throw error;
    }
}

module.exports = { fetchUsers, insertUsers, deleteUserById, fetchUserById, modifyUserById }

