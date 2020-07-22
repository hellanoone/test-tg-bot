const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('1215534715:AAHLyPzwuF56Xd1yN9UwQzaNNQNnZo5PL9g', {polling: true});

bot.on('message', msg => {
    
    const {chat: { id }} = msg
//    var text = msg.text
//    bot.sendMessage(id, 'You\'ve entered: ' + text)

    if (msg.text.toString() === /^\d{1,}(+|-|*|/|%|^)\d{1,}$/) {
        bot.sendMessage(id,"Right");
})
