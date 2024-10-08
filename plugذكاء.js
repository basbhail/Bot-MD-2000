import fetch from 'node-fetch';
const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    throw `قم بكتابة سؤالك\n\nمثال : .بوت كيف حالك`;
  }
  try {
    conn.sendPresenceUpdate('composing', m.chat);
    const BK9api = `https://bk9.fun/ai/gpt4?q=${encodeURIComponent(text)}`;
    const BK99 = await fetch(BK9api);
    const BK8 = await BK99.json();
    if (BK8.status && BK8.BK9) {
      const respuestaAPI = BK8.BK9;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw "حدث خطأ أثناء معالجة طلبك.";
    }
  } catch (error) {
    throw "حدث خطأ أثناء معالجة طلبك.";
  }
};

handler.command = /^(بوت)$/i;
handler.tags = ['ai'];

export default handler;
