import "../../styles/components/quizResult.scss"
import {motion} from "framer-motion";
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";


function CircularProgressWithLabel(props) {
	return (
		<Box sx={{ position: 'relative', display: 'inline-flex', width: '300px', height: '300px'}}>
			<CircularProgress className="circle" variant="determinate" {...props} style={{'color': 'green', 'width': '100%', 'height': '100%'}}/>
			<p className="percent text">{props.value}%</p>
		</Box>
	);
}

CircularProgressWithLabel.propTypes = {
	/**
	 * The value of the progress indicator for the determinate variant.
	 * Value between 0 and 100.
	 * @default 0
	 */
	value: PropTypes.number.isRequired,
};

const QuizResult = (props) => {
	const navigate = useNavigate();
	const [progress, setProgress] = useState(10);
	const [isFour, setIsFour] = useState(false)
	const [question, setQuestion] = useState("")
	const [explanation, setExplanation] = useState("")
	const [answer1, setAnswer1] = useState("")
	const [answer2, setAnswer2] = useState("")
	const [answer3, setAnswer3] = useState("")
	const [answer4, setAnswer4] = useState("")
	const [correct, setCorrect] = useState(" ")
	const [formData, setFormData] = useState({
		question: "",
		choices: [],
		answer: "",
		explanation: "",
	})

	const message = props.value > 50 ? "Bravo !" : "Tu devrais réessayer !"

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};


	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
		}, 800);
		return () => {
			clearInterval(timer);
		};
	}, []);

	const handleChangeNbQuestion = (event) => {
		if (event.target.value === "true") {
			setIsFour(true);
		} else {
			setIsFour(false);
		}
	};

	const handleChangeCorrect = (event) => {
		switch (event.target.id){
			case "answer1":
				setAnswer1(event.target.value);
				break;
			case "answer2":
				setAnswer2(event.target.value);
				break;
			case "answer3":
				setAnswer3(event.target.value);
				break;
			case "answer4":
				setAnswer4(event.target.value);
				break;
		}
	}

	const handleChangeCorrectSelected = (event) => {
		setCorrect(event.target.value)
	}

	const handleChangeExplanation = (event) => {
		setExplanation(event.target.value)
	}

	const useIsMount = () => {
		const isMountRef = useRef(true);
		useEffect(() => {
			isMountRef.current = false;
		}, []);
		return isMountRef.current;
	};

	const isMont = useIsMount();

	useEffect(() => {

	},[isFour])

	useEffect(() => {

	}, [answer1, answer2, answer3, answer4])

	const handleForm = async (event) => {
		event.preventDefault();
		const data = {
			question: question,
			choices: [answer1, answer2, answer3, answer4],
			answer: correct,
			explanation: explanation,
		}

		await axios.post('https://us-central1-api-nuit-info-2022.cloudfunctions.net/default/quiz', data)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			})

		setOpen(true)
	}

	const handleChangeQuestion = (event) => {
		setQuestion(event.target.value)
	}

	return (
		<div className="result-container">
			<h1 className="text">Resultat</h1>
			<CircularProgressWithLabel value={props.value}></CircularProgressWithLabel>
			<h2 className="text result-message">{message}</h2>
			<Stack spacing={5} direction="row" className="button-play">
				<Button variant="contained" onClick={() => {navigate('/minijeux/quizz')}}>Rejouer</Button>
				<Button variant="contained" onClick={() => {navigate('/minijeux')}}>Jouer à un autre jeux</Button>
			</Stack>
			<h2 className="text form-header">Vous voulez ajouter une question ?</h2>
			<form onSubmit={handleForm}>
				<TextField id="question" label="Question" variant="outlined"
						   InputLabelProps={{className: "text"}}
						   inputProps={{className: "text"}}
						   style={{'width': '600px'}}
						   required
						   onChange={handleChangeQuestion}
				/>
				<RadioGroup
					aria-labelledby="demo-controlled-radio-buttons-group"
					name="controlled-radio-buttons-group"
					value={isFour}
					onChange={handleChangeNbQuestion}
					required
				>
					<FormControlLabel value="false" control={<Radio/>} label={<Typography className="text">2 réponses</Typography>}/>
					<FormControlLabel value="true" control={<Radio/>} label={<Typography className="text">4 réponses</Typography>}/>
				</RadioGroup>
				<div className="question-group">
					<TextField id="answer1" label="Réponse 1" variant="outlined"
							   InputLabelProps={{className: "text"}}
							   inputProps={{className: "text"}}
							   style={{'width': '600px', 'margin-top': '20px'}}
							   required
							   onChange={handleChangeCorrect}
					/>
					<TextField id="answer2" label="Réponse 2" variant="outlined"
							   InputLabelProps={{className: "text"}}
							   inputProps={{className: "text"}}
							   style={{'width': '600px', 'margin-top': '20px'}}
							   required
							   onChange={handleChangeCorrect}
					/>
				</div>
				{
					!isFour ?
						<></> :
						<div className="question-group">
							<TextField id="answer3" label="Réponse 3" variant="outlined"
									   InputLabelProps={{className: "text"}}
									   inputProps={{className: "text"}}
									   style={{'width': '600px', 'margin-top': '20px'}}
									   required
									   onChange={handleChangeCorrect}
							/>
							<TextField id="answer4" label="Réponse 4" variant="outlined"
									   InputLabelProps={{className: "text"}}
									   inputProps={{className: "text"}}
									   style={{'width': '600px', 'margin-top': '20px'}}
									   required
									   onChange={handleChangeCorrect}
							/>
						</div>
				}

				<RadioGroup
					aria-labelledby="demo-controlled-radio-buttons-group"
					name="controlled-radio-buttons-group"
					value={correct}
					onChange={handleChangeCorrectSelected}
				>
					<h2 className="text mid-question">Quelle est la bonne réponse ?</h2>
					<FormControlLabel required value={answer1} control={<Radio/>} label={<Typography className="text">{answer1}</Typography>}/>
					<FormControlLabel required value={answer2} control={<Radio/>} label={<Typography className="text">{answer2}</Typography>}/>
					{
						!isFour ?
							<></> : <div className="question-group">
								<FormControlLabel required value={answer3} control={<Radio/>} label={<Typography className="text">{answer3}</Typography>}/>
								<FormControlLabel required value={answer4} control={<Radio/>} label={<Typography className="text">{answer4}</Typography>}/>
							</div>

					}
				</RadioGroup>
				<h2 className="text mid-question">Donne une explication à ta réponse !</h2>
				<TextField
					id="Explication"
					label="Explication"
					multiline
					rows={5}
					variant="standard"
					InputLabelProps={{className: "text"}}
					inputProps={{className: "text"}}
					style={{'width': '600px', 'margin-top': '20px'}}
					required
					onChange={handleChangeExplanation}
				/>
				<motion.div id="sendButtonDiv" whileHover={{ x: -600 }}>
					<Button variant="contained" type="submit">Envoyer</Button>
				</motion.div>
			</form>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Information"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Votre question apparaitra dans le quiz après validation par des administrateurs.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>
						Ok, super !
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default QuizResult
