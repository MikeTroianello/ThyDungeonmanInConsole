'use strict';

//ns is north/south +1 is going north, -1 is going south
let ns;
let ew;

let score;
//d is DENNIS
let d;

//flask is the number of times you try to get ye flask, trinket is whether you have the trinket. trinketCount is the number of times you try to getTrinket()
let flask;
let trinket;
let trinketCount;

//scroll is boolean. If(false) lookScroll will be different, whereas you can't see it with (true). This will be the same for getScroll()
let scroll;
//game will determine if you can use the other functions
let game;

//firstTime will prevent the artwork from getting cleared
let firstTime;
//ascii artwork

const artwork = `    Thy Dungeonman \n\n/\\        /\\     /\\   \n| |/----\\| |    | | \n \\_------_/     | |    \n  / o  o \\      | |   \n  /  ||  \\   o__|_|__o \n  / ---- \\    \\_____/ \n  /\\/\\/\\/\\      | | \n                OOO \n`;

thyDungeonman();

function thyDungeonman() {
  console.clear();
  ns = 0;
  trinket = false;
  trinketCount = 0;
  score = 0;
  d = false;
  game = true;
  flask = 0;
  scroll = false;
  console.log(`%c${artwork}`, 'color: #00cc00; font-size: 20px');
  output(`\nYOU ARE THY DUNGEONMAN!`);
  mainDungeon();
}

//MOVEMENT COMMANDS

function north() {
  if (!game) return cheater();
  if (ns > 0 || d) return cannotstGo();
  if (ns < 0) output('You go north()');
  ns++;
  if (ns == 1) return northDungeon();
  else return mainDungeon();
}

function south() {
  if (!game) return cheater();
  if (ns < 0 || d) return cannotstGo();
  if (ns > 0) output('You go south() back through yon corridor.');
  ns--;
  if (ns < 0) return southDungeon();
  else return mainDungeon();
}

function dennis() {
  if (!game) return cheater();
  if (ns !== 0) return notComputeth();
  d = true;
  output(
    'Ye arrive at Dennis. He wears a sporty frock coat and a long jimberjam. He paces about nervously. Obvious exits are notDennis().'
  );
}

function notDennis() {
  if (!game) return cheater();
  if (!d) return notComputeth();
  d = false;
  output('You go NOT DENNIS');
  mainDungeon();
}

//MAIN DUNGEON ROOM COMMANDS

function mainDungeon() {
  if (!game) return cheater();
  output(
    'Ye find yeself in yon dungeon. Ye see a SCROLL. Behind ye scroll is a FLASK. Obvious exits are north(), south() and dennis().'
  );
}

function lookScroll() {
  if (!scroll) {
    output("Parchment, definitely parchment. I'd recognize it anywhere.");
  } else {
    output('Ye seeth nothing wheretofore it went ZAP.');
  }
}

function getScroll() {
  if (!scroll) {
    score += 2;
    output(
      'Ye takes the scroll and reads of it. It doth say: BEWARE, READER OF THE SCROLL, DANGER AWAITS TO THE- The SCROLL disappears in thy hands with ye olde ZAP!'
    );
  } else {
    score--;
    output('Ye doth suffer from memory loss. YE SCROLL is no more. Honestly.');
  }
}

function lookFlask() {
  output('Looks like you could quaff some serious mead out of that thing.');
}

function getFlask() {
  if (flask < 2) {
    flask++;
    score++;
    output(
      'Ye cannot get the FLASK. It is firmly bolted to a wall which is bolted to the rest of the dungeon which is probably bolted to a castle. Never you mind.'
    );
  } else {
    score -= 1000;
    output(
      `Okay, okay. You unbolt yon FLASK and hold it aloft. A great shaking begins. The dungeon ceiling collapses down on you, crushing you in twain. Apparently, this was a load-bearing FLASK. Your score was: ${score} Play again? [yes()/no()]`
    );
  }
}

//NORTH DUNGEON ROOM COMMANDS

function northDungeon() {
  output(
    'You go NORTH through yon corridor. You arrive at parapets. Ye see a ROPE. Obvious exits are south().'
  );
}

function lookParapets() {
  output("Well, they're parapets. This much we know for sure.");
}

