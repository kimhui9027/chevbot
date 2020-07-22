const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "입장-퇴장";
const byeChannelName = "입장-퇴장";
const welcomeChannelComment = "님! Team.kimhui9027에 오신 것을 환영합니다!";
const byeChannelComment = "님이 Team.kimhui9027에서 나가신다니 아쉽네요,";

client.on('ready', () => {
  console.log('chanEvent bot has enabled');
  client.user.setActivity('"-이벤트 도움말, -event help"을 쳐서 도움말을 볼 수 있습니다.', {type : 'PLAYING'});
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "기본유저"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '-이벤트') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('이벤트 목록')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .setColor('#00ff00')
      .addField('목표 : 이 서버 홍보해서 15명 데려오기\n보상 : 원하는 역할 및 색상\n ', '\n기간 : 공지가 나올 때까지')
      .addBlankField()
      .setTimestamp()
      .setFooter('', img)

    message.channel.send(embed)
  }

  if(message.content == '-event') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('이벤트 목록')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .setColor('#00ff00')
      .addField('목표 : 이 서버 홍보해서 15명 데려오기\n보상 : 원하는 역할 및 색상\n ', '\n기간 : 공지가 나올 때까지')
      .addBlankField()
      .setTimestamp()
      .setFooter('', img)

    message.channel.send(embed)
  }

});

client.login(token);
