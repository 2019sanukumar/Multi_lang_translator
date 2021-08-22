// const translate = require('google-translate-api');
 
// translate('Ik spreek Engels', {to: 'en'}).then(res => {
//     console.log(res.text);
//     //=> I speak English
//     console.log(res.from.language.iso);
//     //=> nl
// }).catch(err => {
//     console.error(err);
// });

const translate = require('@iamtraction/google-translate');


translate('Thank you', { from: 'auto', to: 'it' }).then(res => {
    console.log(res.text); // OUTPUT: Je vous remercie
    console.log(res.from.autoCorrected); // OUTPUT: true
    console.log(res.from.text.value); // OUTPUT: [Thank] you
    // console.log(res.from.text.didYouMean); // OUTPUT: false
  }).catch(err => {
    console.error(err);
  });