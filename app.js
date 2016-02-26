var schedule = require('node-schedule');
var nodemailer = require('nodemailer');
var config = require('./config');
var _ = require('lodash');

var transporter = nodemailer.createTransport(config.mailConfig);
var listDate = [];
var max;

config.mailes.forEach(function(mail){
    var pd = mail.time;
    var date = new Date(pd.year, pd.month, pd.day, pd.hour, pd.minute);
    listDate.push(date);

    schedule.scheduleJob(date, function(){
            sendMail(mail.options, date);
    });
});

max = _.max(listDate);

function sendMail(options, date){

    transporter.sendMail(options, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);

        if(max === date){
            transporter.close();
            console.log('Finish Bot!');
        }

    });

}