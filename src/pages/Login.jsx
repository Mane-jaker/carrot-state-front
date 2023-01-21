import { useEffect, useState } from "react"
import { useRef } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import {v4 as uuid} from 'uuid'
import { useDispatch } from "react-redux"
import { updateUser,addUser } from "../features/user/userSlice"
import Inputs from "../continuous/Inputs"
import '../styles/style.css'
import '../styles/stylespage/Login.css'
import { useSelector } from "react-redux"

function Login(){



    const [user, setUser] = useState({
        id: 0,
        token: 0
    })
    

    const User = useSelector (state => state.users)
    const typ = "text"
    const clas ="form-control inp"
    const idu = "user"
    const dispatch = useDispatch();

    const { loginType } = useParams();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({email: "", password: ""});

    const email = useRef();
    const password = useRef();

    const handleOnClick = () => {
        setCredentials({email: email.current.value, password: password.current.value})
    }

    const handleAgentLogin = (response) =>{
        if(response.data.success){
            dispatch(addUser({
                ...{id: response.data.logged.id, token: response.data.token}
            }))
            navigate("/agentPage");
        }
        alert(response.message)
    }

    const handleClientLogin = (response) => {
        if(response.data.success){
            dispatch(addUser({
                ...{id: response.data.logged.id, token: response.data.token}
            }))
            navigate("/clients");
        }
        alert(response.message)
    }

    const handleRealStateLogin = (response) =>{
        console.log(response)
        if(response.data.success){
            dispatch(addUser({
                ...{id: response.data.logged.id, token: response.data.token}
            }))
            navigate("/InmobiliPage");
        }
        alert(response.message)
    }

    const handleAdminLogin = (response) =>{
        if(response.data.success){
            dispatch(addUser({
                ...{id: response.data.logged.id, token: response.data.token}
            }))
            navigate("/agentPage");
        }
        alert(response.message)
    }

    useEffect(() =>{
        console.log(credentials)
        if(credentials.email != ""){
            switch(loginType){
                case "agent":{
                    fetch("http://localhost:8080/login/agent", {
                        method: 'POST',
                        headers: {
                            "Accept": "application/json",
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        body: JSON.stringify(credentials)
                    }).then((response) => {
                        return response.json()})
                        
                    .then((response) => { 
                        handleAgentLogin(response);
                    })
                    break;
                }
                case "real_state":{
                    fetch("http://localhost:8080/login/real_state", {
                        method: 'POST',
                        headers: {
                            "Accept": "application/json",
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        body: JSON.stringify(credentials)
                    }).then((response) => {
                        return response.json()})
                    .then((response) => { 
                        handleRealStateLogin(response);
                    })
                    break;
                }
                case "client":{
                    fetch("http://localhost:8080/login/client", {
                        method: 'POST',
                        headers: {
                            "Accept": "application/json",
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        body: JSON.stringify(credentials)
                    }).then((response) => {
                        return response.json()})
                    .then((response) => { 
                        handleClientLogin(response);
                    })
                    break;
                }
            }
        }
    }, [credentials])

    return(
        <>
            <div className="row fonlog ">
                <div className="container ">
                    <div className="row align-items-center justify-content-center h100">
                        <section className="col-4 logs justify-content-center align-items-center">
                            <div className="row mt">
                                <h1 className="hs">Log-in</h1>
                            </div>

                            <div className="row justify-content-center lign-items-center">
                                <Inputs Texto={"Email"} Type={typ} clas={clas} id={idu} xref={email}/>
                            </div>
                            <div className="row justify-content-center mb">
                                <Inputs Texto={"Password"} Type="password" clas={clas} id={idu} xref={password}/>
                            </div>
                            <div className="row justify-content-center align-items-center mb">
                                <div className="col-5">
                                    <button type='button'className="btn btn-primary w100" onClick={handleOnClick}>log-in</button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

