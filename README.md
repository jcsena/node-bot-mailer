# Node Bot Mailer

## Install

    • Install node.js

```bash 

$ git clone https://github.com/jcsena/node-bot-mailer.git && cd node-bot-mailer
$ npm install
    
```

### Config


Configure your mail auth (more support [Node Mailer](https://github.com/nodemailer/nodemailer))

```javascript
//config mailer in config.js 

var poolConfig = {
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'user@gmail.com',
        pass: 'pass'
    }
};
```

Configure schedule for mails 

```javascript

 mailes: [
        {
            options: {
                from: '"[name]" <your@mail.com>', // sender address
                to: 'to@mail.com', // list of receivers
                subject: '[subject]', // Subject line
                html: '<p>Anything</p>>', // html body
            },
            //time eschedule event
            //example 2016 feb 26  10:42 am
            time: {
                year: 2016,
                month: 1, // 0 - 11
                day: 26,
                hour: 10, // 0 - 23
                minute: 42 // 0 - 59
            }
        },
        {
            options: {
                from: '"[name]" <your@mail.com>', // sender address
                to: 'to@mail.com', // list of receivers
                subject: '[subject]', // Subject line
                html: '<p>Anything</p>>', // html body
            },
            //time eschedule event
            //example 2016 feb 26  10:42 am
            time: {
                year: 2016,
                month: 1, // 0 - 11
                day: 26,
                hour: 10, // 0 - 23
                minute: 42 // 0 - 59
            }
        }
    ]

```


## Run

```bash
$ node app.js

```



