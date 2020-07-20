import readLineSync from 'readline-sync';

const yourAnswer = () => readLineSync.question('Your answer: ');

const question = (text) => console.log(`Question: ${text}`); 

const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
};

export const start = (name, numberQuestions = 3, maxNum = 100) => {
	console.log('Answer "yes" if the number is even, otherwise answer "no".');

	let count = 0;
	while (count < numberQuestions) {
		const num = getRandomInt(maxNum);
		question(num);
		const answer = yourAnswer();
		const correct = num % 2 === 0 ? 'yes' : 'no';

		if (answer === correct) {
			console.log('Correct!');
			count += 1;
		} else {
			console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".`);
			break;
		}
	}

	if (count >= numberQuestions) {
		console.log(`Congratulations, ${name}!`);
	} else {
		console.log(`Let's try again, ${name}!`);
	}
}



