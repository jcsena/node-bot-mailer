var config = {
    mailConfig: {
        pool: true, // is pool for send emails
        host: 'hostname.mail.com', // your host
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'your@3mail.com',
            pass: 'password'
        }
    },
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
};

module.exports = config;