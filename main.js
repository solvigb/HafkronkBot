const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'ksks ';

const ytdl = require("ytdl-core");

client.once('ready', () => {
    console.log('Hafkronk er nærvera...');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hafkronk'){
        message.channel.send('https://cdn.discordapp.com/attachments/339547293332275201/768504649963536424/burning-engfer-house.png');
        
    }
    else if (command == 'bmw'){
        message.channel.send('béééeeeemmmvafff!!!!');

    }
    else if (command == 'haukronk'){
        message.channel.send('https://cdn.discordapp.com/attachments/339547293332275201/768584416360005642/image0.jpg');
    }

    else if (command == 'sverkronk'){
        message.channel.send('https://i.gyazo.com/63e022f2781812f64f609081e5a03862.jpg');
    }

    else if (command == 'drusla'){
        message.channel.send('Jæja elskurnar mínar píkan er komin Nú er hægt að kaupa mig sem almennilega druslu og Gangbanga mig tímum saman vill helst fá 5 Typpi inní þröngu píkuna mína litla skólastelpan fær ekki að fara neitt frá pabba sínum sem er búinn að kaupa stelpuna sína alvöru lítil þröng pabbastelpa èg vill helst fá Sugardaddys sem eru vel stæðir og vilja ríða mèr 3 sinnum á dag og Flengja þröngu píkuna mína 7sinnum í viku ÞAÐ MÁ GERA ALLT:smiling_imp: Hafiði samband við mig á Facebook Aðgangnum “Haukur "Vesalíus" Arnórsson ” ef þið viljið hafa samband við mig því þessum aðgang verður eytt eftir 24klst.. èg er í hvítri peysu á myndinni. En ef þú átt alls ekki fyrir þessu eða ert að reyna að fara að ríða mèr án þess að vera með fyrir því að þá geturðu gleymt því að það gangi upp elskan èg svara ekki skítaskilaboðum og þegar þú ert að senda mèr skilaboð að þá verðuru að senda þetta code með “Èg á fyrir þèr drusla” fýla það daddy:smiling_imp::speak_no_evil: èg er til í að búa til allan andskotan með þèr Klám og bara name it það er líka hægt að panta mig í partý..Its just me nothing is fake èg er alveg með gott bakland svo það þýðir ekkert að rífa kjaft við mig eða að vera óheiðarlegur við mig í samskiptum svo held èg nú að flestir hèrna inná myndu ekki þora í mig því èg er svo tæp á geði fyrir einhverju skítapíkukjaftæði :relaxed: En er mjög kvennleg og fín stelpa ef èg svara ykkur ekki elskurnar mínar að þá mun èg svara ykkur á endanum, get sent ykkur sona 50-60 tease nekatrvideos af mèr stynja og píkumyndir af mèr undirgefni og naktri:speak_no_evil: bara ef þú addar Haukur "Vesalíus" Arnórsson á Facebook það er rosalega mikið að gera hjá mèr þessa daganna elskurnar mínar þannig að þið verðið að sýna mèr þolinmæðni èg mun þjónusta öllum sem að vilja að fá að binda pabbastelpuna sína niður í þjónustu:speak_no_evil::see_no_evil::smiling_imp::woman_police_officer:');
    }

    else if (command == 'hjálp!'){
        message.channel.send('LEIÐÐÐÐBEININGAAAAAR')
        message.channel.send('-hafkronk')
        message.channel.send('-bmw')
        message.channel.send('-drusla')
        message.channel.send('-haukronk')
        message.channel.send('-sverkronk')
        message.channel.send('-komdu');
    }
    
    else if (command == 'komdu'){
        isReady = false;
        var voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection => {
            const dispatcher = connection.play('/audio/hafscream.mp3');
            dispatcher.on("end", end =>{
                voiceChannel.leave();
            })
        })

    }
    else{
        message.channel.send('huhh... ekki skilja');
    }
});



client.login('NzY4NDk5OTU2ODM0NTAwNjkw.X5BXWw.CKw_SiKlHBAPAdVDyF5qpQKEwJM');
