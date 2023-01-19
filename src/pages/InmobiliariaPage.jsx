import React, { useState } from 'react'
import CardAgent from '../components/CardAgent' 
import NavBar from '../components/NavBar'
import RowBienvenida from '../components/RowBienvenida'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


function InmobiliariaPage() {
    
    const users = useSelector(state => state.users)
    
    const [data, setData] = useState();

    useEffect(()=>{
        console.log(users)
      fetch("http://localhost:8080/agent/real_state/"+users[0].id,{
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
          headers: {
            "Authorization": users[0].token,
          }
      })
      .then((response) => {return response.json()})
      .then((response) => {setData(response.data)})
      .catch((err) => console.log(err))
    
    },[])

  return (
    <>
        <div className="row fondo-deg">
            <section className="row fondo-img">
                <div className="row header nav-bar fixed-top">
                    <NavBar isAgent={2}/>
                </div>
                <div className="row align-items-center justify-content-center bie">
                    <RowBienvenida texto={"Bienvenido otra vez"}/>
                </div>
            </section>           
            <section className="row">
                <div className="container">
                    {/*text */}
                </div>
            </section>
            <section className="container">
                {
                    data && data.map(agent => ( 
                        <CardAgent 
                        nombre={agent.name} 
                        email={agent.email}
                        estado={agent.state}
                        ventas={agent.numberOfSales}
                        propiedades={agent.numberOfProperties}
                        />
                    ))
                }
            </section>
            <section className="row fondo-footer">
                <Footer/>
                {/*footer*/}
            </section>
        </div>    
    </>
  )
}

export default InmobiliariaPage