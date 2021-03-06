const Discord = require ("discord.js")
const bot = new Discord.Client()
const prefixbot = ("!")
const prefixbot8ball = ("!8ball")
const embedhelp = {
    "embed": {
      "description": "\n**Voici toutes les commandes disponibles sur ce serveur Discord :**\n\n|``!help`` | Affiche le __Menu !help__ et toutes les autres commandes disponibles.|",
      "color": 4886754,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/embed/avatars/4.png",
        "text": "Commande (!help)"
      },
      "author": {
        "name": "Menu !help",
        "icon_url": "https://cdn.discordapp.com/embed/avatars/2.png"
      },
      "fields": [
        {
          "name": "\nCommandes avec |!| :",
          "value": "\n1-  ``!roulette`` | **Pour jouer à la roulette (les règles sont éxpliquées une fois la commande efféctuée).**"
        },
        {
          "name": "\nCommandes sans |!| :",
          "value": "\n1-  ``(P/p)ing`` | **Le bot repond (P/p)ong. :ping_pong:**"
        }
      ]
    }
  }
const embedbienvenue = {
    "embed": {
      "description": "\n**Bienvenue sur notre serveur Discord !**\nNous éspérons que tu te sentiras à ta place parmis nous ! :raised_hands:\nPuisque tu es nouveau(elle), nous te conseillons d'effectuer la commande ``!help`` qui te permettra de voir toutes les commandes. :wink:\nLes deux salons textuels __#regles__ et __#annonces__ peuvent t'être très utiles pour comprendre le serveur. :busts_in_silhouette:\nNous te souhaitonsbonne continuation ! :grin:",
      "color": 4886754,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/embed/avatars/4.png",
        "text": "Commande (guildMemberAdd)"
      },
      "author": {
        "name": "Menu de bienvenue",
        "icon_url": "https://cdn.discordapp.com/embed/avatars/2.png"
      }
    }
  }
const embedroulette = {
    "embed": {
       "color": 4886754,
       "description": "**C'est partit pour la roulette ! :raised_hands:**\n\nTu dois essayer de trouver un nombre compris entre 0 et 1000 . :neutral_face:\n\nLe premier à trouver le nombre gagne la partie ! :upside_down:\n\nPour gagner il te suffit de dire un nombre et je te dirai si c'est + ou - ! :wink:",
       "footer": {
         "icon_url": "https://cdn.discordapp.com/embed/avatars/4.png",
         "text": "Commande (!roulette)"
       },
       "author": {
         "name": "Menu !roulette",
         "url": "https://discordapp.com",
         "icon_url": "https://cdn.discordapp.com/embed/avatars/2.png"
       }
     }
   }

var GAME = 0
var hasardroulette = 0
var reactemojisrandom = 0
var hasard8ball = 0

//Sa nous ?//
bot.on('message', message => {
    if(message.channel.id == "398442776167055372"){ //ID = salon "regle"
        return
    }else{
        if(message.channel.id == "398847593381232641"){ //ID = salon "annonces"
            return
        }else{
            if(message.channel.id == "404002970619871236"){ //ID = salon "demandes-de-grades"
                return
            }else{
                if(message.channel.id == "404381924019142657"){ //ID = "pubs"
                    return
                }else{
                    if(message.author.id == "406185988147380225"){
                        return
                    }else{
                        if(message.channel.id == "442051734269853717"){ //ID = "pubs"
                    return
                }else{
                        if(message.content.length == 70){
                            message.reply("Ca nous interresse ? :thinking:\nhttps://giphy.com/embed/5ZVETcy0VZLgY")
                        }
                        if(message.content.length > 70){
                            message.reply("Ca nous interresse ? :thinking:\nhttps://giphy.com/embed/5ZVETcy0VZLgY")
                        }
                    }
                }
            }
        }
        }
    }
})

//Login//
bot.login(process.env.TOKEN)

