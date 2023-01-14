/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
  const tgbot = process.env.NEXT_TELEGRAM_TOKEN;
  if (req.method === 'POST') {
    const message =
      'Initializing group chat';
    const ret = await fetch(
      `https://api.telegram.org/bot${tgbot}/sendMessage?chat_id=${req.body.message.chat.id}&text=${message}&parse_mode=HTML`
    );
    const data = await fetch(
      `https://api.telegram.org/bot${tgbot}/getHistory?chat_id=${req.body.message.chat.id}&parse_mode=JSON`);
    console.log(data);
    // console.log("Yes");
      // const test = await fetch(
    //   `https://api.telegram.org/bot${tgbot}/sendMessage?chat_id=${req.body.message.chat.id}&text=${data}&parse_mode=HTML`
    // );
  }

  // if (req.body.message.text === '/help') {
  //   const message =
  //     'Help for <i>NextJS News Channel</i>.%0AUse /search <i>keyword</i> to search for <i>keyword</i> in my Medium publication';
  //   const ret = await fetch(
  //     `https://api.telegram.org/bot${tgbot}/sendMessage?chat_id=${req.body.message.chat.id}&text=${message}&parse_mode=HTML`
  //   );
  // }
  
  res.status(200).send('ok');
};