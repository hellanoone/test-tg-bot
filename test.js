// const TelegramBot = require('node-telegram-bot-api');

// const bot = new TelegramBot(process.env.TOKEN, {polling: true});

// bot.on('message', msg => {

//     const {chat: { id }} = msg
//     var text = msg.text
//     var rasp = '/^\d{1,} (\+|\-|\*|\/|\%|\^) \d{1,}$/'
//     if (rasp.test(text)) {
//         let arr = text.split(' ')
//         let sign = arr[1]
//         let val1 = Number(arr[0])
//         let val2 = Number(arr[2])
//         var a = 0
        
//         switch (sign) {
//             case '+': 
//                 a = val1+val2
//                 break;
//             case '-': 
//                 a = val1-val2
//                 break;
//             case '*': 
//                 a = val1*val2
//                 break;
//             case '/': 
//                 a = val1/val2
//                 break;
//             case '%': 
//                 a = val1%val2
//                 break;
//             case '^': 
//                 a = val1**val2
//                 break;
//         }
//         bot.sendMessage(id, 'The result is: ' + a)
//     }
// })
