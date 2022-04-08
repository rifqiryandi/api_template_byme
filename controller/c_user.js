// * model
const model = require('../model/m_user');
//  * respons
const respon = require('../respons/respon');
//* hashing in nodejs with bcrypt
const bcrypt = require('bcrypt');


//*date
const utils = require('../utils/date.util');

function getUser(res) {
    try {
        let data = model.getUser()
        respon.responCheck(data, res)
    } catch (error) {
        console.log(error);
    }
}

function getUserById(res, id) {
    try {
        let data = model.getUserById(id)
        respon.responCheck(data, res)
    } catch (error) {
        console.log(error);
    }
}

function inputRegisUser(req, res) {
    try {
        let nohp = req.body.nohp
        let pin = req.body.pin
        if (pin == "") {
            console.log('error: Pin Masih Kosong');

        } else {
            bcrypt.hash(pin, 10, function(err, hash) {
                let data = {
                    'nama': 'user',
                    'nohp': nohp,
                    'pin': hash,
                    'create_date': utils.dateNow()
                }

                let checkData = model.inputUser(data)
                respon.responCheck(checkData, res, 1)
            });
        }

    } catch (error) {
        console.log(error);
    }
}

function deleteUser(res, id) {
    try {
        let data = model.deleteUser(id)
        respon.responCheck(data, res, 2)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUser, getUserById, inputRegisUser, deleteUser }