function lookRope() {
  output("It looks okay. You've seen better.");
}

function getRope() {
  output(
    `You attempt to take ye ROPE but alas it is enchanted! It glows a mustard red and smells like a public privy. The ROPE wraps round your neck and hangs you from parapets. With your last breath, you wonder what parapets are. GAME OVER. Your score was: ${score}. Play again? [yes()/no()]`
  );
}

//SOUTH DUNGEON ROOM COMMANDS

function southDungeon() {
  output(
    "You head south to an enbankment. Or maybe a chasm. You can't decide which. Anyway, ye spies a TRINKET. Obvious exits are north()."
  );
}

function lookTrinket() {
  if (!trinket) {
    output('Quit looking! Just get it already.');
  } else {
    output('Just a bulge in thou pouchel at thist point.');
  }
}

function getTrinket() {
  trinketCount++;
  if (!trinket) {
    score += 2;
    output(
      'Ye getsts yon TRINKET and discover it to be a bauble. You rejoice at your good fortune. You shove the TRINKET in your pouchel. It kinda hurts.'
    );
  } else {
    score--;
    output('Sigh. The trinket is in thou pouchel. Recallest thou?');
  }
}

//DENNIS COMMANDS

function talk() {
  output(
    'You engage Dennis in leisurely discussion. Ye learns that his jimberjam was purchased on sale at a discount market and that he enjoys pacing about nervously. You become bored and begin thinking about parapets.'
  );
}

function lookDennis() {
  output('That jimberjam really makes the outfit.');
}
function lookJimberjam() {
  output('Man, that art a nice jimberjam.');
}
function giveTrinket() {
  if (!trinket) {
    output("Thou don'tst have a trinket to give. Go back to your tiny life.");
  } else {
    output(
      `A novel idea! You givst the TRINKET to Dennis and he happily agrees to tell you what parapets are. With this new knowledge, ye escapes from yon dungeon in order to search for new dungeons and to remain... THY DUNGEONMAN!! You hath won! Congraturation!! Your score was: ${score}`
    );
  }
}

//ERRORS

function notComputeth() {
  output('That does not computeth. Type help() if thou needs of it.');
}

function cannotstGo() {
  // if (!theCheat) return cheater();
  output('Thou cannotst go there. Who do you think thou art? A magistrate?!');
  // err = 0;
}

function theCheat() {
  output('Thou arst not a The Cheat, play fair!');
}

function cheater() {
  output('You have net yet started the game! first enter thyDungeonman()');
}

//RESTARTING

function yes() {
  return thyDungeonman();
}

function no() {
  output('Doest what thou wilt');
}

//JOKE COMMANDS
function smell() {
  if (!game) return cheater();
  output('You smell a Wumpus.');
}

function sniff() {
  smell();
}

function dance() {
  if (!game) return cheater();
  output('Thou shaketh it a little, and it feeleth all right.');
}

function die() {
  if (!game) return cheater();
  game = false;
  output(
    `That wasn't very smart. Your score was: ${score -
      100}. Play again? [yes()/no()]`
  );
}

function getDagger() {
  if (!game) return cheater();
  output('Yeah, okay.');
  score += 25;
}

//THE OUTPUT FUNCTION WHICH FORMATS THE output TEXT

function output(message) {
  // console.clear();
  console.log(`%c${message}`, 'color: #00cc00; font-size: 19px');
}

//LOOK AND HELP

function look() {
  if (d) {
    dennis();
  } else if (ns > 0) {
    output(
      'Ye thou now be at parapets. Ye see a ROPE. Obvious exits are south()'
    );
  } else if (ns < 0) {
    lookSouth();
  } else {
    mainDungeon();
  }
}

function lookSouth() {
  if (!trinket) {
    output(
      'Ye stand yeself close to a yet-unnamed escarpment. Nonetheless, ye spies a TRINKET. Obvious exits are NORTH.'
    );
  } else if (trinketCount >= 2) {
    output(
      `Thou hangeth out at an overlook. Obvious exits are NORTH. I shouldn't have to tell ye there is no TRINKET.`
    );
  } else {
    output(
      'Ye stand high above a canyon-like depression. Obvious exits are NORTH."'
    );
  }
}

function help() {
  look();
}

function helpeth() {
  look();
}
