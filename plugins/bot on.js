let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak OHLX tadi ketiduran😊* ')
}

handler.tags = ['main']
handler.command = /^(ohlxon)$/i

handler.admin = true

export default handler
