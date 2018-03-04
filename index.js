var Discord = require('discord.js');
const bot = new Discord.Client();
var fs = require('fs');

//Token file
const config = require("./config.json");

//Login
bot.login(config.token);

//Logging successful start in console
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}! and serving in CF101`);
});

//Responding to different kind of commands
//The big bulk of the code
//Includes: >welcome, >commands, >unit xx, >pic xx, >ducks
bot.on('message', (message) => {

  console.log(`Message sent by ${message.author.username}`);


//Separating the command and the arguments
//For example, >unit touka separates to command = >unit and args = touka
//Multiple arguments separate into an array

  var args = message.content.toLowerCase().split(/ +/g);
  var command = args.shift().toLowerCase();

  if (message.author.equals(bot.user)) return;


    if (command == ">welcome"){
      message.channel.send("Welcome to Crash Fever 101. <:touka:419557503085445120> \n" +
      "I'm Touka <:touka:419557503085445120> and I am here to help you with anything Crash Fever related!\n" +
      "To make your stay on this Discord channel fun and great, please be nice and don't give " +
      "troll responses to serious questions.\n" + "**For a full list of rules and channel info visit the channel #rules** \n" +
      "*For a list of commands you can use with me type >commands*");
    }

    else if (command == ">commands"){
      message.channel.send("**Command list:** \n WIP");
    }


    if (command == ">unit"){
      switch (args[0]) {
        //FESTIVAL UNITS
        //
        //RED
        case 'morse':
          message.channel.send("**Chain of Emotion Morse** \n" +
          "__Cost__: 55 , __Tribe__: Academic, Unidentified\n" +
          "__Type__: Technical , __Color__: Red\n" +
          "HP 6552 ATK 4033 REC 4167\n" +
          "__Skill__: Convert hearts to CP + 2 turns, drop hearts as red bombs, boost red ATK (absorb Yellow, Blue to enhance). (7 turns)\n" +
          "__CSkill__: Ultra damage to 1 enemy + recover low HP + boost party REC for 2 turns.\n" +
          "__Ability 1__: protect break\n" +
          "__Ability 2__: boost heart spawn rate when in front\n" +
          "__Apples__: red\n" +
          "__Rating__: 98/100 or SSS\n" +
          "__Obtainable__: Fever Festival Hatchers\n");
          break;

        case 'borh': //mispelled
        case 'bohr':
            message.channel.send("**Quantum Progenitor Bohr**\n" +
            "__Cost__: 55, __Tribe__: Academic, Human\n" +
            "__Type__: Offense , __Color__: Red\n+ " +
            "HP 6685 ATK 5874 REC 2103 \n" +
            "__Skill__: Bombs, yellow panels to CP + up to 5 red panels to red bombs (L) + no green, heart panels 2 turns (8 turns).\n" +
            "__CSkill__: Ultra damage to 1 enemy.\n" +
            "__Ability 1__: damage panel break\n" +
            "__Ability 2__: 10,000 HP barrier at start of battle\n" +
            "__Apples__: red\n" +
            "__Rating__: 95/100 or SS\n" +
            "__Obtainable__: Fever Festival Hatchers");
            break;

        case 'fahren':
        case 'fahrenheit':
          message.channel.send("**Blazing Legs Fahrenheit **\n" +
          "__Cost__: 55 , __Tribe__: Academic, Demon\n" +
          "__Type__: Stamina , __Color__: Red\n+ " +
          "HP 9947 ATK 4625 REC 2113 \n" +
          "__Skill__: 4 panels to SCP (L) + Laser (X pattern) + Reduce damage from enemies 30% 2 turns + Chance hearts drop as red bombs (7 turns)\n" +
          "__CSkill__: Ultra 2-hit combo with red, blue damage to 1 enemy based on own max HP\n" +
          "__Ability 1__: protect break\n" +
          "__Ability 2__: if unit in party breaks 4 CP in 1 turn, boost all unit ATK by 600\n" +
          "__Apples__: green\n" +
          "__Rating__: SS\n" +
          "__Obtainable__: Fever Festival");
          break;

        case 'schro':
        case 'schrodinger':
        case 'schro ua':
        case 'schrodinger ua':
          message.channel.send();
          break;

        case 'schro':
        case 'schrodinger':
          message.channel.send();
          break;

        case 'volta':
          message.channel.send();
          break;

        case 'cardano':
          message.channel.send();
          break;

        case 'froid':
        case 'freud':
          message.chanel.send();
          break;

        case 'froid':
        case 'freud':
        case 'froid ua':
        case 'freud ua':
          message.channel.send();
          break;

        case 'lagr':
        case 'lagrange':
        case 'lagrange ua':
          message.channel.send();
          break;

        case 'lagr':
        case 'lagrange':
          message.channel.send();
          break;

        case 'seki':
          message.channel.send();
          break;

        case 'para':
        case 'paracel':
        case 'paracelsus':
          message.channel.send();
          break;

        case 'cauchy':
          message.channel.send();
          break;


        //FESTIVAL UNITS
        //
        //GREEN



        //FESTIVAL UNITS
        //
        //BLUE



        //FESTIVAL UNITS
        //
        //YELLOW




        //REGIONAL FES
        //
        //RED

        case 'cai':
        case 'shen':
        case 'caishen':
          message.channel.send("**Goddess of New Year Caishen **\n" +
          "__Cost__: 55 , __Tribe__: Deity\n" +
          "__Type__: Technical , __Color__: Red\n+ " +
          "HP 6387 ATK 5050 REC 3306 \n" +
          "__Skill__: 7 panels to red bombs (L) + 1 panel to red CBP + chance front unit CP drops, DEF ultra boost 1 turn (7 turns)\n" +
          "__CSkill__: Ultra damage to 1 enemy\n" +
          "__Ability 1__: When in front, destroy 40+ panels during turn to boost ATK\n" +
          "__Ability 2__: protect break\n" +
          "__Ability 3__: When in front and fever at 100%, chance red bombs (L) drop (10 bug)\n" +
          "__Ability 4__: junk break (20 bug)\n" +
          "__Apples__: red\n" +
          "__Rating__: SS\n" +
          "__Obtainable__: Regional Festival ");
          break;

        case 'perch':
        case 'perchta':
          message.channel.send();
          break;

        case 'haru':
        case 'haruka':
          message.channel.send();
          break;

        case 'meng':
        case 'meng po':
          message.channel.send();
          break;

        //REGIONAL FES
        //
        //GREEN



        //REGIONAL FES
        //
        //BLUE



        //REGIONAL FES
        //
        //YELLOW



        //REGIONAL UNITS
        //
        //
        case 'garuda':
          message.channel.send();
          break;

        case 'enra':
          message.channel.send();
          break;


        //SUMMER UNITS
        //
        //

        case 'summer':
        case 'summer zheng':
        case 'summer cheng':
        case 'summer zheng cheng':
        case 'summer chenggong':
        case 'summer zheng chenggong':
          message.channel.send();

        case 'summer':
        case 'summer dirac':
          message.channel.send();

        case 'summer':
        case 'summer hubble':
          message.channel.send();

        case 'summer':
        case 'summer iza':
        case 'summer izanami':
          message.channel.send();

        case 'summer':
        case 'summer guan':
        case 'summer guan yu':
          message.channel.send();
          break;

        //SUMMER UNITS
        //
        //GREEN



        //SUMMER UNITS
        //
        //BLUE



        //SUMMER UNITS
        //
        //YELLOW



        //NEW YEAR UNITS
        //
        //

        case 'new year':
        case 'ny':
        case 'ny galois':
        case 'new year gal':
        case 'new year galois':
          message.channel.send();
          break;

        case 'new year':
        case 'ny':
        case 'new year euclid':
          message.channel.send();
          break;


        //VALENTINES EVENT
        //
        //



        //CHRISTMAS EVENT
        //
        //



        //SCHOOL FESTIVAL
        //
        //



        //BRIDE EVENT
        //WHITE DAY EVENT
        //



        //SPRING EVENT
        //
        //



        //HALLOWEEN EVENT
        //
        //



        //RANKING UNITS
        //
        //

        case 'exc':
        case 'excali':
        case 'excalibur':
          message.channel.send();
          break;

        case 'ruth':
        case 'ruther':
        case 'rutherford':
          message.channel.send();
          break;

        case 'muramasa':
        case 'mura':
          message.channel.send();
          break;

        case 'gamba':
        case 'gamban':
        case 'gambantein':
        case 'gambanteinn':
          message.channel.send();
          break;

        case 'heighway':
        case 'heigh':
        case 'heighway ua':
        case 'heigh ua':
          message.channel.send();

        case 'heighway':
        case 'heigh':
          message.channel.send();
          break;

        case 'maclaurin ua':
        case 'mac ua':
        case 'mclaurin ua':
        case 'maclaurin':
        case 'mac':
        case 'mclaurin':
          message.channel.send();

        case 'maclaurin':
        case 'mac':
        case 'mclaurin':
          message.channel.send();
          break;


        //RAID UNITS
        //
        //



        //VOCALOID HATSUNE MIKU
        //COLLABORATION
        //



        //ULTIMATE WIZARD QUEST
        //
        //



        //WIZARD QUEST
        //
        //RED



        //WIZARD QUEST
        //
        //GREEN



        //WIZARD QUEST
        //
        //BLUE



        //WIZARD QUEST
        //
        //YELLOW



        //PERMANENT UNITS
        //
        //RED



        //PERMANENT UNITS
        //
        //GREEN



        //PERMANENT UNITS
        //
        //BLUE



        //PERMANENT UNITS
        //
        //YELLOW



        //BATTLE CATS
        //COLLABORATION
        //



        //TOWER OF THE QUEEN
        //COLLABORATION
        //



        //KING OF FIGHTERS
        //COLLABORATION
        //

        case 'kyo':
        case 'kyo kusanagi':
          message.channel.send();

        case 'kyo':
        case 'kyo kusanagi':
        case 'kyo 95':
        case 'kyo kusanagi 95':
          message.channel.send();
          break;

        case 'mai':
        case 'mai shiranui':
          message.channel.send();
          break;

        case 'iori':
        case 'iori yagami':
        case 'yagami':
          message.channel.send();
          break;

        case 'chris':
        case 'chris ua':
          message.channel.send();

        case 'chris':
          message.channel.send();
          break;

        //GHOST STORE
        //
        //



        //ANNIVERSARY UNITS
        //COMMEMORATIVE UNITS
        //



        //TOWER OF SAVIORS
        //COLLABORATION
        //



        //LINK UNITS
        //
        //



        //STORY QUEST
        //
        //



        //OTHER UNITS
        //
        //



        //TANABATA EVENT
        //
        //


        }
    }

// UNIT PICTURES
//
//
    if (command == ">pic"){
      switch (args[0]){
        case 'morse':
          message.channel.send("", {file: "https://i.imgur.com/w19w1tQ.jpg" });
        case 'bohr':
          message.channel.send("", {file: "https://i.imgur.com/pHnovEl.png"});
        case 'cai':
        case 'caishen':
          message.channel.send("", {file: "https://i.imgur.com/lzlUHF1.jpg"});
        case 'fahren':
        case 'fahrenheit':
          message.channel.send("", {file: "https://i.imgur.com/kbAXeEU.png"});

      }
    }


});



//bot.on('message', function(message) {


//  }

//  var args = message.content.slice(PREFIX.length).trim().split(/ +/g);
//  var command = args.shift().toLowerCase();

//  if (message.author.equals(bot.user)) return;

//  if (!message.content.startswith(PREFIX)) return;


//  if (message.content.startswith(config.prefix + "welcome")){
    //Welcome info
//      const welcomemsg = "Welcome to Crash Fever 101. WIP";
//      bot.sendMessage(message.channel, "welcomemsg");
//});

  //if (message.content.startswith(config.prefix + "commands")){
    //Command List
  //    const commands = "Command list";
  //    bor.sendMessage(message.channel, commands);
  //  }

  //  if (command2 === "unit"){
  //    switch (args[0].toLowerCase()) {
      //This is where it all begins
      //All the info listed by decreasing cost
      //and in the color order of
      //RED GREEN BLUE YELLOW
  //    };

    //case "unit";
    //  switch (expression) {
    //    case expression:
//
  //        break;
  //      default:
