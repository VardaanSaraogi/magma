const Discord = require('discord.js');
const client = new Discord.Client();
var roast1, roast2 , roast3 ;
roast1 = "Roast1"
roast2= "Roast2"
roast3 = "Roast3" 
let roastContainer =  [roast1 ,roast2 ,roast3]
let respond = () => roastContainer[Math.floor(Math.random() * roastContainer.length)]
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('hallo!');
  }
  

});
 
client.login('Nzc1MzI3OTI0ODc4MTgwMzYy.X6kuZg.6F-MgtKd5UDUAMu0TmSGshSlTLw');