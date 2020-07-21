const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TOKEN, {polling: true});

bot.on(text = 'message', msg => {
    const {chat: { id }} = msg
    bot.sendMessage(id, 'You\'ve entered: ' + text)
})
