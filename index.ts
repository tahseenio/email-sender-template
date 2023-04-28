import sgMail from '@sendgrid/mail';
import { SENDGRID_APIKEY, FROM_EMAIL, TO_EMAIL } from './config.js';
sgMail.setApiKey(SENDGRID_APIKEY);

interface msgProps {
  to: string[] | string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

const msg: msgProps = {
  to: [`${TO_EMAIL}`],
  from: `${FROM_EMAIL}`,
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>HI TSNODE. and easy to do anywhere, even with Node.js. Package: module, From email and to email set in .env</strong>',
};

sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode);
    // console.log(response[0].headers);
    console.log('SENT');
  })
  .catch((error) => {
    console.error(error);
  });

console.log('Ran');
