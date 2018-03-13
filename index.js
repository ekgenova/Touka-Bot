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

  var args = message.content.toLowerCase().split(/ +/g);
  var command = args.shift().toLowerCase();
  var argsFinal = args.join(" ");


//Separating the command and the arguments
//For example, >unit touka separates to command = >unit and args = touka
//Multiple arguments separate into an array


  if (message.author.equals(bot.user)) return;

  if (command == ">welcome"){
    console.log(`Message sent by ${message.author.username}. Message: ${message.content}`);

    message.channel.send("Welcome to Crash Fever 101. <:touka:419557503085445120> \n" +
    "I'm Touka <:touka:419557503085445120> and I am here to help you with anything Crash Fever related!\n" +
    "To make your stay on this Discord channel fun and great, please be nice and don't give " +
    "troll responses to serious questions.\n" + "**For a full list of rules and channel info visit the channel #rules** \n" +
    "*For a list of commands you can use with me type >commands*");
    }

  else if (command == ">commands"){
    console.log(`Message sent by ${message.author.username}. Message: ${message.content}`);

    message.channel.send("**Command list:** \n WIP");
    }


  if (command == ">unit"){
    console.log(`Message sent by ${message.author.username}. Message: ${message.content}`);

    switch (argsFinal) {
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

      case 'bohr':
          message.channel.send("**Quantum Progenitor Bohr**\n" +
          "__Cost__: 55, __Tribe__: Academic, Human\n" +
          "__Type__: Offense , __Color__: Red\n " +
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
        "__Type__: Stamina , __Color__: Red\n " +
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
        "__Type__: Technical , __Color__: Red\n " +
        "HP 6741 ATK 4538 REC 3488 \n" +
        "__Skill__: Convert green to red + for 2 turns, party easy CP spawn (immense) + Reduce green panel rate 1 turn (6 turns)\n" +
        "__CSkill__: Ultra damage to 1 enemy\n" +
        "__Ability 1__: protect break\n" +
        "__Ability 2__: junk break\n" +
        "__Apples__: red\n" +
        "__Rating__: SS\n" +
        "__Obtainable__: Fever Festival");

      case 'schro':
      case 'schrodinger':
        message.channel.send("**Crumbling Worlds Schrödinger **\n" +
        "__Cost__: 55 , __Tribe__: Animal\n" +
        "__Type__: Balanced , __Color__: Red\n " +
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
        "__Type__: Offense , __Color__: Red\n " +
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
        "__Type__: Balanced , __Color__: Red\n " +
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
        "__Type__: Balanced , __Color__: Red\n " +
        "HP 6790 ATK 4820 REC 3430 \n" +
        "__Skill__: Up to 1 panel to SCP(XL), up to 1 to bomb(L) + chance 5 colors of bombs(L) 1 turn + damage 40% lower 2 turns (8 turns)\n" +
        "__CSkill__: Massive damage to 1 enemy, ultra effect against deity\n" +
        "__Ability 1__: damage panel break\n" +
        "__Ability 2__: boost red panel rate when in front\n" +
        "__Apples__: red\n" +
        "__Rating__: S\n" +
        "__Obtainable__: Fever Festival");
        break;

      case 'lagrange':
        message.channel.send();

      case 'lagrange ua':
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
        "__Type__: Technical , __Color__: Red\n " +
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
        "__Type__: Balanced , __Color__: Red\n " +
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
        "__Type__: Stamina , __Color__: Red\n " +
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
        "__Type__: Balanced , __Color__: Red\n " +
        "HP 6930 ATK 4584 REC 3087 \n" +
        "__Skill__: 1 panel to red CBP, green to red bombs(L) + green, hearts may drop as front CP, red bombs 2 turns (7 turns)\n" +
        "__CSkill__: Ultra damage to 1 enemy + recover HP\n" +
        "__Ability 1__: damage panel break\n" +
        "__Ability 2__: enhance bomb blast when in front\n" +
        "__Ability 3__: high power boost to own attacks in New Zodiac Update and Ancient Divine Dance\n" +
        "__Ability 4__: break 40+ panels in 1 turn for massive easy CP spawn (20 bug)\n" +
        "__Apples__: red\n" +
        "__Rating__: S\n" +
        "__Obtainable__: New Year Dream 2018 Hatcher");
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
        message.channel.send("**Maiden Flight Totori **\n" +
        "__Cost__: 45 , __Tribe__: Anima, Deity\n" +
        "__Type__: Balanced , __Color__: Red\n " +
        "HP 6017 ATK 4017 REC 2017 \n" +
        "__Skill__: Convert blue to hearts + 3 turn animal and unidentified units 1 extra tap (7 turns)\n" +
        "__CSkill__: Massive damage to 1 enemy\n" +
        "__Ability 1__: protect break\n" +
        "__Ability 2__: when in front, connecting 17 or more panels in 1 tap boost REC by 2017 (once per turn)(60 bug)\n" +
        "__Apples__: blue \n" +
        "__Rating__: D\n" +
        "__Obtainable__: New Year Special Quest 2017");
        break;


      //VALENTINES EVENT
      //
      //

      case 'valentines maxwell':
      case 'val maxwell':
      case 'maxwell':
        message.channel.send("**Colorful Affection Maxwell **\n" +
        "__Cost__: 55 , __Tribe__: Academic, Demon\n" +
        "__Type__: Technical , __Color__: Red\n " +
        "HP 7182 ATK 4511 REC 3149 \n" +
        "__Skill__: Non-red panels to 1 red CBP + hearts, blue, junk to red + chance red bombs(L) drop 1 turn (6 turns)\n" +
        "__CSkill__: Ultra damage to 1 enemy + red units gain 70 REC 2 turns\n" +
        "__Ability 1__: virus ineffective\n" +
        "__Ability 2__: 6,000 HP barrier at battle start\n" +
        "__Ability 3__: High boost to own attacks in Valentines 2018 Quests.\n" +
        "__Ability 4__: chance hearts drop as CP(L) when a demon is in front (20 bug)\n" +
        "__Apples__: red\n" +
        "__Rating__: S\n" +
        "__Obtainable__: Valentines 2018 Hatcher");
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

      case 'valentines lakshmi':
      case 'val lakshmi':
        message.channel.send("**Sweet Love God Lakshmi **\n" +
        "__Cost__: 50 , __Tribe__: Deity\n" +
        "__Type__: Technical , __Color__: Red\n " +
        "HP 5616 ATK 4382 REC 3509 \n" +
        "__Skill__: Yellow, damage, timer panels to CP + ultra ATK boost to all units 2 turns (7 turns)\n" +
        "__CSkill__: Massive damage to 1 enemy. Ultra effect on Deity units.\n" +
        "__Ability 1__: Virus ineffective\n" +
        "__Ability 2__: Low chance CP drop when a Technical type unit in front\n" +
        "__Ability 3__: Boost to own attacks in Valentines 2018 Quests\n" +
        "__Ability 4__: Boost C Skill damage for Technical types (20 bug)\n" +
        "__Apples__: red\n" +
        "__Rating__: ???\n" +
        "__Obtainable__: Valentines 2018 Hatcher side A");
        break;

      case 'valentines degas':
      case 'val degas':
        message.channel.send("**Sweet Exhibition Degas **\n" +
        "__Cost__: 50 , __Tribe__: Animal\n" +
        "__Type__: Recovery , __Color__: Red\n " +
        "HP 5252 ATK 3413 REC 4966 \n" +
        "__Skill__: Recover 4000 HP (each yellow, blue, junk absorbed adds 500 HP) + animal units gain 2140 ATK, 1 extra tap 2 turns (6 turns)\n" +
        "__CSkill__: Ultra damage to 1 enemy based on own REC\n" +
        "__Ability 1__: damage panel break\n" +
        "__Ability 2__: reduce 15% of damage taken from Animal enemies\n" +
        "__Ability 3__: boost boost to own attacks in Valentines 2018 Quests\n" +
        "__Ability 4__: -2 skill turns for animal units when a quest begins (20 bug)\n" +
        "__Apples__: blue\n" +
        "__Rating__: ???\n" +
        "__Obtainable__: Valentines 2018 Hatcher side A");
        break;

      case 'valentines fay':
      case 'val fay':
        message.channel.send("**Crimson Tide Fairy Fay **\n" +
        "__Cost__: 50 , __Tribe__: Unidentified, Fantasy\n" +
        "__Type__: Recovery , __Color__: Red\n " +
        "HP 5616 ATK 3165 REC 4794 \n" +
        "__Skill__: 8 panels to SCP + High boost to red panel rate 2 turns + lower blue panel rate 1 turn (6 turns)\n" +
        "__CSkill__: red units gain 50 REC 2 turns + recover high HP + boost fever gauge\n" +
        "__Ability 1__: damage panel break\n" +
        "__Ability 2__: when arriving at final floor, recover full HP at end of turn\n" +
        "__Ability 3__: boost to own attacks in Valentines 2018 Quests\n" +
        "__Ability 4__: easy CP spawn for Fantasy units (20 bug)\n" +
        "__Apples__: blue\n" +
        "__Rating__: A\n" +
        "__Obtainable__: Valentines 2018 Hatcher side A or B");
        break;

      case 'valentines luci':
      case 'valentines lucifugus':
      case 'val lucifugus':
      case 'val luci':
        message.channel.send("**Chain of Attraction Lucifugus **\n" +
        "__Cost__: 50 , __Tribe__: Demon, Fantasy\n" +
        "__Type__: Balanced , __Color__: Red\n " +
        "HP 6006 ATK 4416 REC 3185 \n" +
        "__Skill__: Green panels to red, damage panels to blue + disables protect + green panels drop as red 1 turn (6 turns)\n" +
        "__CSkill__: Massive damage to 1 enemy. Ultra effect on Green.\n" +
        "__Ability 1__: junk break\n" +
        "__Ability 2__: gain 400 ATK and REC when a technical type is in the party\n" +
        "__Ability 3__: boost to own attacks in Valentines 2018 Quests\n" +
        "__Ability 4__: during fever, demon units get high ATK and REC boost (20 bug)\n" +
        "__Apples__: red\n" +
        "__Rating__: A+\n" +
        "__Obtainable__: Valentines 2018 Hatcher side A or B");
        break;

      case 'sucre':
        message.channel.send("**Sweet Witch Seduction Sucre **\n" +
        "__Cost__: 45 , __Tribe__: Human, Fantasy\n" +
        "__Type__: Balanced , __Color__: Green\n " +
        "HP ? ATK ? REC ? \n" +
        "__Skill__: 1 SCP(XL). 1 turn fantasy units get 1000 ATK, 1 massive SCP(XL) of current unit can drop (7 turns)\n" +
        "__CSkill__: Massive damage to 1 unit\n" +
        "__Ability 1__: junk break\n" +
        "__Ability 2__: fantasy units get cp shortening (-1) (? bug)\n" +
        "__Ability 3__: fantasy units get 214 ATK and REC (? bug)\n" +
        "__Ability 4__: at the start of the quest, speed up skills of fantasy by 2 (? bug)\n" +
        "__Apples__: ???\n" +
        "__Rating__: ???\n" +
        "__Obtainable__: Mystery Girl Trap Quest (Valentines 2018)");
        break;

      case 'gateau':
        message.channel.send("**Gateau **\n" +
        "__Cost__: ?? , __Tribe__: Fantasy\n" +
        "__Type__: Offense , __Color__: Yellow\n " +
        "HP ? ATK ? REC ? \n" +
        "__Skill__: 4 random SCP(XL). 2 turn yellow units have yellow strengthened (10 turns)\n" +
        "__CSkill__: 4 hits to a unit\n" +
        "__Ability 1__: junk break\n" +
        "__Ability 2__: when she takes damage from an enemy speed up her skill by 1 turn (? bug)\n" +
        "__Ability 3__: at the beginning of each floor speed up her skill by 1 turn (? bug)\n" +
        "__Ability 4__: large boost to her c skill damage (? bug)\n" +
        "__Apples__: red\n" +
        "__Rating__: ???\n" +
        "__Obtainable__: Skillfull Sweets Manager Quest (Valentines 2018)");
        break;

      case 'valentines ame':
      case 'val ame':
      case 'valentines ame no murakumo':
      case 'val ame no murakumo':
        message.channel.send("**Ame no Murakumo (Valentine ver.) **\n" +
        "__Cost__: 55 , __Tribe__: Weapon\n" +
        "__Type__: Balanced , __Color__: Green\n " +
        "HP ? ATK ? REC ? \n" +
        "__Skill__: blue to green + 2 turns chance for any units cp(L) to drop (8 turns)\n" +
        "__CSkill__: ultra damage to 1 unit\n" +
        "__Ability 1__: protect break\n" +
        "__Ability 2__: weapons and hero's get 500 ATK and REC\n" +
        "__Ability 3__: if in 1 tap break 15+ chain, boost all unit cp damage\n" +
        "__Ability 4__: at the start of the quest speed up weapon and hero skills by 2 turns\n" +
        "__Apples__: ?\n" +
        "__Rating__: ?\n" +
        "__Obtainable__: Valentines 2018 Ranking exchange");
        break;

      case 'valentines gungnir':
      case 'valentines gung':
      case 'val gung':
      case 'val gungnir':
        message.channel.send("**Gungnir (Valentine ver.) **\n" +
        "__Cost__: 55 , __Tribe__: Weapon\n" +
        "__Type__: Offense , __Color__: Blue\n " +
        "HP ? ATK ? REC ? \n" +
        "__Skill__: Green to CP + 3 turns boost own ATK (absorb hearts for mass. boost) + 1 turn, no hearts (5 turns)\n" +
        "__CSkill__: Ultra damage to 1 enemy\n" +
        "__Ability 1__: junk break\n" +
        "__Ability 2__: weapons and deity get CP shortening (-2)\n" +
        "__Ability 3__: stamina or recovery unit on team, boost own ATK by 1500\n" +
        "__Ability 4__: on her turn, green and yellow have a chance to drop as large blue bombs\n" +
        "__Apples__: red\n" +
        "__Rating__: ???\n" +
        "__Obtainable__: Valentines 2018 Ranking exchange");
        break;

      case 'valentines gamba':
      case 'valentines gambanteinn':
      case 'val gamba':
      case 'val gambanteinn':
        message.channel.send("**Gambanteinn (Valentines ver.) **\n" +
        "__Cost__: 55 , __Tribe__: Weapon\n" +
        "__Type__: Technical , __Color__: Yellow\n " +
        "HP ? ATK ? REC ? \n" +
        "__Skill__: hearts to CP + 2 turns yellow units get extra tap, yellow and blues have a chance to drop as yellow bombs (7 turns)\n" +
        "__CSkill__: 4 hit large damage regardless of DEF\n" +
        "__Ability 1__: damage panel break\n" +
        "__Ability 2__: virus ineffective\n" +
        "__Ability 3__: technical units turn, low chance of cp drop\n" +
        "__Ability 4__: technical units turn, chance yellow bombs drop\n" +
        "__Apples__: red\n" +
        "__Rating__: ???\n" +
        "__Obtainable__: Valentines 2018 Ranking exchange");
        break;

      case 'valentines laev':
      case 'val laev':
      case 'valentines laevateinn':
      case 'val laevateinn':
        message.channel.send("**Lævateinn (Valentines ver.)**\n" +
        "__Cost__: 55 , __Tribe__: Weapon, Demon\n" +
        "__Type__: Stamina , __Color__: Red\n " +
        "HP ? ATK ? REC? \n" +
        "__Skill__: 1 random panel to SCP(XL) + red and junk to cp + 1 turn, yellow and green rate decreased (? turns)\n" +
        "__CSkill__: ultra damage to 1 enemy + 1 turn, demon units get 150 DEF\n" +
        "__Ability 1__: protect break\n" +
        "__Ability 2__: at start of quests, demon and weapons speed up skills by 1\n" +
        "__Ability 3__: demon units turn, low chance of cp drop\n" +
        "__Ability 4__: weapon and demon units get 990 ATK\n" +
        "__Apples__: ???\n" +
        "__Rating__: ???\n" +
        "__Obtainable__: Valentines 2018 Ranking exchange");
        break;

      case 'lamoure':
      case 'l\'amoure':
        message.channel.send("**L'amoure **\n" +
        "__Cost__: 55 , __Tribe__: Fantasy\n" +
        "__Type__: Technical , __Color__: Red\n " +
        "HP ? ATK ? REC ? \n" +
        "__Skill__: 2 turns, all units get red strengthened panels + 1 turn, no hearts (5 turns)\n" +
        "__CSkill__: two massive damage fixed hits regardless of DEF\n" +
        "__Ability 1__: on her turn, chance for red bomb drop\n" +
        "__Ability 2__: at the beginning of each floor, increase her attack by 5000\n" +
        "__Ability 3__: ultimate damage for Halley challenge\n" +
        "__Ability 4__: at the beginning of each floor add 2 taps to her\n" +
        "__Apples__: red\n" +
        "__Rating__: ???\n" +
        "__Obtainable__: Valentines 2018 Ranking Hatcher");
        break;

      case 'valentines para':
      case 'valentines paracelsus':
      case 'val para':
      case 'val paracelsus':
        message.channel.send("Crimson Treasure Paracelsus**\n" +
        "__Cost__: 55 , __Tribe__: Academic, Animal\n" +
        "__Type__: Technical , __Color__: Green\n " +
        "HP 6747 ATK 4260 REC 3623 \n" +
        "__Skill__: yellow, damage, timers to green panels + low chance up to 4 SCP(XL) for self drop 1 turn (6 turns)\n" +
        "__CSkill__: 3 massive fixed damage hits regardless of DEF\n" +
        "__Ability 1__: junk break\n" +
        "__Ability 2__: on her turn, ultra cp shortening (-6)\n" +
        "__Ability 3__: high damage boost 2018 Valentines quest\n" +
        "__Ability 4__: animal units turn, chance for greens to drop as cp (20 bug)\n" +
        "__Apples__: red\n" +
        "__Rating__: A+\n" +
        "__Obtainable__: Valentines 2017 Hatcher Side B");
        break;

      case 'valentines sleeping beauty':
      case 'val sleeping beauty':
      case 'valentines briar rose':
      case 'val briar rose':
        message.channel.send("**Forbidden Thorn Sleeping Beauty**\n" +
        "__Cost__: 50 , __Tribe__: Fantasy\n" +
        "__Type__: Offense , __Color__: Green\n " +
        "HP 6299 ATK 5693 REC 1524 \n" +
        "__Skill__: red, yellow and blue panels each become up to 4 CP + 1 turn green units get ultra CP spawn (-6) and 2 taps (7 turns)\n" +
        "__CSkill__: massive damage to 1 unit. ultra vs balanced types\n" +
        "__Ability 1__: junk break\n" +
        "__Ability 2__: on her turn, green rate up\n" +
        "__Ability 3__: damage boost 2018 Valentines quest\n" +
        "__Ability 4__: fantasy units get 600 ATL (20 bug)\n" +
        "__Apples__: red\n" +
        "__Rating__: ??\n" +
        "__Obtainable__: Valentines 2018 Hatcher Side B");
        break;

      case 'valentines d\'artagnan':
      case 'valentines dartagan':
      case 'valentines dart':
      case 'val dart':
      case 'val dartagnan':
      case 'val d\'artagnan':
        message.channel.send("**True Love Musketeer D\'artagnan **\n" +
        "__Cost__: 50 , __Tribe__: Hero\n" +
        "__Type__: Recovery , __Color__: Green\n " +
        "HP 5834 ATK 2683 REC 5077 \n" +
        "__Skill__: 2 turns, all units REC boost (absorb red, hearts for mass. boost), 1 tap, a total of 14 SCP will drop from any unit (7 turns)\n" +
        "__CSkill__: ultra damage to 1 unit based on REC + 2 turns, boost own REC by 100\n" +
        "__Ability 1__: junk break\n" +
        "__Ability 2__: bomb blast enhance\n" +
        "__Ability 3__: damage boost Valentines 2018\n" +
        "__Ability 4__: start of quest, speed up hero unit skills by 2 (20 bug)\n" +
        "__Apples__: blue\n" +
        "__Rating__: ???\n" +
        "__Obtainable__: Valentines 2018 Hatcher Side B");
        break;

      case 'val sei':
      case 'valentines sei':
      case 'val sei shonagon':
      case 'valentines sei shonagon':
        message.channel.send("**Heartfelt Words Sei Shōnagon **\n" +
        "__Cost__: 50 , __Tribe__: Human\n" +
        "__Type__: Balanced , __Color__: Green\n " +
        "HP 6855 ATK 3632 REC 3512 \n" +
        "__Skill__: Recover 10,000 HP + yellow, blue, to green + lower yellow, blue panel rate 2  turns (7 turns)\n" +
        "__CSkill__: Massive damage to 1 enemy based on own REC + massive damage to 1 enemy\n" +
        "__Ability 1__: junk break\n" +
        "__Ability 2__: human units gain 350 ATK and REC\n" +
        "__Ability 3__: damage boost Valentines 2018\n" +
        "__Ability 4__: at start of quest, reduce own skill turn by 3 (20 bug)\n" +
        "__Apples__: blue\n" +
        "__Rating__: ???\n" +
        "__Obtainable__: Valentines 2018 Hatcher Side B");
        break;

      //CHRISTMAS EVENT
      //
      //

      case 'christmas lupin':
      case 'xmas lupin':
      case 'lupin':
        message.channel.send("**Dashing Night Thief Lupin **\n" +
        "__Cost__: 50 , __Tribe__: Human, Fantasy\n" +
        "__Type__: Recovery , __Color__: Red\n " +
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
        "__Type__: Stamina , __Color__: Red\n " +
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
        message.channel.send("**Brazen Beautiful Star Adonis **\n" +
        "__Cost__: 45 , __Tribe__: Guardian, Demon\n" +
        "__Type__: Technical , __Color__: Red\n " +
        "HP 6156 ATK 4428 REC 2646 \n" +
        "__Skill__: Boost Demon, Guardian ATK by 800, DEF/REC by 600 for 6 turns (6 turns)\n" +
        "__CSkill__: Massive damage to 1 enemy\n" +
        "__Ability 1__: virus ineffective\n" +
        "__Ability 2__: at start of quest, reduce own skill turns by 3 (20 bug)\n" +
        "__Ability 3__: boost demon and guardian cp spawn (40 bug)\n" +
        "__Ability 4__: bomb blast radius low boost when demon or guardian in front(60 bug)\n" +
        "__Apples__: red\n" +
        "__Rating__: ???\n" +
        "__Obtainable__: Raid ");
        break;


      //VOCALOID HATSUNE MIKU
      //COLLABORATION
      //

      case 'black miku':
      case 'hatsune miku':
      case 'black hatsune miku':
      case 'shadow songstress miku':
        message.channel.send("**Shadow Songstress Hatsune Miku **\n" +
        "__Cost__: 55 , __Tribe__: Unidentified\n" +
        "__Type__: Offense , __Color__: Red\n " +
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
        "__Type__: Balanced , __Color__: Red\n " +
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
        "__Type__: Balanced , __Color__: Red\n " +
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
        "__Type__: Balanced , __Color__: Red\n " +
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
        "__Type__: Offense , __Color__: Red\n " +
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
        message.channel.send("**Sovereign Rook Arthur (UA) **\n" +
        "__Cost__: 45 , __Tribe__: Human, Hero\n" +
        "__Type__: Balanced , __Color__: Red\n " +
        "HP 5978 ATK 4435 REC 3083 \n" +
        "__Skill__: Up to 12 green panels to CP(L) + boost red ATK 3 turns (absorb yellow, blue for boost (8 turns))\n" +
        "__CSkill__: damage to 1 enemy (high effect against Dragons) + recover HP\n" +
        "__Ability 1__: protect break\n" +
        "__Ability 2__: add 700 ATK to Hero units (30 bugs)\n" +
        "__Apples__: red\n" +
        "__Rating__: C\n" +
        "__Obtainable__: Wizard Quest");

      case 'arthur':
        message.channel.send("**Vile Bishop Arthur **\n" +
        "__Cost__: 45 , __Tribe__: Human\n" +
        "__Type__: Balanced , __Color__: Red\n " +
        "HP 6091 ATK 3744 REC 2951 \n" +
        "__Skill__: Convert green to red + destroy blue except CP to damage enemies + easy CP spawn (massive) 1 turn (10 turns)\n" +
        "__CSkill__: High damage to 1 enemy. Ultra effect on Humans\n" +
        "__Apples__: red\n" +
        "__Rating__: E\n" +
        "__Obtainable__: Wizard Quest");
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
        message.channel.send("**Son Goku UA (not on Global) **\n" +
        "__Cost__: 45 , __Tribe__: Unidentified, Hero\n" +
        "__Type__: Offense , __Color__: \n " +
        "HP 5970 ATK 5812 REC 1696 \n" +
        "__Skill__: Convert 1 panel to SCP(L) + 3 turns, ultra ATK boost (absorb timers, blue for boost) (7 turns)\n" +
        "__CSkill__: massive damage to 1 enemy + massive damage to all enemies\n" +
        "__Ability 1__: damage panel break\n" +
        "__Ability 2__: timer panel break (bug 30)\n" +
        "__Apples__: red\n" +
        "__Rating__: C\n" +
        "__Obtainable__: Wizard Quest");

      case 'son goku':
      case 'son':
      case 'goku':
        message.channel.send("**Songoku, Majesty of Mt. Huaguo **\n" +
        "__Cost__: 45 , __Tribe__: Animal\n" +
        "__Type__: Offense , __Color__: Red\n " +
        "HP 5400 ATK 5802 REC 2064 \n" +
        "__Skill__: Convert 2 random panels to SCP + for 3 turns, boost own ATK (absorb hearts for boost) (7 turns)\n" +
        "__CSkill__: High damage to 1 enemy + medium damage to all enemies\n" +
        "__Ability 1__: damage panel break (30 bug)\n" +
        "__Apples__: red\n" +
        "__Rating__: D\n" +
        "__Obtainable__: Wizard Quest");
        break;

      case 'colossus':
      case 'colos':
        message.channel.send();
        break;

      case 'louis':
      case 'louis 15':
      case 'louis xvi':
        message.channel.send("**Tempering King Louis XVI **\n" +
        "__Cost__: 45 , __Tribe__: Human\n" +
        "__Type__: Balanced , __Color__: Red\n " +
        "HP 6122 ATK 4013 REC 3083 \n" +
        "__Skill__: Convert junk panels to red bombs + convert up to 2 random panels to SCP (7 turns)\n" +
        "__CSkill__: Ultra damage to 1 enemy + low boost red unit REC for 2 turns\n" +
        "__Apples__: red\n" +
        "__Rating__: D\n" +
        "__Obtainable__: Wizard Quest");
        break;

      case 'shingen':
      case 'takeda':
      case 'shingen takeda':
        message.channel.send("**Shingen Takeda, Calm Daredevil **\n" +
        "__Cost__: 45 , __Tribe__: Human, Samurai\n" +
        "__Type__: Offense , __Color__: Red\n " +
        "HP 6334 ATK 5028 REC 1876 \n" +
        "__Skill__: Massive damage to 1 enemy (ultra effect against counters) + ultra counter for 3 turns (12 turns)\n" +
        "__CSkill__: Massive damage to 1 enemy\n" +
        "__Apples__: red\n" +
        "__Rating__: D\n" +
        "__Obtainable__: Wizard Quest");
        break;

      case 'uranus':
        message.channel.send("**Planetary Shaper Uranus **\n" +
        "__Cost__: 45 , __Tribe__: Deity, Unidentified\n" +
        "__Type__: Technical , __Color__: Red\n " +
        "HP 5184 ATK 3877 REC 2834 \n" +
        "__Skill__: High enhancement to existing CP + massive boost to red unit ATK, REC for 2 turns (8 turns)\n" +
        "__CSkill__: Massive damage to 1 enemy. Ultra effect against Green\n" +
        "__Ability 1__: when in front, chain 12 panels in 1 tap for own ATK boost (once per turn) (30 bug)\n" +
        "__Apples__: red\n" +
        "__Rating__: D\n" +
        "__Obtainable__: Wizard Quest");
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
        "__Type__: Offense , __Color__: Red\n " +
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
        message.channel.send("**Roaring Flamer Belial (UA) **\n" +
        "__Cost__: 45 , __Tribe__: Demon\n" +
        "__Type__: Offense , __Color__: Red\n " +
        "HP 6930 ATK 5333 REC 2029 \n" +
        "__Skill__: Ultra red damage to 1 enemy + boost to ATK for 3 turns (absorb green for boost) (8 turns)\n" +
        "__CSkill__: Massive damage to 1 enemy\n" +
        "__Ability 1__: boost own ATK when fever gauge is at 50% or more\n" +
        "__Ability 2__: junk break\n" +
        "__Apples__: red\n" +
        "__Rating__: D\n" +
        "__Obtainable__: Permanent (any hatcher)");

      case 'belial':
        message.channel.send("**Breakneck Daredevil Belial **\n" +
        "__Cost__: 45 , __Tribe__: Deity\n" +
        "__Type__: Offense , __Color__: Red\n " +
        "HP 6221 ATK 5131 REC 1885 \n" +
        "__Skill__: Deal massive red damage to 1 enemy + boost ATK for 3 turns (absorb green panels for boost) (10 turns)\n" +
        "__CSkill__: massive damage to all enemies\n" +
        "__Apples__: red\n" +
        "__Rating__: E\n" +
        "__Obtainable__: Permanent (any hatcher)");
        break;

      case 'hazuru':
        message.channel.send("**Graceful Crane Hazuru **\n" +
        "__Cost__: 50 , __Tribe__: Animal\n" +
        "__Type__: Balanced , __Color__: Red\n " +
        "HP 6650 ATK 4376 REC 3153 \n" +
        "__Skill__: Massive boost to red unit ATK/REC and easy CP spawn (super) for 3 turns (7 turns)\n" +
        "__CSkill__: Massive damage to 1 enemy. Ultra effect against Humans\n" +
        "__Ability 1__: Recover 20% of total party HP at end of first turn on all floors\n" +
        "__Apples__: red\n" +
        "__Rating__: D\n" +
        "__Obtainable__: Permanent (any hatcher)");
        break;

      case 'kurumi':
        message.channel.send("**Kurumi, the Raving Cat **\n" +
        "__Cost__: 50 , __Tribe__: Unidentified, Animal\n" +
        "__Type__: Offense , __Color__: Red\n " +
        "HP 6448 ATK 5185 REC 2027 \n" +
        "__Skill__: Disable counters + high damage to 1 enemy (mass effect if no counters) + 4 panels to bombs (L) + ATK mass. boost 3 turns (7 turns)\n" +
        "__CSkill__: Massive damage to 1 enemy\n" +
        "__Ability 1__: blast reduction ineffective\n" +
        "__Apples__: red\n" +
        "__Rating__: D\n" +
        "__Obtainable__: Permanent (any hatcher)");
        break;

      case 'prometheus':
      case 'prom':
        message.channel.send("**Furious Flame Prometheus **\n" +
        "__Cost__: 45 , __Tribe__: Deity\n" +
        "__Type__: Stamina , __Color__: Red\n " +
        "HP 9722 ATK 4221 REC 1826 \n" +
        "__Skill__: Remove counters + massive damage to 1 enemy (ultra effect if no counters) + 3 turns reduce enemy DEF to 0 (6 turns)\n" +
        "__CSkill__: High damage to 1 enemy + high effect against green\n" +
        "__Ability 1__: junk break\n" +
        "__Apples__: red or can green\n" +
        "__Rating__: D\n" +
        "__Obtainable__: Permanent (any hatcher)");
        break;

      case 'ymir':
        message.channel.send("**Burning Assault God Ymir **\n" +
        "__Cost__: 50 , __Tribe__: Mech\n" +
        "__Type__: Stamina , __Color__: Red\n " +
        "HP 8784 ATK 3902 REC 2100 \n" +
        "__Skill__: Restore 7,500 HP + hearts to red bombs + reduce preceeding unit skill by 1 + massive counter 2 turns (7 turns)\n" +
        "__CSkill__: massive damage to 1 enemy\n" +
        "__Ability 1__: damage panel break\n" +
        "__Apples__: red\n" +
        "__Rating__: D\n" +
        "__Obtainable__: Permanent (any hatcher)");
        break;

      case 'fenrir':
        message.channel.send("**Divine Immolation Fenrir **\n" +
        "__Cost__: 45 , __Tribe__: Animal, Fantasy\n" +
        "__Type__: Offense , __Color__: Red\n " +
        "HP 5880 ATK 5110 REC 2520 \n" +
        "__Skill__: Convert yellow to red + for red units, add tap, ATK ultra boost, REC high boost 3 turns (8 turns)\n" +
        "__CSkill__: high damage to 1 enemy (massive against Animals)\n" +
        "__Ability 1__: junk break\n" +
        "__Apples__: red\n" +
        "__Rating__: D\n" +
        "__Obtainable__: Permanent (any hatcher)");
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
        message.channel.send("**KOF '95 Old-School Kyo' **\n" +
        "__Cost__: 45 , __Tribe__: Human, Unidentified\n" +
        "__Type__: Stamina , __Color__: Red\n " +
        "HP 9595 ATK 2995 REC 1995 \n" +
        "__Skill__: Convert non-red panels to up to 9 Crash Panels (L) and up to 5 red bombs (L) (9 turns)\n" +
        "__CSkill__: Massive damage to 1 enemy based on own max HP\n" +
        "__Ability 1__: damage panel break\n" +
        "__Apples__: green\n" +
        "__Rating__: D\n" +
        "__Obtainable__: King of Fighters Collaboration Quest");
        break;

      case 'mai':
      case 'mai shiranui':
        message.channel.send("**Beautiful Ninja Mai **\n" +
        "__Cost__: 55 , __Tribe__: Human\n" +
        "__Type__: Recovery , __Color__: Red\n " +
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
        message.channel.send("**Orochi Chris (UA) **\n" +
        "__Cost__: 45 , __Tribe__: Orochi\n" +
        "__Type__: Offense , __Color__: Red\n " +
        "HP 5810 ATK 5519 REC 1900 \n" +
        "__Skill__: Bombs to CP + absorb green, blue, damage panels for 99,999 damage to 1 enemy + party extra tap 2 turns (7 turns)\n" +
        "__CSkill__: Ultra damage to 1 enemy\n" +
        "__Ability 1__: damage panel break\n" +
        "__Ability 2__: when in front, low chance blue panels drop as red bombs (50 bug)\n" +
        "__Apples__: red\n" +
        "__Rating__: B\n" +
        "__Obtainable__: King of Fighters Collaboration Quest");

      case 'chris':
        message.channel.send("**Innocent Kaleidoscope Chris **\n" +
        "__Cost__: 45 , __Tribe__: Orochi\n" +
        "__Type__: Technical , __Color__: Red\n " +
        "HP 5810 ATK 3999 REC 3519 \n" +
        "__Skill__: Convert up to 14 panels to red bombs + lower yellow, blue, heart rate 1 turn (6 turns)\n" +
        "__CSkill__: Massive damage to 1 enemy + ultra damage to all enemies\n" +
        "__Ability 1__: damage panel break\n" +
        "__Ability 2__: when any unit breaks over 12 bombs in 1 turn, recover 1200 HP at end of turn (50 bug)\n" +
        "__Apples__: blue or red\n" +
        "__Rating__: D\n" +
        "__Obtainable__: King of Fighters Collaboration Quest");
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
        "__Type__: Offense , __Color__: Red\n " +
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
        message.channel.send("**Evil Executor Hellraiser **\n" +
        "__Cost__: 45 , __Tribe__: Mech, Demon\n" +
        "__Type__: Technical , __Color__: Red\n " +
        "HP 5135 ATK 3981 REC 2917 \n" +
        "__Skill__: Up to 10 non-red panels to bombs + red easy CP spawn (high), technical type protect break and easy CP spawn (ultra) 1 turn\n" +
        "__CSkill__: Massive damage to 1 enemy + Boost Red unit REC 1 turn\n" +
        "__Ability 1__: On final floor, at the end of each turn restore 5% of total HP to party\n" +
        "__Ability 2__: Boost Technical type ATK by 700\n" +
        "__Apples__: red\n" +
        "__Rating__: D\n" +
        "__Obtainable__: 8 Million Downloads Event Quest");
        break;


      //LINK UNITS
      //
      //

      case 'suzaku':
        message.channel.send("**Red Guardian Suzaku **\n" +
        "__Cost__: 35 , __Tribe__: Animal, Deity\n" +
        "__Type__: Recovery , __Color__: Red\n " +
        "HP 5448 ATK 2851 REC 3729 \n" +
        "__Skill__: Convert 1 panel to SCP(L) + blue to hearts + green to yellow + reduce enemy DEF to 0 for 2 turns (8 turns)\n" +
        "__CSkill__: Massive damage to 1 enemy based on own REC + HP recovery\n" +
        "__Ability 1__: damage panel break\n" +
        "__Ability 2__: weaken attacks from green enemies by 8% (30 bug)\n" +
        "__Apples__: blue\n" +
        "__Rating__: D\n" +
        "__Obtainable__: Link hatcher");
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
    switch (argsFinal){
      case 'morse':
        message.channel.send("", {file: "https://i.imgur.com/w19w1tQ.jpg" });
        break;
      case 'bohr':
        message.channel.send("", {file: "https://i.imgur.com/pHnovEl.png"});
        break;
      case 'cai':
      case 'caishen':
        message.channel.send("", {file: "https://i.imgur.com/lzlUHF1.jpg"});
        break;
      case 'fahren':
      case 'fahrenheit':
        message.channel.send("", {file: "https://i.imgur.com/kbAXeEU.png"});
        break;
      case 'schro ua':
      case 'schrodinger ua':
        message.channel.send("", {file: "https://i.imgur.com/mdqG5fr.png"});
        break;
      case 'schro':
      case 'schrodinger':
        message.channel.send("", {file: "https://i.imgur.com/z20QTGf.jpg"});
        break;
      case 'volta':
        message.channel.send("", {file: "https://i.imgur.com/fhgPdRZ.jpg"});
        break;
      case 'ny galois':
      case 'new year galois':
        message.channel.send("", {file: "https://i.imgur.com/DGhruuE.jpg"});
        break;
      case 'mai':
      case 'mai shiranui':
        message.channel.send("", {file: "https://i.imgur.com/Amn84cO.jpg"});
        break;
      case 'froid ua':
      case 'freud ua':
        message.channel.send("", {file: "https://i.imgur.com/2L0pwmD.png"});
        break;
      case 'perchta':
        message.channel.send("", {file: "https://i.imgur.com/RtQaJG4.jpg"});
        break;
      case 'shadow songstress miku':
      case 'miku black':
        message.channel.send("", {file: "https://i.imgur.com/f1iFRaB.jpg"});
        break;
      case 'cauchy':
        message.channel.send("", {file: "https://i.imgur.com/25jL9zq.png"});
        break;
      case 'froid':
      case 'freud':
        message.channel.send("", {file: "https://i.imgur.com/esjj9dM.png"});
        break;
      case 'ny euclid':
      case 'new year euclid':
        message.channel.send("", {file: "https://i.imgur.com/q1RfyOv.png"});
        break;
      case 'oda ua':
      case 'nobunaga ua':
      case 'nobunaga oda ua':
      case 'oda nobunaga ua':
        message.channel.send("", {file: "https://i.imgur.com/g6ffmSg.jpg"});
        break;
      case 'oda':
      case 'nobunaga':
      case 'nobunaga oda':
      case 'oda nobunaga':
        message.channel.send("", {file: "https://i.imgur.com/5w2Wun8.png"});
        break;
      case 'samhain':
      case 'sam':
        message.channel.send("", {file: "https://i.imgur.com/0FgnlL9.png"});
        break;
      case 'xmas lupin':
      case 'christmas lupin':
        message.channel.send("", {file: "https://i.imgur.com/tpX4Qmf.png"});
        break;
      case 'gilgamesh':
      case 'gilg':
        message.channel.send("", {file: "https://i.imgur.com/lqr9U02.png"});
        break;
      case 'luka miku':
      case 'luka and miku':
        message.channel.send("", {file: "https://i.imgur.com/kKu2B1Y.png"});
        break;
      case 'holmes':
        message.channel.send("", {file: "https://i.imgur.com/PANrjNO.jpg"});
        break;
      case 'valentines maxwell':
      case 'val maxwell':
        message.channel.send("", {file: "https://i.imgur.com/J0XocnB.png"});
        break;
      case 'valentines lakshmi':
      case 'val lakshmi':
        message.channel.send("", {file: "https://i.imgur.com/UjMzVe8.png"});
        break;
      case 'valentines degas':
      case 'val degas':
        message.channel.send("", {file: "https://i.imgur.com/1rFcAn9.png"});
        break;
      case 'valentines fay':
      case 'val fay':
        message.channel.send("", {file: "https://i.imgur.com/VnZAc84.png"});
        break;
      case 'valentines lucifugus':
      case 'valentines luci':
      case 'val lucifugus':
      case 'val luci':
        message.channel.send("", {file: "https://i.imgur.com/Vi8qKuP.png"});
        break;
      case 'sucre':
        message.channel.send("", {file: "https://i.imgur.com/FHNCaDn.png"});
        break;
      case 'gateau':
        message.channel.send("", {file: "https://i.imgur.com/FAlI6oj.png"});
        break;
      case 'valentines ame':
      case 'val ame':
      case 'valentines ame no murakumo':
      case 'val ame no murakumo':
        message.channel.send("", {file: "https://i.imgur.com/TZZ4WFm.png"});
        break;
      case 'valentines gung':
      case 'val gung':
      case 'val gungnir':
      case 'valentines gungnir':
        message.channel.send("", {file: "https://i.imgur.com/MUOlaw7.png"});
        break;
      case 'valentines gamba':
      case 'val gamba':
      case 'valentines gambanteinn':
      case 'val gambanteinn':
        message.channel.send("", {file: "https://i.imgur.com/GXck2TT.png"});
        break;
      case 'valentines laev':
      case 'val laev':
      case 'valentines laevateinn':
      case 'val laevateinn':
        message.channel.send("", {file: "https://i.imgur.com/wZ0wacS.png"});
        break;
      case 'l\'amoure':
      case 'lamoure':
        message.channel.send("", {file: "https://i.imgur.com/IuXPaSA.png"});
        break;
      case 'valentines para':
      case 'valentines paracelsus':
      case 'val para':
      case 'val paracelsus':
        message.channel.send("", {file: "https://i.imgur.com/KcDaS5k.png"});
        break;
      case 'valentines sleeping beauty':
      case 'val sleeping beauty':
      case 'valentines briar rose':
      case 'val briar rose':
        message.channel.send("", {file: "https://i.imgur.com/VS7vTFC.png"});
        break;
      case 'valentines d\'artagnan':
      case 'val d\'artagnan':
      case 'valentines dartagnan':
      case 'val dartagnan':
      case 'valentines dart':
      case 'val dart':
        message.channel.send("", {file: "https://i.imgur.com/4gzQt6B.png"});
        break;
      case 'val sei':
      case 'valentines sei':
      case 'val sei shonagon':
      case 'valentines sei shonagon':
        message.channel.send("", {file: "https://i.imgur.com/Tsls0Z2.png"});
        break;
      case 'adonis':
        message.channel.send("", {file: "https://i.imgur.com/F7iafJU.jpg"});
        break;
      case 'belial ua':
        message.channel.send("", {file: "https://i.imgur.com/4xrJtFJ.jpg"});
        break;
      case 'belial':
        message.channel.send("", {file: "https://i.imgur.com/59lnz7I.jpg"});
        break;
      case 'arthur ua':
        message.channel.send("", {file: "https://i.imgur.com/rYdlZNv.jpg"});
        break;
      case 'arthur':
        message.channel.send("", {file: "https://i.imgur.com/GzX7EKQ.jpg"});
        break;
      case 'fenrir':
        message.channel.send("", {file: "https://i.imgur.com/WZAGMQX.jpg"});
        break;
      case 'ymir':
        message.channel.send("", {file: "https://i.imgur.com/ZanMDy0.jpg"});
        break;
      case 'uranus':
        message.channel.send("", {file: "https://i.imgur.com/FIUqkkh.jpg"});
        break;
      case 'totori':
        message.channel.send("", {file: "https://i.imgur.com/T3mMypp.jpg"});
        break;
      case 'suzaku':
        message.channel.send("", {file: "https://i.imgur.com/5kFQAVN.jpg"});
        break;
      case 'son goku ua':
      case 'songoku ua':
        message.channel.send("", {file: "https://i.imgur.com/fSuvs2F.png"});
        break;
      case 'son goku':
      case 'songoku':
        message.channel.send("", {file: "https://i.imgur.com/wKqYIhW.jpg"});
        break;
      case 'shingen takeda':
      case 'shingen':
        message.channel.send("", {file: "https://i.imgur.com/IR4xcPn.jpg"});
        break;
      case 'prometheus':
        message.channel.send("", {file: "https://i.imgur.com/P8UJ7Uh.jpg"});
        break;
      case 'louis':
      case 'louis 15':
      case 'louis xvi':
        message.channel.send("", {file: "https://i.imgur.com/uL6Psjg.jpg"});
        break;
      case 'kyo':
      case 'kyo 95':
        message.channel.send("", {file: "https://i.imgur.com/lQQdHac.jpg"});
        break;
      case 'kurumi':
        message.channel.send("", {file: "https://i.imgur.com/BJw3L1z.jpg"});
        break;
      case 'hellraiser':
        message.channel.send("", {file: "https://i.imgur.com/w5BLToh.jpg"});
        break;
      case 'hazuru':
        message.channel.send("", {file: "https://i.imgur.com/f7xcFdb.jpg"});
        break;
      case 'chris ua':
        message.channel.send("", {file: "https://i.imgur.com/mWvfGAz.jpg"});
        break;
      case 'chris':
        message.channel.send("", {file: "https://i.imgur.com/foioZRD.jpg"});
        break;

      }
    }
  });
