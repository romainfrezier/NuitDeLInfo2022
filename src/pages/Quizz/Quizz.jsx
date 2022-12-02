import { useEffect, useState } from "react"
import "../../styles/pages/quizz.scss" 
import { Button, LinearProgress } from "@mui/material"
import axios from "axios"
import QuizResult from "../../components/quiz-result/QuizResult";

const Quizz = () => {

	const [dataQuestions, setDataQuestions] = useState(null)
	const [nbQuestionsAnswered, setNbQuestionsAnswered] = useState(0)
	const [isFinished, setIsFinished] = useState(false)
	const [score, setScore] = useState(0)
	const [isMount, setIsMount] = useState(false)
	const [questions, setQuestions] = useState([])
	const [displayedQuestion, setDisplayedQuestion] = useState(null)
	const [isAnswered, setIsAnswered] = useState(false)
	const [selectedChoice, setSelectedChoice] = useState(null)
	const [indexDisplayedQuestion, setIndexDisplayedQuestion] = useState(0)
	const [shuffeled, setShuffeled] = useState(false)
	const [buttonColor, setButtonColor] = useState()

	useEffect(() => {
		//Fetch data from api
		axios.get("https://us-central1-api-nuit-info-2022.cloudfunctions.net/default/quiz").then((quizzes) => {
			setDataQuestions(quizzes.data)
			selectQuestions(10,quizzes.data)
		})

	}, [])

	useEffect(() => {
		if (questions.length >= 10){
			setDisplayedQuestion(questions[0])
			setIsMount(true)
		}
	}, [questions])

	useEffect(() => {
		if (isMount){
			setDisplayedQuestion(questions[indexDisplayedQuestion])
		}
	}, [indexDisplayedQuestion, isMount])


	const selectQuestions = (number, questions) => {
		let arrayIndexChosen = []
		for (let i = 0; i < number; i++){
			let indexChosen
			do {
				indexChosen = Math.floor(Math.random() * questions.length)
			} while (arrayIndexChosen.includes(indexChosen))
			arrayIndexChosen.push(indexChosen)
			setQuestions((oldQuestions) => [...oldQuestions, questions[indexChosen]])
		}
	}

	const showChoices = () => {
		return (displayedQuestion.choices.map((choice) => (

			<>
				<li><Button  style={!isAnswered ? {backgroundColor: "blue"} : (choice === displayedQuestion.answer) ? {backgroundColor: "green"}: {backgroundColor: "red"}} variant="contained" onClick={() => {selectChoice(choice)}}>{choice}</Button></li>
			</>
		)))
	}

	const selectChoice = (choice) => {
		console.log(choice)
		setSelectedChoice(choice)
		//set in blue
	}


	const checkChoice = () => {
		//check if the choice is valid
		if (indexDisplayedQuestion === 10){
			setIsFinished(true)
		}
		else {
			if (selectedChoice != null){
				if (selectedChoice === displayedQuestion.answer){
					//display green the choice

					setScore(score + 1)
				}
				else {
					//display red the choice
					//display green the correct answer
				}
				setIsAnswered(true)
			}
			else {
				//TODO
				//animation wrong
			}
		}
	}


	const nextQuestion = () => {
		setIsAnswered(false)
		setSelectedChoice(null)
		setNbQuestionsAnswered(nbQuestionsAnswered + 1)
		setIndexDisplayedQuestion(indexDisplayedQuestion + 1)
		//verif if is finished
	}


	return(
		<>
			{isMount &&
				<>
					{
						!isFinished ?
							<div className="game">
								<h2 className="title text">Quizz</h2>
								<LinearProgress variant="determinate" value={nbQuestionsAnswered * 10} />
								<h3 className="question text">{displayedQuestion.question}</h3>
								<ul className="choices">
									{showChoices()}
								</ul>
								{isAnswered ?
									<>
										<div className="next">
											<p className="text">La réponse est: {displayedQuestion.answer}</p>
											<p className="text">{displayedQuestion.explanation}</p>
											<Button variant="contained" onClick={() => nextQuestion()}>Suivant</Button>
										</div>
									</>
									: (selectedChoice &&
										<>
											<div className="validation">
												<Button variant="contained" onClick={() => {checkChoice()}}>Valider</Button>
											</div>
										</>
									)
								}
							</div> :
							<QuizResult value={score}></QuizResult>
						}
				</>
			}
		</>
	)
}

export default Quizz
