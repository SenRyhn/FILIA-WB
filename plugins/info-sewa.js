let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = ` ---『 *LIST HARGA* 』---
❏──「 *Sewa Bot* 」
│ • *1 Minggu:* Rp.6.000
│ • *2 Minggu:* Rp.14.000
│ • *1 Bulan:* Rp.25.000
│ • *Permanen:* Rp.40.000
❏──────────────๑
❏──「 *Premium* 」
│ • *1 Minggu:* Rp.5.000
│ • *2 Minggu:* Rp.10.000
│ • *1 Bulan:* Rp.20.000
│ • *Permanen:* Rp.34.000
❏──────────────๑
*Premium itu hanya akses fitur premium saja kak seperti hdr, remini dll dan tidak bisa di masukkan ke grup*

_Sewa bot bisa bisa memasukkan bot ke grup dan mendapatkan premium jadi bisa akses fitur premium di bot_
❏──「 *Pembayaran* 」
│ • *Pulsa:* 0895-3598-31246 (+Rp.1000)
│ • *Dana:* 0895-3598-31246
│ • *Hub owner*
❏──────────────๑
│ Hubungi Owner!!!
│wa.me/62875626924
❏──────────────๑
 _2023 © Filia_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['menuprem']
handler.tags = ['main']
handler.command = /^(sewa|sewabot|prem)$/i

export default handler
