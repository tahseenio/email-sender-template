import { CronJob } from 'cron';
import sgMail from '@sendgrid/mail';
import { SENDGRID_APIKEY, FROM_EMAIL, TO_EMAIL } from './config.js';
sgMail.setApiKey(SENDGRID_APIKEY);
const msg = {
    to: [`${TO_EMAIL}`],
    from: `${FROM_EMAIL}`,
    subject: 'Sending with SendGrid at 8pm',
    text: 'This is your 8pm email from your node/sendgrid/cron project',
    html: '<strong>HI TSNODE. and easy to do anywhere, even with Node.js. Package: module, From email and to email set in .env</strong>',
};
const sendEmail = () => {
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
};
new CronJob('* * * * * *', () => {
    console.log('You will see this message every second');
    // sendEmail();
}, null, true, 'Australia/Brisbane');
// '0 20 * * *',
//# sourceMappingURL=index.js.map