import "../../styles/pages/pendu.scss" 
import Typography from '@mui/material/Typography'
import { dataPendu } from "../../assets/data/dataPendu"
import { useEffect, useState } from "react"
import { Box } from "@mui/system"
import { TextField, Button } from "@mui/material"
import penduStep1 from "../../assets/pendu/penduStep1.png"
import penduStep2 from "../../assets/pendu/penduStep2.png"
import penduStep3 from "../../assets/pendu/penduStep3.png"
import penduStep4 from "../../assets/pendu/penduStep4.png"
import penduStep5 from "../../assets/pendu/penduStep5.png"
import penduStep6 from "../../assets/pendu/penduStep6.png"
import penduStep7 from "../../assets/pendu/penduStep7.png"

const Pendu = () => {

	const [wordChoose, setWordChoose] = useState({ word:"", description: "", array:[]});
	const [countFailure, setCountFailure] = useState(0);
	const [win, setWin] = useState(false)
	const [loose, setLoose] = useState(false)

	// On mount
	useEffect(() => {
		const randomWord = getRandomWord()
		let arrayWord = randomWord.word.split('');
		setWordChoose({word: randomWord.word, description: randomWord.description, array: arrayWord})
	}, [])

	const getRandomWord = () => {
		let index = Math.floor(Math.random() * dataPendu.length);
		return dataPendu[index];
	}

	const [letterForm, setLetterForm] = useState('')

	const handlePropositionLetter = () => {
		const isInclude = wordChoose.array.includes(letterForm)
		if(isInclude) {
			displayLetter(letterForm)
		} else {
			setCountFailure((countFailure) => countFailure + 1)
		}
	}

	// Display letter(s) pass in parameter
    const displayLetter = (letter) => {
		const classNameToChange = "letter" + letter
		const allWithClass = Array.from(
			document.getElementsByClassName(classNameToChange)
		);
        allWithClass.map((element) => {
			element.setAttribute('id','displayLetter')
		})
		const isWin = checkWin()
		if(isWin) {
			setWin(true)
		}
    }

	const checkWin = () => {
		console.log("checkWin")
		let looseFind = false;
		wordChoose.array.map((character) => {
			const classNameToChange = "letter" + character
			const allWithClass = Array.from(
				document.getElementsByClassName(classNameToChange)
			);
			allWithClass.map((element) => {
				console.log(element)
				if(!element.hasAttribute('id')) {
					console.log("Perdu ma biche")
					looseFind = true
				}
			})
		})
		return !looseFind
	}
    
	useEffect(() => {
		if(countFailure >= 6) {
			setLoose(true)
		}
	}, [countFailure])

	return(
		<Box id="sectionPendu">
			<Typography className="text" id="title" variant="h1" color="initial">Pendu</Typography>
			<Typography className="text" id="subtitle" variant="h2" color="initial">Le mot à trouver est en rapport avec les maladies sexuellement transmissible et l'éducation à la sexualité.</Typography>
			<Box id="boxImagePendu">
				{countFailure === 0 && (
					<img src={penduStep1} alt="Jeux du pendu" className="imagePendu"/>
				)}
				{countFailure === 1 && (
					<img src={penduStep2} alt="Jeux du pendu" className="imagePendu"/>
				)}
				{countFailure === 2 && (
					<img src={penduStep3} alt="Jeux du pendu" className="imagePendu"/>
				)}
				{countFailure === 3 && (
					<img src={penduStep4} alt="Jeux du pendu" className="imagePendu"/>
				)}
				{countFailure === 4 && (
					<img src={penduStep5} alt="Jeux du pendu" className="imagePendu"/>
				)}
				{countFailure === 5 && (
					<img src={penduStep6} alt="Jeux du pendu" className="imagePendu"/>
				)}
				{countFailure === 6 && (
					<img src={penduStep7} alt="Jeux du pendu" className="imagePendu"/>
				)}
			</Box>
			<Box id="boxArrayWord">
				{wordChoose.array.map((character) => (
					<Box className="boxTypoHideWord">
						<Typography className={["text", "hideWord", "letter" + character].join(' ')} variant="h2" color="initial">{character}</Typography>
					</Box>
				))}
			</Box>
			{!loose && !win && (
			<Box id="boxChoiceLetter">
				<Typography className="text" id="titleChoiceLetter" variant="h2" color="initial">Essayer une lettre:</Typography>
				<TextField className="text" id="textFieldChoiceLetter" label="Lettre" variant="outlined" inputProps={{ maxLength: 1 }} onChange={(e) => setLetterForm(e.target.value.toUpperCase())}/>
				<Button className="text" id="buttonChoiceLetter" variant="contained" color="primary" onClick={() => handlePropositionLetter()}>Essayer</Button>
			</Box>
			)}
			{loose && (
				<Typography className="typoResultPendu" variant="h3" color="red">Perdu !</Typography>
			)}
			{win && (
				<Typography className="typoResultPendu" variant="h3" color="green">Gagné !</Typography>
			)}
			{(win || loose) && (
			<Box id="boxResultPendu">
				<Typography className="text" variant="h5" color="initial">Le mot était: <span className="bold">{wordChoose.word}</span></Typography>
				<Typography className="text" variant="h5" color="initial">Définition:</Typography>
				<Typography className="text" variant="body1" color="initial">{wordChoose.description}</Typography>
				<Box id="boxButtonreplay">
					<Button id="buttonReplay" variant="contained" color="primary" onClick={() => window.location.reload(false)}>Rejouer</Button>
				</Box>
			</Box>
			)}
		</Box>
	)
}

export default Pendu
