const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'posit_db'
    }
});

const getUser = async() => {
    return await knex('user')
}

const getUserById = async(id) => {
    return await knex('user').select('Id', 'nama', 'nohp', 'pin').where('id', id)
}

const inputUser = async(data) => {
    return await knex('user').insert(data)
}

const deleteUser = async(id) => {
    return await knex('user').where({ id: id }).del()
}


// const obj = []

// dbcon.query('SELECT * FROM user LIMIT 30', (err, rows, fields) => {
//     if (err) throw err
//     for (let i = 0; i < rows.length; i++) {
//         obj.push({ id: rows[i].Id, name: rows[i].Nama })
//     }
// })

module.exports = { getUser, getUserById, inputUser, deleteUser }