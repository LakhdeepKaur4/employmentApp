var express = require('express');
var router = express.Router();
const pdfTemplate = require('../public/forms/pdftemplate');
const pdf = require('html-pdf');
const mailToApplicant = require('../helper/sendMail').mailToApplicant;
const mailToEmployer = require('../helper/sendMail').mailToEmployer;
const { config } = require('../config/config')
const { base64_encode } = require('../helper/file')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/createPdf', async function (req, resp, next) {
  const body = req.body;
  let fileName;
  let result;
  let base64;
  const nameIdent = Math.floor(Math.random() * 10000);
  if (body) {
    fileName = body.name + nameIdent;
    await pdf.create(pdfTemplate(body), {

      format: 'Letter'
    }).toFile(`./public/forms/${fileName}.pdf`, async (err, res) => {
      if (err) {
        return;
      } else {
        base64 = await base64_encode(fileName);
        const company = await mailToEmployer(config.MJ_MAIL_ID, base64, body.name, fileName);
      }
    });
    resp.status(200).json({ message: "Application registered successfully.We'll get back to you soon :)" })
  }
})

module.exports = router;
