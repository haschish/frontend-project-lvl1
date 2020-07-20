#!/usr/bin/env node
import { askName } from '../src/cli.js';
import { start } from '../src/even-game.js';

console.log('Welcome to the Brain Games!');
const name = askName();
console.log(`Hello, ${name}!`);

start(name);