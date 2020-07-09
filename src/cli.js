import readLineSync from 'readline-sync';

export const askName = () => readLineSync.question('May I have your name? ');
