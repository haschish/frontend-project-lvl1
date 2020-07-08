import readLineSync from 'readline-sync';

export const askName = () => {
	return readLineSync.question('May I have your name? ');
}