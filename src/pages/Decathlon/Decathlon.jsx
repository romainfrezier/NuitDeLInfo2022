import axios from "axios"
import { useEffect , useState} from "react"
import "../../styles/pages/decathlon.scss" 

const Decathlon = () => {


	const [accessToken, setAccessToken] = useState("");


	const [selectedFile, setSelectedFile] = useState(null);

  const sportsJO = ["Athlétisme", "Aviron", "Badminton", "Baseball Softball", "Basketball", "Basketball 3x3", "Boxe", "Breaking", "Canöe", "Cyclisme", "Escalade", "Escrime", "Football", "Golf", "Gymnastique", "Haltérophilie", "Handball", "Hockey", "Judo", "Karaté", "Lutte", "Natation", "Pentathlon", "Plongeon", "Rugby", "Skateboard", "Surf", "Taekwondo", "Tennis", "Tennis de table", "Tir", "Tir à l'arc", "Tranpoline", "Triathlon", "Voile", "Volleyball", "Water-Polo"]

  useEffect(() => {
    axios.post("https://idpdecathlon.oxylane.com/as/token.oauth2", "grant_type=client_credentials", {
       headers: {
          Authorization: "Basic QzBlZjlkNjAxZjkwMWZmMDdkNWUzYzg3YjVkMmM1YmIyOWMzMzk1MGU6U2lhaGZnRkE0NDFSMzliaEJkSEFJZUpOV3Y4MFNBMVpia21pRXV6ZkYya2RIb1ZHYnRuZWR0Qkl3NU9yaTVySQ=="
       }
    }).then((token) => {
      setAccessToken(token.data.access_token)
      console.log(token.data.access_token)
    })
  }, [])
  


	

  const submitForm = (event) => {
    event.preventDefault()
    const formData = new FormData();
  
    formData.append("file", selectedFile);
  
  
    axios.post("https://api.decathlon.net/sport_vision_api/v1/sportclassifier/predict/", {
      headers : {
        'Authorization' : "Bearer " + {accessToken},
        "Content-Type": "application/json",
        'x-api-key' : 'b161265e-774e-4c16-ae29-024078274571',
        'Content-Type' : "multipart/form-data",
      },
      body : {
        'mode' : "formdata"
      }
    },formData).then((res) => {
        alert("File Upload success");

      }).catch((err) => alert("File Upload Error"));
  
  };


  return (

    <div className="App">

      <form onSubmit={submitForm}>

        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />

        <button>Envoyer</button>
        
      </form>

    </div>
	)
}

export default Decathlon
