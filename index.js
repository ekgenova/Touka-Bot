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
          "__Rating__: SSS\n" +
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
            "__Rating__: SS at 10b, S below 10b\n" +
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
          message.channel.send("**Multiple Realities Schrödinger (UA) **\n" +
          "__Cost__: 55 , __Tribe__: Academic, Animal\n" +
          "__Type__: Technical , __Color__: Red\n+ " +
          "HP 6741 ATK 4538 REC 3488 \n" +
          "__Skill__: Convert green to red + for 2 turns, party easy CP spawn (immense) + Reduce green panel rate 1 turn (6 turns)\n" +
          "__CSkill__: Ultra damage to 1 enemy\n" +
          "__Ability 1__: protect break\n" +
          "__Ability 2__: junk break\n" +
          "__Apples__: red\n" +
          "__Rating__: SS\n" +
          "__Obtainable__: Fever Festival");
          break;

        case 'schro':
        case 'schrodinger':
          message.channel.send("**Crumbling Worlds Schrödinger **\n" +
          "__Cost__: 55 , __Tribe__: Animal\n" +
          "__Type__: Balanced , __Color__: Red\n+ " +
          "HP 7140 ATK 4618 REC 3087 \n" +
          "__Skill__: Easy CP generation 2 turns (extreme) + convert blue to red (6 turns)\n" +
          "__CSkill__: Ultra damage to 1 enemy + high chance to inflict Virus\n" +
          "__Apples__: red\n" +
          "__Rating__: S\n" +
          "__Obtainable__: Fever Festival");
          break;

        case 'volta':
          message.channel.send("**Burning Electroflower Volta **\n" +
          "__Cost__: 55 , __Tribe__: Academic, Human\n" +
          "__Type__: Offense , __Color__: Red\n+ " +
          "HP 7110 ATK 6078 REC 2301 \n" +
          "__Skill__: Hearts to red bombs (L) + add 2 taps to party 2 turns + chance red, blue, yellow panels drop as front unit CP (L) 1 turn (8 turns)\n" +
          "__CSkill__: Ultra damage to 1 enemy + damage to all enemies\n" +
          "__Ability 1__: junk break\n" +
          "__Ability 2__: when in front, in 1 turn, destroy 50 panels for massive ATK boost\n" +
          "__Apples__: red\n" +
          "__Rating__: SS\n" +
          "__Obtainable__: Fever Festival");
          break;

        case 'cardano':
          message.channel.send();
          break;

        case 'froid':
        case 'freud':
          message.chanel.send("**Ecstatic Sheep Hunter Froid **\n" +
          "__Cost__: 55 , __Tribe__: Academic, Mech\n" +
          "__Type__: Balanced , __Color__: Red\n+ " +
          "HP 7140 ATK 4627 REC 3430 \n" +
          "__Skill__: Convert 2 panels to SCP(L) + low chance of bombs 1 turn + damage reduced 40% 2 turns (8 turns)\n" +
          "__CSkill__: massive damage to 1 enemy + high effect against deity\n" +
          "__Apples__: red\n" +
          "__Rating__: S\n" +
          "__Obtainable__: Fever Festival");

        case 'froid':
        case 'freud':
        case 'froid ua':
        case 'freud ua':
          message.channel.send("**Hunter of Dreams Froid (UA) **\n" +
          "__Cost__: 55 , __Tribe__: Academic, Mech\n" +
          "__Type__: Balanced , __Color__: Red\n+ " +
          "HP 6790 ATK 4820 REC 3430 \n" +
          "__Skill__: Up to 1 panel to SCP(XL), up to 1 to bomb(L) + chance 5 colors of bombs(L) 1 turn + damage 40% lower 2 turns (8 turns)\n" +
          "__CSkill__: Massive damage to 1 enemy, ultra effect against deity\n" +
          "__Ability 1__: damage panel break\n" +
          "__Ability 2__: boost red panel rate when in front\n" +
          "__Apples__: red\n" +
          "__Rating__: S\n" +
          "__Obtainable__: Fever Festival");
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
          message.channel.send("**Spiteful Witch Perchta **\n" +
          "__Cost__: 55 , __Tribe__: Demon, Fantasy\n" +
          "__Type__: Balanced , __Color__: Red\n+ " +
          "HP 7140 ATK 4627 REC 3087 \n" +
          "__Skill__: 3 columns: red, green, CP + mass. CP enhance + red, green unit strong bomb blast 2 turns + red unit add 1 tap (7 turns)\n" +
          "__CSkill__: Ultra damage to 1 enemy\n" +
          "__Ability 1__: virus ineffective\n" +
          "__Ability 2__: when in front, low chance red bombs(L) drop\n" +
          "__Ability 3__: boost to own CSkill power (10 bug)\n" +
          "__Ability 4__: 400 boost to own ATK, REC, DEF (20 bug)\n" +
          "__Apples__: red\n" +
          "__Rating__: SS\n" +
          "__Obtainable__: Regional Summer Festival");
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

        case 'jang':
        case 'jang yeongsil':
        case 'yeongsil':
        case 'jang yeong':
          message.channel.send();
          break;

        case 'li tieguai':
        case 'li':
        case 'tieguai':
        case 'li ti':
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

        case 'summer':
        case 'summer lan':
        case 'summer lan caihe':
          message.channel.send();
          break;

        case 'summer':
        case 'summer qilin':
        case 'summer kirin':
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
        case 'gal':
          message.channel.send("**Spring Swimming Theory Galois **\n" +
          "__Cost__: 55 , __Tribe__: Academic\n" +
          "__Type__: Stamina , __Color__: Red\n+ " +
          "HP 10049 ATK 4370 REC 2521 \n" +
          "__Skill__: 1 panel to SCP(XL) + 10,000 self barrier + party easy CP (immense), red panel rate boost 2 turns (7 turns)\n" +
          "__CSkill__: Ultra damage to 1 enemy + red unit ATK 100 boost 2 turns\n" +
          "__Ability 1__: junk break\n" +
          "__Ability 2__: add 1 tap to self when there is a Balanced type unit in your party\n" +
          "__Ability 3__: high power boost to all own attack in New Zodiac Update and Ancient Divine Dance\n" +
          "__Apples__: red\n" +
          "__Rating__: SSS\n" +
          "__Obtainable__: New Year Dream 2018 Hatcher");
          break;

        case 'new year':
        case 'ny':
        case 'new year euclid':
        case 'euc':
          message.channel.send("**Extreme Theorist Euclid **\n" +
          "__Cost__: 55 , __Tribe__: Academic, Human\n" +
          "__Type__: Balanced , __Color__: Red\n+ " +
          "HP 6930 ATK 4584 REC 3087 \n" +
          "__Skill__: 1 panel to red CBP, green to red bombs(L) + green, hearts may drop as front CP, red bombs 2 turns (7 turns)\n" +
          "__CSkill__: Ultra damage to 1 enemy + recover HP\n" +
          "__Ability 1__: damage panel break\n" +
          "__Ability 2__: enhance bomb blast when in front\n" +
          "__Ability 3__: high power boost to own attacks in New Zodiac Update and Ancient Divine Dance\n" +
          "__Ability 4__: break 40+ panels in 1 turn for massive easy CP spawn (20 bug)\n" +
          "__Apples__: red\n" +
          "__Rating__: S\n" +
          "__Obtainable__: New Year Dream 2018 Hatcher"
);
          break;

        case 'new year':
        case 'ny':
        case 'new year ryu':
        case 'ny ryunosuke':
        case 'ny ryunosuke akutagawa':
        case 'new year ryunosuke':
          message.channel.send();
          break;

        case 'new year':
        case 'ny':
        case 'new year lawrence':
        case 'ny lawrence':
          message.channel.send();
          break;

        case 'totori':
          message.channel.send();
          break;


        //VALENTINES EVENT
        //
        //

        case 'valentines maxwell':
        case 'val maxwell':
        case 'maxwell':
          message.channel.send();
          break;

        case 'cornet':
          message.channel.send();
          break;

        case 'fondue':
        case 'fondu':
          message.channel.send();
          break;

        case 'praline':
          message.channel.send();
          break;



        //CHRISTMAS EVENT
        //
        //

        case 'christmas lupin':
        case 'xmas lupin':
        case 'lupin':
          message.channel.send("**Dashing Night Thief Lupin **\n" +
          "__Cost__: 50 , __Tribe__: Human, Fantasy\n" +
          "__Type__: Recovery , __Color__: Red\n+ " +
          "HP 5914 ATK 3840 REC 5033 \n" +
          "__Skill__: Up to 12 non-red panels to CP + give red units junk break 1 turn (4 turns)\n" +
          "__CSkill__: Ultra damage to 1 enemy based on own REC + drop up to 3 CP(L) for front unit next turn\n" +
          "__Ability 1__: protect break\n" +
          "__Ability 2__: boost following unit ATK by 700 (20 bug)\n" +
          "__Ability 3__: boost preceeding unit REC by 700 (40 bug)\n" +
          "__Ability 4__: boost CSkill damage for units on both sides (60 bug)\n" +
          "__Apples__: blue\n" +
          "__Rating__: A+\n" +
          "__Obtainable__: Christmas Event Ultimate Wizard Quest");
          break;

        case 'christmas belial':
        case 'xmas belial':
        case 'belial':
          message.channel.send();

        //SCHOOL FESTIVAL
        //
        //

        case 'legato':
          message.channel.send();
          break;

        case 'chelsea':
          message.channel.send();
          break;

        case 'school antoinette':
        case 'school anto':
        case 'antoinette':
          message.channel.send();



        //BRIDE EVENT
        //WHITE DAY EVENT
        //

        case 'lily':
          message.channel.send();
          break;

        case 'bride snow white':
        case 'snow white':
        case 'bride snow':
          message.channel.send();
          break;

        case 'garnet':
          message.channel.send();



        //SPRING EVENT
        //
        //



        //HALLOWEEN EVENT
        //
        //

        case 'samhain':
        case 'sam':
          message.channel.send("**Night Desires Samhain **\n" +
          "__Cost__: 55 , __Tribe__: Demon, Animal\n" +
          "__Type__: Stamina , __Color__: Red\n+ " +
          "HP 11673 ATK 4333 REC 840 \n" +
          "__Skill__: Yellow, blue to CP +  give red, green units damage panel break, add tap 2 turns (6 turns)\n" +
          "__CSkill__: Massive damage twice to 1 enemy based on own max HP + recover HP\n" +
          "__Ability 1__: protect break\n" +
          "__Ability 2__: when HP is <= 35%, own REC boosted by 4,000\n" +
          "__Ability 3__: high boost to all own attacks in Gimme Sweets and Sweet-Fanged Vampire quests\n" +
          "__Apples__: green\n" +
          "__Rating__: S\n" +
          "__Obtainable__: Halloween 2017 Event Hatcher");
          break;

        case 'halloween lancelot':
        case 'h lancelot':
        case 'lancelot':
          message.channel.send();

        case 'halloween mermaid':
        case 'h mermaid':
        case 'mermaid':
          message.channel.send();



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

        case 'adonis':
        case 'adon':
          message.channel.send();
          break;


        //VOCALOID HATSUNE MIKU
        //COLLABORATION
        //

        case 'miku':
        case 'black miku':
        case 'hatsune miku':
        case 'black hatsune miku':
        case 'shadow miku':
          message.channel.send("**Shadow Songstress Hatsune Miku **\n" +
          "__Cost__: 55 , __Tribe__: Unidentified\n" +
          "__Type__: Offense , __Color__: Red\n+ " +
          "HP 6790 ATK 6097 REC 1609 \n" +
          "__Skill__: V-shaped CP conversion + gain 3000 ATK, 2 extra taps for 7 turns + No yellow panels 3 turns (7 turns)\n" +
          "__CSkill__: Ultra damage to 1 enemy\n" +
          "__Ability 1__: damage panel break\n" +
          "__Ability 2__: when in front, red, green, yellow, blue can't be locked\n" +
          "__Ability 3__: high damage boost to all own attacks during 2018 Miku Crossover Quests\n" +
          "__Ability 3__: No green panels when in front and Fever Gauge is at 39% or higher (20 bug)\n" +
          "__Apples__: red\n" +
          "__Rating__: SS\n" +
          "__Obtainable__: Vocaloid Crossover Event 2018 Hatcher");
          break;

        case 'miku luka':
        case 'miku and luka':
        case 'luka miku':
        case 'luka and miku':
          message.channel.send("**Gorgeous Song Luka & Miku **\n" +
          "__Cost__: 50 , __Tribe__: Unidentified\n" +
          "__Type__: Balanced , __Color__: Red\n+ " +
          "HP 6500 ATK 4376 REC 3249 \n" +
          "__Skill__: X-shaped laser + ultra ATK boost for all units, ultra easy CP spawn, no blue panels 2 turns (8 turns)\n" +
          "__CSkill__: High red and green damage in 2 hits to 1 enemy\n" +
          "__Ability 1__: damage panel break\n" +
          "__Ability 2__: when in front, red, green panels can't be locked\n" +
          "__Ability 3__: boost damage of all own attacks during 2018 Miku Crossover Quests\n" +
          "__Ability 4__: at start of each floor, own skill turn reduced by 1 (20 bug)\n" +
          "__Apples__: red\n" +
          "__Rating__: A+\n" +
          "__Obtainable__: Vocaloid Crossover Event 2018 Hatcher");
          break;

        case 'miku idunn':
        case 'idunn':
        case 'idunn miku':
          message.channel.send();

        case 'miku satan':
        case 'satan':
        case 'satan miku':
        case 'satan luka':
        case 'luka satan':
          message.channel.send();



        //ULTIMATE WIZARD QUEST
        //
        //

        case 'oda':
        case 'nobu':
        case 'nobunaga':
        case 'oda nobunaga':
        case 'oda nobu':
        case 'nobunaga oda':
          message.channel.send("**Nobunaga Oda, True Conquerer **\n" +
          "__Cost__: 50 , __Tribe__: Human, Samurai\n" +
          "__Type__: Balanced , __Color__: Red\n+ " +
          "HP 6721 ATK 4332 REC 3408 \n" +
          "__Skill__: For 1 turn, supper boost red unit ATK + add 2 taps + all red units join attack (7 turns)\n" +
          "__CSkill__: Massive damage to 1 enemy + high effect against deity\n" +
          "__Apples__: red\n" +
          "__Rating__: S\n" +
          "__Obtainable__: Ultimate Wizard Quest");

        case 'oda':
        case 'nobu':
        case 'nobunaga':
        case 'oda nobunaga':
        case 'oda nobu':
        case 'nobunaga oda':
        case 'oda ua':
        case 'nobu ua':
        case 'nobunaga ua':
        case 'oda nobunaga ua':
        case 'oda nobu ua':
        case 'nobunaga oda ua':
          message.channel.send("**Nobunaga Oda, Flame Shadow (UA) **\n" +
          "__Cost__: 50 , __Tribe__: Human, Samurai\n" +
          "__Type__: Balanced , __Color__: Red\n+ " +
          "HP 6770 ATK 4631 REC 3108 \n" +
          "__Skill__: Junk, yellow panels to red + red unit ATK mass. boost, 2 extra taps, red units join attack 1 turn (7 turns)\n" +
          "__CSkill__: Ultra damage to 1 enemy\n" +
          "__Ability 1__: blast reduction ineffective\n" +
          "__Ability 2__: enhance bomb blast when in front (15 bug)\n" +
          "__Apples__: red\n" +
          "__Rating__: S\n" +
          "__Obtainable__: Ultimate Wizard Quest");
          break;

        case 'gilg':
        case 'gilga':
        case 'gilgamesh':
          message.channel.send("**Rowdy Lion Gilgamesh **\n" +
          "__Cost__: 50 , __Tribe__: Deity, Human\n" +
          "__Type__: Offense , __Color__: Red\n+ " +
          "HP 6427 ATK 5504 REC 2090 \n" +
          "__Skill__: Spawn 1 SCP(XL), 1 SCP(L), 4 CP(L) at random (7 turns)\n" +
          "__CSkill__: Massive damage to 1 enemy\n" +
          "__Ability 1__: virus ineffective\n" +
          "__Ability 2__: when in front, chain 12 panels in 1 tap for own ATK boost (once per turn)\n" +
          "__Apples__: red\n" +
          "__Rating__: A+\n" +
          "__Obtainable__: Ultimate Wizard Quest");
          break;

        case 'alex':
        case 'alexander':
          message.channel.send();
          break;

        case 'rasputin':
        case 'rasp':
        case 'putin':
          message.channel.send();
          break;

        case 'hideyoshi':
        case 'hide':
        case 'toyotomi':
        case 'toyotomi hideyoshi':
          message.channel.send();
          break;



        //WIZARD QUEST
        //
        //RED

        case 'freyr ua':
        case 'freyr':
          message.channel.send();

        case 'freyr':
          message.channel.send();
          break;

        case 'jekyll':
        case 'hyde':
        case 'jekyll and hyde':
        case 'jekyll hyde':
          message.channel.send();
          break;

        case 'kali':
          message.channel.send();
          break;

        case 'amaterasu':
        case 'ama':
          message.channel.send();

        case 'amaterasu':
        case 'ama':
        case 'amaterasu ua':
        case 'ama ua':
          message.channel.send();

        case 'arthur':
        case 'arthur ua':
          message.channel.send();

        case 'arthur':
          message.channel.send();
          break;

        case 'eris':
          message.channel.send();
          break;

        case 'karma':
          message.channel.send();
          break;

        case 'paula and danny':
        case 'paula':
        case 'danny':
        case 'paula danny':
          message.channel.send();
          break;

        case 'son goku ua':
        case 'son goku':
        case 'son':
        case 'goku':
        case 'son ua':
        case 'goku ua':
          message.channel.send();

        case 'son goku':
        case 'son':
        case 'goku':
          message.channel.send();
          break;

        case 'colossus':
        case 'colos':
          message.channel.send();
          break;

        case 'louis':
        case 'louis 15':
        case 'louis xvi':
          message.channel.send();
          break;

        case 'shingen':
        case 'takeda':
        case 'shingen takeda':
        case 'shin':
          message.channel.send();
          break;

        case 'uranus':
        case 'uran':
          message.channel.send();
          break;


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

        case 'holmes':
          message.channel.send("**Master Detective Holmes **\n" +
          "__Cost__: 53 , __Tribe__: Human, Hero\n" +
          "__Type__: Offense , __Color__: Red\n+ " +
          "HP 6712 ATK 5641 REC 2238 \n" +
          "__Skill__: Blue panels to red bombs + boost party ATK (absorb green, junk for mass. boost), blue panels may drop as red 1 turn (4 turn)\n" +
          "__CSkill__: Ultra damage to 1 enemy\n" +
          "__Ability 1__: protect break\n" +
          "__Apples__: red\n" +
          "__Rating__: A+\n" +
          "__Obtainable__: Permanent (any hatcher)");

        case 'cleo':
        case 'cleopatra':
          message.channel.send();
          break;

        case 'zhuge':
        case 'liang':
        case 'zhuge liang':
          message.channel.send();
          break;

        case 'kushinada':
        case 'princess':
        case 'kushina':
        case 'kushi':
        case 'princess kushinada':
          message.channel.send();
          break;

        case 'king':
        case 'draig':
        case 'king draig':
          message.channel.send();
          break;

        case 'hokusai':
        case 'hoku':
          message.channel.send();
          break;

        case 'kondo':
        case 'isamu':
        case 'isamu kondo':
          message.channel.send();
          break;

        case 'meta':
        case 'metatron':
          message.channel.send();

        case 'napoleon':
        case 'napo':
          message.channel.send();

        case 'nemesis':
          message.channel.send();
          break;

        case 'sasuke':
        case 'saru':
        case 'sarutobi':
        case 'sasuke sarutobi':
          message.channel.send();
          break;

        case 'thor':
          message.channel.send();

        case 'thum':
        case 'thumb':
        case 'thumbelina':
          message.channel.send();
          break;

        case 'watson':
          message.channel.send();
          break;

        case 'amon':
          message.channel.send();
          break;

        case 'himiko':
          message.channel.send();

        case 'perrault':
        case 'perra':
          message.channel.send();
          break;

        case 'ra':
          message.channel.send();
          break;

        case 'drth':
          message.channel.send();

        case 'apollo':
          message.channel.send();
          break;

        case 'belial ua':
        case 'belial':
          message.channel.send();

        case 'belial':
          message.channel.send();

        case 'hazuru':
        case 'hazu':
          message.channel.send();
          break;

        case 'kurumi':
        case 'kuru':
          message.channel.send();
          break;

        case 'prometheus':
        case 'prom':
          message.channel.send();
          break;

        case 'ymir':
          message.channel.send();
          break;

        case 'fenrir':
          message.channel.send();
          break;



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

        case 'mega':
        case 'megaphrodite':
          message.channel.send();
          break;

        case 'crazed cat':
          message.channel.send();
          break;

        case 'cat nurse':
        case 'heartful cat nurse':
          message.channel.send();
          break;

        case 'cosmo':
        case 'galaxy warrior cosmo':
          message.channel.send();
          break;



        //TOWER OF SAVIORS
        //COLLABORATION
        //

        case 'medea':
          message.channel.send();
          break;

        case 'chessia':
          message.channel.send();
          break;


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
          message.channel.send("**Beautiful Ninja Mai **\n" +
          "__Cost__: 55 , __Tribe__: Human\n" +
          "__Type__: Recovery , __Color__: Red\n+ " +
          "HP 5916 ATK 4370 REC 4610 \n" +
          "__Skill__: High damage to 1 enemy + horizontal line to 2 SCP, 1 SCP (XL), red bombs + unlock hearts + chance yellow,hearts drop as heart bombs 2 turn (7 turns)\n" +
          "__CSkill__: Damage to 1 enemy 3 times + high hp recovery\n" +
          "__Ability 1__: damage panel break\n" +
          "__Ability 2__: massive boost to own ATK/REC during Fever\n" +
          "__Ability 3__: boost damage against Mature, Vice and Iori during the Saxophone Under the Moon! quest" +
          "__Apples__: red (can blue)\n" +
          "__Rating__: S\n" +
          "__Obtainable__: King of Fighters collaboration hatcher");
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


        //TOWER OF THE QUEEN
        //
        //

        case 'rose':
          message.channel.send();
          break;



        //GHOST STORE
        //
        //

        case 'strength':
          message.channel.send();
          break;

        case 'troy':
        case 'trojan':
          message.channel.send();
          break;



        //ANNIVERSARY UNITS
        //COMMEMORATIVE UNITS
        //

        case 'cauchy':
          message.channel.send("**Illusory Phantom Cauchy **\n" +
          "__Cost__: 55 , __Tribe__: Academic, Unidentified\n" +
          "__Type__: Offense , __Color__: Red\n+ " +
          "HP 6930 ATK 5584 REC 2298 \n" +
          "__Skill__: Convert red panels to CP, yellow to red + mass. boost party ATK/DEF 3 turns (8 turns)\n" +
          "__CSkill__: high red then green damage to 1 enemy\n" +
          "__Ability 1__: enhance bomb blast when in front\n" +
          "__Ability 2__: virus ineffective\n" +
          "__Apples__: red\n" +
          "__Rating__: S\n" +
          "__Obtainable__: Commemorative Fever Festival");
          break;

        case 'para':
        case 'paracel':
        case 'paracelsus':
          message.channel.send();
          break;

        case 'erwin':
          message.channel.send();
          break;

        case 'hellraiser':
          message.channel.send();
          break;


        //LINK UNITS
        //
        //

        case 'suzaku':
          message.channel.send();
          break;


        //STORY QUEST
        //
        //

        case 'agra':
          message.channel.send();
          break;


        //OTHER UNITS
        //
        //

        case 'rosso':
        case 'ai red':
          message.channel.send();
          break;


        //TANABATA EVENT
        //
        //

        case 'orihime':
        case 'hime':
          message.channel.send();
          break;

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
        case 'schro ua':
        case 'schrodinger ua':
          message.channel.send("", {file: "https://i.imgur.com/mdqG5fr.png"});
        case 'schro':
        case 'schrodinger':
          message.channel.send("", {file: "https://i.imgur.com/z20QTGf.jpg"});
        case 'volta':
          message.channel.send("", {file: "https://i.imgur.com/fhgPdRZ.jpg"});
        case 'ny galois':
        case 'new year galois':
          message.channel.send("", {file: "https://i.imgur.com/DGhruuE.jpg"});
        case 'mai':
        case 'mai shiranui':
          message.channel.send("", {file: "https://i.imgur.com/Amn84cO.jpg"});
        case 'froid ua':
        case 'freud ua':
          message.channel.send("", {file: "https://i.imgur.com/2L0pwmD.png"});
        case 'perchta':
          message.channel.send("", {file: "https://i.imgur.com/RtQaJG4.jpg"});
        case 'shadow miku':
        case 'miku black':
          message.channel.send("", {file: "https://i.imgur.com/f1iFRaB.jpg"});
        case 'cauchy':
          message.channel.send("", {file: "https://i.imgur.com/25jL9zq.png"});
        case 'froid':
        case 'freud':
          message.channel.send("", {file: "https://i.imgur.com/esjj9dM.png"});
        case 'ny euclid':
        case 'new year euclid':
          message.channel.send("", {file: "https://i.imgur.com/q1RfyOv.png"});
        case 'oda ua':
        case 'nobunaga ua':
        case 'nobunaga oda ua':
        case 'oda nobunaga ua':
          message.channel.send("", {file: "https://i.imgur.com/g6ffmSg.jpg"});
        case 'oda':
        case 'nobunaga':
        case 'nobunaga oda':
        case 'oda nobunaga':
          message.channel.send("", {file: "https://i.imgur.com/5w2Wun8.png"});
        case 'samhain':
        case 'sam':
          message.channel.send("", {file: "https://i.imgur.com/0FgnlL9.png"});
        case 'xmas lupin':
        case 'christmas lupin':
          message.channel.send("", {file: "https://i.imgur.com/tpX4Qmf.png"});
        case 'gilgamesh':
        case 'gilg':
          message.channel.send("", {file: "https://i.imgur.com/lqr9U02.png"});
        case 'luka miku':
        case 'luka and miku':
          message.channel.send("", {file: "https://i.imgur.com/kKu2B1Y.png"});
        case 'holmes':
          message.channel.send("", {file: "https://i.imgur.com/PANrjNO.jpg"});

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