//ReadyBot//
bot.on("ready", () => {
    console.log("Bot INTERACTIVEFOX prêt !")
    bot.user.setActivity("rien mais psst fais (!help) ^^")
})

//NVmembre//
bot.on("guildMemberAdd", member => {
    member.createDM().then(channel => {
        return channel.send(embedbienvenue)
    })
    member.guild.channels.find("id", "398439439346565161").sendMessage(member.toString() + " nous a rejoints ! :grinning:")
})

//Membrequit//
bot.on("guildMemberRemove", member => {
    member.guild.channels.find("id", "398439439346565161").sendMessage(member.toString() + " a quitté le serveur .. :cry: ")
})

bot.on("guildMemberAdd", member => {
 
})


//PingPong//
bot.on('message', message => {
    if(message.content == "Ping"){
        message.reply("Pong :ping_pong:")
    }
    if(message.content == "ping"){
        message.reply("pong :ping_pong:")
    }
    if(message.content == "pong"){
        message.reply("po.. haha tu m'as eu ! :joy:")
    }
    if(message.content == "Pong"){
        message.reply("Po.. haha tu m'as eu ! :joy:")
    }
    if(message.content == "PingPong"){
        message.reply("TennisdeTable ? :thinking:")
    }
    if(message.content == "pingPong"){
        message.reply("tennisdeTable ? :thinking:")
    }
    if(message.content == "Pingpong"){
        message.reply("Tennisdetable ? :thinking:")
    }
    if(message.content == "pingpong"){
        message.reply("tennisdetable ? :thinking:")
    }
    if(message.content == "ping Pong"){
        message.reply("tennis de Table ? :thinking:")
    }
    if(message.content == "Ping Pong"){
        message.reply("Tennis de table ? :thinking:")
    }
    if(message.content == "ping pong"){
        message.reply("tennis de table ? :thinking:")
    }
})

//Help//
bot.on('message', message => {
    if(message.content == prefixbot + "help"){
        message.channel.sendMessage(embedhelp)
    }
})

//Reactive//
bot.on('message', message => {
    if(message.channel.name == "annonces"){
        reactemojisrandom = Math.floor ( Math.random() * 4 )
        if(reactemojisrandom == 1){
            message.react("✅")
        }
        if(reactemojisrandom == 2){
            message.react("✔")
        }
        if(reactemojisrandom == 3){
            message.react("☑")
        }
    }
    if(message.content == "Bonne Nuit"){
        message.react("💤")
    }
    if(message.content == "bonne Nuit"){
        message.react("💤")
    }
    if(message.content == "Bonne nuit"){
        message.react("💤")
    }
    if(message.content == "bonne nuit"){
        message.react("💤")
    }
    if(message.content == "gg"){
        message.react("👏")
    }
    if(message.content == "Gg"){
        message.react("👏")
    }
    if(message.content == "gG"){
        message.react("👏")
    }
    if(message.content == "GG"){
        message.react("👏")
    }
    if(message.content == "aurevoir"){
        message.react("👋")
    }
    if(message.content == "Aurevoir"){
        message.react("👋")
    }
    if(message.content == "salut"){
        message.react("🖐")
    }
    if(message.content == "Salut"){
        message.react("🖐")
    }
    if(message.content == "Bonjour"){
        message.react("🙃")
    }
    if(message.content == "bonjour"){
        message.react("🙃")
    }
    if(message.content == "mdr"){
        message.react("😂")
    }
    if(message.content.startsWith(prefixbot8ball)){
        message.react("🎱")
    }
    if(message.content == "Pong"){
        message.react("🏓")
    }
    if(message.content == "pong"){
        message.react("🏓")
    }
    if(message.content == "Ping"){
        message.react("🏓")
    }
    if(message.content == "ping"){
        message.react("🏓")
    }
    if(message.content == "pingpong"){
        message.react("🏓")
    }
    if(message.content == "Pingpong"){
        message.react("🏓")
    }
    if(message.content == "pingPong"){
        message.react("🏓")
    }
    if(message.content == "PingPong"){
        message.react("🏓")
    }
    if(message.content == "ping pong"){
        message.react("🏓")
    }
    if(message.content == "Ping pong"){
        message.react("🏓")
    }
    if(message.content == "ping Pong"){
        message.react("🏓")
    }
    if(message.content == "Ping Pong"){
        message.react("🏓")
    }
})

