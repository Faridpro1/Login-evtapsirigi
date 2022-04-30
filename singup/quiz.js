const title = document.getElementById("title");
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

const username = localStorage.getItem("username");

title.innerText = `Welcome ${username}`;

const myQuestions = [
	{
		question: "Who invented JavaScript?",
		answers: {
			a: "Douglas Crockford",
			b: "Sheryl Sandberg",
			c: "Brendan Eich",
		},
		correctAnswer: "c",
	},
	{
		question: "Which one of these is a JavaScript package manager?",
		answers: {
			a: "Node.js",
			b: "TypeScript",
			c: "npm",
		},
		correctAnswer: "c",
	},
	{
		question: "Which library made by Facebook",
		answers: {
			a: "Angular",
			b: "jQuery",
			c: "React",
			d: "ESLint",
		},
		correctAnswer: "c",
	},
];

function buildQuiz() {
	const output = [];

	// for each question...
	myQuestions.forEach((currentQuestion, questionNumber) => {
		const answers = [];
		for (letter in currentQuestion.answers) {
			answers.push(
				`<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
			);
		}

		// add this question and its answers to the output
		output.push(
			`<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("</br>")} </div>`
		);
	});

	// finally combine our output list into one string of HTML and put it on the page
	quizContainer.innerHTML = output.join("");
}

function showResults() {
	// gather answer containers from our quiz
	const answerContainers = quizContainer.querySelectorAll(".answers");

	// keep track of user's answers
	let numCorrect = 0;

	// for each question...
	myQuestions.forEach((currentQuestion, questionNumber) => {
		// find selected answer
		const answerContainer = answerContainers[questionNumber];
		const selector = `input[name=question${questionNumber}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;

		// if answer is correct
		if (userAnswer === currentQuestion.correctAnswer) {
			// add to the number of correct answers
			numCorrect++;

			// color the answers green
			answerContainers[questionNumber].style.color = "lightgreen";
		}
		// if answer is wrong or blank
		else {
			// color the answers red
			answerContainers[questionNumber].style.color = "red";
		}
	});

	// show number of correct answers out of total
	resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// Kick things off
buildQuiz();

// Event listeners
submitButton.addEventListener("click", showResults);
