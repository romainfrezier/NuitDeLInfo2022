import "../../styles/pages/minijeux.scss"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"

const MiniJeux = () => {

	const navigate = useNavigate()

	return(
		<div id="cardContainer">
			<div className="card secondary">
				<h1 className="text">Jeu du pendu</h1>
				<p className="text">Jouer au jeu du pendu tout en apprenant de nouveaux mots relatif au sida !</p>
				<Button variant="contained">Jouer</Button>
			</div>
			<div className="card secondary">
				<h1 className="text">Quizz</h1>
				<p className="text">Apprenez et cultivez vous en vous amusant au travers du quizz !</p>
				<Button variant="contained" onClick={() => { navigate("/minijeux/quizz")} }>Jouer</Button>
			</div>
		</div>
	)
}

export default MiniJeux
