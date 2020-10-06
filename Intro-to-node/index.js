//jshint esversion:6
/*
const fs = require("fs");
fs.copyFileSync("file1.txt", "file2.txt");
*/

var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperheroName = superheroes.random();
var mySuperVillains = supervillains.random();



console.log("my SuperHero Name: " + mySuperheroName);
console.log("my SuperVillains Name: " + mySuperVillains);
