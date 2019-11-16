const mailer = require('nodemailer');

const smtp = mailer.createTransport({
  host: '127.0.0.1',
  port: '1025',
  auth: {
    user: 'user',
    pass: 'password',
  }
});

const mailOptions = {
  from: 'hoge@github.com',
  to: 'hogehoge@github.com',
  subject: 'タイトルです',
  html: 'メール本文です',
};

smtp.sendMail(mailOptions, function(err, info) {
  if (!err) {
    console.log('Mail success: ' + info.response);
  } else {
    console.log('Mail err', err);
  }
  smtp.close();
});
