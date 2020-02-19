'use strict';

//ns is north/south +1 is going north, -1 is going south
let ns;
let ew;
let trinket;

let score;
//d is DENNIS
let d;

//game will determine if you can use the other functions
let game;

//ascii artwork

// const sword = `   /\\  \n   | | \n   | | \n   | | \no__|_|__o\n \\_____/\n   | |\n   OOO`;

const artwork = `    Thy Dungeonman \n\n/\\        /\\    /\   \n| |/----\\| |    | | \n \\_------_/     | |    \n  / o  o \\      | |   \n  /  ||  \\   o__|_|__o \n  / ---- \\    \\_____/ \n  /\\/\\/\\/\\      | | \n                OOO \n`;

thyDungeonman();

function thyDungeonman() {
  ns = 0;
  trinket = false;
  score = 0;
  d = false;
  game = true;
  // console.log();
  console.log(artwork);
  console.log(
    'Ye find yeself in yon dungeon. Ye see a SCROLL. Behind ye scroll is a FLASK. Obvious exits are NORTH, SOUTH and DENNIS.'
  );
}

//MOVEMENT COMMANDS

function north() {
  if (!game) return cheater();
  ns++;
  console.log(
    'You go NORTH through yon corridor. You arrive at parapets. Ye see a ROPE. Obvious exits are SOUTH.'
  );
}

function south() {
  if (!game) return cheater();
  if (ns < 0 || d) return notComputeth();
  ns--;
  console.log(
    "You head south to an enbankment. Or maybe a chasm. You can't decide which. Anyway, ye spies a TRINKET. Obvious exits are NORTH."
  );
}

function dennis() {
  if (!game) return cheater();
  if (ns !== 0) return notComputeth();
  d = true;
  console.log(
    'Ye arrive at Dennis. He wears a sporty frock coat and a long jimberjam. He paces about nervously. Obvious exits are NOT DENNIS.'
  );
}

function notDennis() {
  if (!game) return cheater();
  d = false;
  console.log('You go NOT DENNIS');
}

//CONTEXT COMMANDS
function look() {}

function help() {}

function helpeth() {
  help();
}

//MAIN DUNGEON ROOM COMMANDS

//NORTH DUNGEON ROOM COMMANDS

//SOUTH DUNGEON ROOM COMMANDS

//DENNIS COMMANDS

//ERRORS

function notComputeth() {
  console.log('That does not computeth. Type help() if thou needs of it.');
}

function cannotstGo() {
  // if (!theCheat) return cheater();
  console.log(
    'Thou cannotst go there. Who do you think thou art? A magistrate?!'
  );
  // err = 0;
}

function cheater() {
  console.log('You have yet started the game! first enter thyDungeonman()');
}

//RESTARTING

function yes() {
  return thyDungeonman();
}

function no() {
  console.log('Doest what thou wilt');
}

//JOKE COMMANDS
function smell() {
  if (!game) return cheater();
  console.log('You smell a Wumpus.');
}

function sniff() {
  smell();
}

function dance() {
  if (!game) return cheater();
  console.log('Thou shaketh it a little, and it feeleth all right.');
}

function die() {
  if (!game) return cheater();
  game = false;
  console.log(
    `That wasn't very smart. Your score was: ${score -
      100}. Play again? [yes()/no()]`
  );
}

function getDagger() {
  if (!game) return cheater();
  console.log('Yeah, okay.');
  score += 25;
}
