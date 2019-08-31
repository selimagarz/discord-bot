const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.on('guildBanAdd' , (guild, user) => {
  let aramızakatılanlar = guild.channels.find('name', 'aramıza-katılanlar');
  if (!aramızakatılanlar) return;
  aramızakatılanlar.send('https://media.giphy.com/media/8njotXALXXNrW/giphy.gif **Adalet dağıtma zamanı gelmiş!** '+ user.username +'**Bakıyorum da suç işlemiş,Yargı dağıtmaya devam** :fist: :writing_hand:  :spy:' );
});

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
      msg.reply('Aleyküm Selam Hoşgeldin !');
}
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 's.a') {
      msg.reply('Aleyküm Selam Hoşgeldin !');
}
});
///////KÜFÜRLER/////
client.on('message', msg => {
  if (msg.content === 'amk') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
//////
client.on('message', msg => {
  if (msg.content === 'oç') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
////
client.on('message', msg => {
  if (msg.content === 'oc') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
//////
client.on('message', msg => {
  if (msg.content === 'annskm') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
////
client.on('message', msg => {
  if (msg.content === 'ann skm') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
//////
client.on('message', msg => {
  if (msg.content === 'oruspu') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
////
client.on('message', msg => {
  if (msg.content === 'oruspuçocuğu') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
////
client.on('message', msg => {
  if (msg.content === 'oruspu çocuğu') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
/////
client.on('message', msg => {
  if (msg.content === 'ANNSKM') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
client.on('message', msg => {
  if (msg.content === 'AMK') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
client.on('message', msg => {
  if (msg.content === 'OC') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
client.on('message', msg => {
  if (msg.content === 'OÇ') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
client.on('message', msg => {
  if (msg.content === 'ANN SKM') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
client.on('message', msg => {
  if (msg.content === 'am') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
client.on('message', msg => {
  if (msg.content === 'AM') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
client.on('message', msg => {
  if (msg.content === 'KAŞAR') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
client.on('message', msg => {
  if (msg.content === 'kaşar') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
client.on('message', msg => {
  if (msg.content === 'kasar') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
client.on('message', msg => {
  if (msg.content === 'KASAR') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
client.on('message', msg => {
  if (msg.content === 'ORUSPU') {
   msg.delete(30)
    msg.reply('**Küfür Engellendi**');
  }
});
client.on('message', msg => {
  if (msg.content === 'VELET') {
   msg.delete(30)
    msg.reply('**Hiç kendine bakıyonmu ? **');
  }
});
client.on('message', msg => {
  if (msg.content === 'velet') {
   msg.delete(30)
    msg.reply('**Hiç kendine bakıyonmu ? **');
  }
});
client.on('message', msg => {
  if (msg.content === 'veled') {
   msg.delete(30)
    msg.reply('**Hiç kendine bakıyonmu ? **');
  }
});
client.on('message', msg => {
  if (msg.content === 'VELED') {
   msg.delete(30)
    msg.reply('**Hiç kendine bakıyonmu ? **');
  }
});
client.on('message', msg => {
  if (msg.content === '<@546303073962950657>') {
   msg.delete(30)
    msg.reply('`Sahibimi etiketlemen yasak bilmiyormusun ?  - Ban yükleniyor...`');
  }
});

///////KÜFÜRLER/////





////////////////////////
client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "panel-sil") {
  if (!message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")) return message.channel.send(" İstatistik ayarlanmamış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
      const a = message.guild.channels.find(channel => channel.name === "Sunucu İstatistik").delete()
      if(!a) return console.log("guildStats")
      const b = message.guild.channels.find(channel => channel.name === `Üye sayısı: ${message.guild.memberCount}`).delete()
      if(!b) return console.log("guildStatsMember")
      const c = message.guild.channels.find(channel => channel.name === `Bot sayısı: ${message.guild.members.filter(m => m.user.bot).size}`).delete()
      if(!c) return console.log("guildStatsBot")
      const d = message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size}`).delete() //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
      if(!d) return console.log("guildStatsChannel")
      message.channel.send(" Kanallar temizlendi.")
    }
  if (command === "panel") {
  if (message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")) return message.channel.send(" Zaten istatistik ayarlanmış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
  message.channel.send(`Kategori ve kanal kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('Sunucu İstatistik', 'category', [{
  id: message.guild.id,
  deny: ['CONNECT'],
  deny: ['VIEW_CHANNEL']
}]);

 message.guild.createChannel(`Üye sayısı: ${message.guild.memberCount}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")));
 message.guild.createChannel(`Bot sayısı: ${message.guild.members.filter(m => m.user.bot).size}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")));
message.guild.createChannel(`Kanal sayısı: ${message.guild.channels.size}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")));
  message.channel.send(" Sunucu paneli ayarlandı!")
        })
}
});
//////////////////////////
////////////////////////

client.on("guildMemberAdd", member => {
	
	var channel = member.guild.channels.find("name", "617021327504703541");
	if (!channel) return;
	
	var role = member.guild.roles.find("name", "〔☘〕Kayıtlı Üye");
	if (!role) return;
	
	member.addRole(role); 
	

	
	
	channel.send(member + " artık " + role + " rolü ile aramızda");
	
	
});

////////////////////////



client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

var oyun = [
        "ϟ ∞🌙 Yapımcı ! SélimA' ϟ ∞🌙",
        "!yardım | !botb , !davet Yeni özellikler",
        "👥 134 Sunucuya ile beraber  ",
		"👥 9745 kişiye hizmet ",
		"🛠 Sizler için çalışıyoruz ",
		"☃️ Çok hızlı gelişiyoruz "
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/mevlutf");
        }, 2 * 2500);


;


client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});



client.login(ayarlar.token);
