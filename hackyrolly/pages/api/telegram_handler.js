/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
  const tgbot = process.env.NEXT_TELEGRAM_TOKEN;

  if (req.body.message.text === '/start') {
    // Send reply
    const message = 'Initializing group chat';
    const ret = await fetch(
      `https://api.telegram.org/bot${tgbot}/sendMessage?chat_id=${req.body.message.chat.id}&text=${message}&parse_mode=HTML`
    );
  } else {
    console.log(req.body.message.text);
  }


    // const data = await fetch(
    //   'https://api.telegram.org/bot5894983812:AAEtr5-6Z2s4tQFJhrBnDO_5iNbPtxqOTio/getUpdates'
    // );

  // }
  // if (req.method === 'POST') {
  //   const message =
  //     'Initializing group chat';
  //   const ret = await fetch(
  //     `https://api.telegram.org/bot${tgbot}/sendMessage?chat_id=${req.body.message.chat.id}&text=${message}&parse_mode=HTML`
  //   );
  //   const data = await fetch(
  //     `https://api.telegram.org/bot${tgbot}/getHistory?chat_id=${res}&parse_mode=JSON`);
  //   console.log(data);
  //   // console.log("Yes");
  //     // const test = await fetch(
  //   //   `https://api.telegram.org/bot${tgbot}/sendMessage?chat_id=${req.body.message.chat.id}&text=${data}&parse_mode=HTML`
  //   // );
  // }

  // if (req.body.message.text === '/help') {
  //   const message =
  //     'Help for <i>NextJS News Channel</i>.%0AUse /search <i>keyword</i> to search for <i>keyword</i> in my Medium publication';
  //   const ret = await fetch(
  //     `https://api.telegram.org/bot${tgbot}/sendMessage?chat_id=${req.body.message.chat.id}&text=${message}&parse_mode=HTML`
  //   );
  // }
  
  res.status(200).send('ok');
};