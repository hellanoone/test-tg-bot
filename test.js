const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TOKEN, {polling: true});

bot.on('message', msg => {

    const id = msg.chat.id
    let text = msg.text
    const rasp = /^\d+( +?)?([+\-*\/%^])( +?)?\d+$/
    const befSign = /((?=\+)|(?=-)|(?=\*)|(?=\/)|(?=%)|(?=\^))/
    const aftSign = /((?<=\+)|(?<=-)|(?<=\*)|(?<=\/)|(?<=%)|(?<=\^))/

    if (rasp.test(text)) {
        text = text.replace(befSign, ' ')
        text = text.replace(aftSign,' ')

        while (text.includes('  ')) text = text.replace(/ {2}/g, ' ')

        let arr = text.split(' ')
        let sign = arr[1]
        let val1 = Number(arr[0])
        let val2 = Number(arr[2])
        let a

        try {
            switch (sign) {
                case '+':
                    a = val1+val2
                    break;
                case '-':
                    a = val1-val2
                    break;
                case '*':
                    a = val1*val2
                    break;
                case '/':
                    a = val1/val2
                    break;
                case '%':
                    a = val1%val2
                    break;
                case '^':
                    a = val1**val2
            }
            if (a){
                bot.sendMessage(id, 'The result is: ' + a)
            } else {
                bot.sendMessage(id, 'an error occured during calculation')
            }
        } catch(e) {
            bot.sendMessage(id, 'an error occured during calculation' + e.message)
        }
    }
})
