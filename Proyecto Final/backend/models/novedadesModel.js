var pool = require('./bd');

async function getNovedades() {
    var query = "select * from novedades1";  //order by id desc
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedad(obj) {
    try {
        var query = "insert into novedades1 set ?"
        var rows = await pool.query(query, [obj])
        return rows;

    } catch (error) {
        console.log(error);
    }
}

async function deleteNovedadById(id) {
    var query = "delete from novedades1 where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows
}


//para traer los datos al formulario de modificar
async function getNovedadById(id) {
    var query = "select * from novedades1 where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

/*para modificar UPDATE de los datos*/
async function modificarNovedadById(obj, id) {
    try {
        var query = "update novedades1 set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows
    } catch (error) {
        throw error;
    }
}

module.exports = { getNovedades, insertNovedad, deleteNovedadById, getNovedadById, modificarNovedadById }

