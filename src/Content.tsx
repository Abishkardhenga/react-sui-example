import { useEffect } from "react"
import { generateRandomness } from "@mysten/sui/zklogin"
import { ZKLogin, useZKLogin } from "react-sui-zk-login-kit"
import { useNavigate } from "react-router-dom"

const SUI_PROVER_ENDPOINT = "https://prover-dev.mystenlabs.com/v1"

// values can be stored in .env
const providers = {
  google: {
	clientId:
	  "597908533856-nbjs1pps1l2igo4b6v9uio6d8ho15vl2.apps.googleusercontent.com",
	redirectURI: "http://localhost:5173",
  },
  twitch: {
	clientId: "YOUR_TWITCH_CLIENT_ID",
	redirectURI: "http://localhost:5173",
  },
}

// Custom styled component to override library styles


export const Content = () => {
	const { encodedJwt, setUserSalt } = useZKLogin()


	const navigate = useNavigate()
 useEffect(() => {
   if (encodedJwt) {

     const requestMock = new Promise((resolve): void =>
       resolve(localStorage.getItem("userSalt") || generateRandomness())
     )

     requestMock.then((salt) => setUserSalt(String(salt)))
   }
 }, [encodedJwt])
	
	const onSuccess = () => {
		alert("success")
		navigate("/success")
	}
	

	return (
    <ZKLogin
			onSuccess={() => onSuccess()}
			loadingText="Loading dhenga"
      providers={providers}
      proverProvider={SUI_PROVER_ENDPOINT}
    />
  )
}