//8ball//
bot.on('message', message => {
    if(message.content.startsWith(prefixbot8ball) & message.channel.name == "general"){
        message.reply("Tu ne peut pas utiliser cette commande ici,\nessaye le salon espace-bot :wink: !")
    }
    if(message.content.startsWith(prefixbot8ball) & message.channel.name == "espace-bot"){
        hasard8ball = Math.floor ( Math.random() * 21 )
        if (hasard8ball == 1) {
            message.reply("Essaye plus tard")
        }
        if (hasard8ball == 2) {
            message.reply("Essaye plus tard")
        }
        if (hasard8ball == 3) {
            message.reply("Pas d'avis")
        }
        if (hasard8ball == 4) {
            message.reply("C'est ton destin")
        }
        if (hasard8ball == 5) {
            message.reply("Le sort en est jeté")
        }
        if (hasard8ball == 6) {
            message.reply("Une chance sur deux")
        }
        if (hasard8ball == 7) {
            message.reply("Repose ta question")
        }
        if (hasard8ball == 8) {
            message.reply("D'après moi oui")
        }
        if (hasard8ball == 9) {
            message.reply("C'est certain")
        }
        if (hasard8ball == 10) {
            message.reply("Oui absolument")
        }
        if (hasard8ball == 11) {
            message.reply("Tu peux compter dessus")
        }
        if (hasard8ball == 12) {
            message.reply("Sans aucun doute")
        }
        if (hasard8ball == 13) {
            message.reply("Très probable")
        }
        if (hasard8ball == 14) {
            message.reply("Oui")
        }
        if (hasard8ball == 15) {
            message.reply("C'est bien parti")
        }
        if (hasard8ball == 16) {
            message.reply("C'est non")
        }
        if (hasard8ball == 17) {
            message.reply("Peu probable")
        }
        if (hasard8ball == 18) {
            message.reply("Faut pas rêver")
        }
        if (hasard8ball == 19) {
            message.reply("N'y compte pas")
        }
        if (hasard8ball == 20) {
            message.reply("Impossible")
        }
    }
})
//Roulette//
bot.on('message', message => {
    if(message.content == prefixbot + "roulette" & message.channel.id == "398439439346565161"){
        message.reply("Tu ne peut pas utiliser cette commande ici,\nessaye le salon espace-bot :wink: !")
    }
    if((message.content == prefixbot + "roulette" & message.channel.id == "398789646760280064") & (GAME == 1)){
        message.reply("Tu ne peut pas effectuer cette commande tant qu'une autre partie de roulette est en cours !")
    }
    if((message.content == prefixbot + "roulette" & message.channel.id == "398789646760280064") & (GAME == 0)){
        message.channel.sendMessage(embedroulette)
        GAME = 1
        hasardroulette = Math.floor ( Math.random() * 1001 )
    }
    if(GAME == 1  & message.channel.id == "398789646760280064"){
        if(message.author.bot){
            return
        }else{
            if(message.content == hasardroulette){
                message.react("✔")
                message.reply("remporte la partie ! :raised_hands:")
                GAME = 0
            }
            if(message.content < hasardroulette){
                message.react("➕")
            }
            if(message.content > hasardroulette){
                message.react("➖")
            }
        }
    }
})

//Grades auto/

bot.on('guildMemberAdd', member => {
    console.log('User ' + member.user.username + 'has joined this server !')
    var role = member.guild.roles.find('name', 'Humain')
    member.addRole(role)
})
