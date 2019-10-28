const { config } = require('../config/config')
const mailjet = require('node-mailjet').connect(
    '9f98cf473c8286aedb514f45265a8c4c',
    '748f045ddc9b029bc3cfd60a502f93b9'
)

mailToApplicant = (email, name, base64) => {
    const request = mailjet.post("send", {
        'version': 'v3.1'
    })
        .request({
            "Messages": [{
                "From": {
                    "Email": config.MJ_MAIL_ID,
                    "Name": "Greatwits"
                },
                "To": [{
                    "Email": email,
                    "Name": name
                }],
                "Subject": "Thankyou for your application",
                "HTMLPart": `<p>Hi ${name},</p><p>Thanks for applying for this position.This is a confirmation that we have received your application. The last date of application is 30-Oct-2019 after which we will start going through all applications. We will let all applicants know if they are put through to the interviewing round or not. Thank you for your application, and have a nice day.<p>`,
                "Attachments": [
                    {
                        "ContentType": "application/pdf",
                        "Filename": "name.pdf",
                        "Base64Content": base64
                    }
                ]
            }]
        })
    request
        .then((result) => {
            console.log("1", result.body)
            return result.body;
        })
        .catch((err) => {
            console.log(err)
            return err.statusCode;
        })
}


mailToEmployer = (email, base64, name, fileName) => {
    console.log(config.MJ_MAIL_ID2)
    console.log(config.MJ_MAIL_ID3)
    console.log(config.MJ_MAIL_ID1)
    const request = mailjet.post("send", {
        'version': 'v3.1'
    })
        .request({
            "Messages": [{
                "From": {
                    "Email": config.MJ_MAIL_ID,
                    "Name": "Greatwits"
                },
                "To": [{
                    "Email": 'kumarabhinav167@gmail.com',
                    "Name": "Company Name"
                }],
                "Cc": [{
                    "Email": config.MJ_MAIL_ID2,
                    "Name": "Abhinav"
                },
                {
                    "Email": config.MJ_MAIL_ID3,
                    "Name": "Abhinav"
                }],
                "Subject": "Application request",
                "HTMLPart": `<p>Hi,<p><p>${name} has submitted the application.Kindly review the application<p>`,
                "Attachments": [
                    {
                        "ContentType": "application/pdf",
                        "Filename": fileName,
                        "Base64Content": base64
                    }
                ]
            }]
        })
    request
        .then((result) => {
            console.log(result.body)
            return result.body;
        })
        .catch((err) => {
            console.log(err)
            return err.statusCode;
        })
}

module.exports = {
    mailToEmployer,
    // mailToApplicant
}