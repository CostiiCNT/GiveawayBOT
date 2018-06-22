const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NDU5NjQ3MjczMjMyNzYwODMz.Dg5PZw.IxgmNNgrsfNBMErQWf2HT74VN6I"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'g.invite') {
    msg.channel.send('***Invite Bot :tada:*** \n\ https://discordapp.com/api/oauth2/authorize?client_id=459647273232760833&permissions=8&scope=bot ');
  }
});

client.login('NDU5NjQ3MjczMjMyNzYwODMz.Dg5PZw.IxgmNNgrsfNBMErQWf2HT74VN6I');

client.on('message', message => {
if (message.content === 'g.serverinfo') {
    Promise.all([
        message.react('ðŸ˜Ž'),
        message.react('ðŸ¤‘'),
    ])
        .catch(() => console.error('One of the emojis failed to react.'))
    var embedserverinfo = new Discord.RichEmbed()
    .setTitle("")
    .setThumbnail(message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .addField("Server Name", message.guild.name)
        .addField("ID Server", message.guild.id)
        .addField("Verification Level", message.guild.verificationLevel)
        .addField("OwnerShip", message.guild.owner)
        .addField("Server Created on", message.guild.createdAt)
        .addField("Members", message.guild.memberCount)
        .addField("Channels", message.guild.channels.size)
        .addField("eu-central", message.guild.region)
        .setColor('#026bff')
    message.channel.send(embedserverinfo);
}
})

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`:hugging: Welcome to the server, ${member}`);
});

client.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name","MEMBERS GIVEAWAYS");
    member.addRole(role).catch(console.error);
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('459479908498931718').setName(`ðŸ“‰ Members: ${member.guild.memberCount}`);
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('459479908498931718').setName(`ðŸ“‰ Members: ${member.guild.memberCount}`);
});

client.on('message', message => {
  if (message.content === 'g.avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.on('ready', () => {
  client.user.setGame(' IN MAINTENANCE...', 'https://www.twitch.tv/streamerhouse')
})

client.on('message', message => {
if (message.content.toLowerCase().startsWith('g.ban')) {
    let member = message.mentions.members.first();
    let reason = message.content.split(' ').slice(2).join(' ');
  if(!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) return message.channel.send("` You do not have access to this command ! :negative_squared_cross_mark:  `");
  if(!member) return message.channel.send("** You forgot to mention the one you gave him Ban ! :negative_squared_cross_mark: **");
  if(!member.kickable)  return message.channel.send("`This person can not be executed ! :negative_squared_cross_mark: `");
  if(!reason) return message.channel.send("`You Forgot To Put The Reason That You Ban On " + member.tag + " ! :negative_squared_cross_mark: `");
  member.ban(reason)
  .catch(error => message.channel.send(`**Scuze ${message.author.tag} But I did not want to ban ${error}**`));
  message.channel.send(`**${member.user.tag}** Was Been Banned by **${message.author.tag}** Reason: ${reason} `);
}
})

client.on('message', message => {
if (message.content.toLowerCase().startsWith('/kick')) {
    let member = message.mentions.members.first();
    let reason = message.content.split(' ').slice(2).join(' ');
  if(!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) return message.reply("**Sorry, but you do not have access to this command!**");
  if(!member) return message.channel.send("**You have something! His Mention ..**");
  if(!member.kickable)  return message.reply("**This person can not be out of date on the server!**");
  if(!reason) return message.channel.send("**You Forgot To Put The Reason Why You Kick Him" + member.tag + " !**");
  member.kick(reason)
  .catch(error => message.channel.send(`**Scuze ${message.author.tag} But I Did not Want To Kick For The Cause Of An Error : ${error}**`));
  message.channel.send(`**${member.user.tag}** Was Been Kicked by **${message.author.tag}** Reason: ${reason}`);
}
})
