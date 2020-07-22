const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('1215534715:AAHLyPzwuF56Xd1yN9UwQzaNNQNnZo5PL9g', {polling: true});

bot.on('message', msg => {

    const {chat: { id }} = msg
    var text = msg.text
    var rasp = '/^\d{1,}(\+|-|\*|\/|%|^)\d{1,}$/'
    //if (rasp.match() === text) {
        var str = text
        let arr = str.split(' ')
        let sign = arr[1]
        let val1 = Number(arr[0])
        let val2 = Number(arr[2])

        switch (sign) {
            case '+':
                a = val1+val2
            case '-':
                a = val1-val2
            case '*':
                a = val1*val2
            case '/':
                a = val1/val2
            case '%':
                a = val1%val2
            case '^':
                a = val1**val2
        }
    //}

    bot.sendMessage(id, 'The result is: ' + a)
})
