// ? CekRespon
function responCheck(data, res, spesifik = 0) {
    switch (spesifik) {
        case 1:
            data.then((reqData) => {
                if (reqData.length == 0) {
                    code(404, reqData, res, 1)

                } else {
                    code(201, reqData, res, 1)

                }
            })
            break;

        case 2:
            data.then((reqData) => {
                if (reqData == 0) {
                    code(404, reqData, res, 1)
                } else {
                    code(202, reqData, res, 1)

                }
            })
            break;

        case 0:
            console.log('here 1');

            data.then((reqData) => {
                if (reqData.length == 0) {
                    code(404, reqData, res)
                } else {
                    code(200, reqData, res)
                }
            })
            break;
    }

}


//! output respon
const code = (responCode, data, res, spesifikRespon = 0) => {
    switch (spesifikRespon) {
        case 1:
            switch (responCode) {
                case 201:
                    return res.status(201).json({
                        'responCode': 201,
                        'Msg': "Created"
                    })
                    break;

                case 202:
                    return res.status(202).json({
                        'responCode': 202,
                        'Msg': "Accepted"
                    })
                    break;

                case 404:
                    return res.status(404).json({
                        'responCode': 404,
                        'Msg': "Fail"
                    })
                    break;
            }
            break;
        case 0:
            switch (responCode) {
                case 200:
                    return res.status(200).json({
                        'responCode': 200,
                        'reqData': data
                    })
                    break;

                case 404:
                    return res.status(404).json({
                        'responCode': 404,
                        'Msg': "Data Not Found"
                    })
                    break;
            }
            break;
    }
}

module.exports = { responCheck }