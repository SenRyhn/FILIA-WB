function handler(m) {
  
  const kontak = {
	"displayName": 'SenR',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: SenR\nitem1.TEL;waid=628975626924:628975626924\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;Email Owner:reyhanluthers9@gmail.com\nORG: INI OWNER\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
