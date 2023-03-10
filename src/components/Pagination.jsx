import React from 'react'
import Card from './Card'
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Pagination({forAgent,isLog}) {
  
  const users = useSelector(state => state.users)

  const [dataHouses, setDataHouses] = useState(null);
  const [dataPlots, setDataPlots] = useState(null);
  const [dataPremises, setDataPremises] = useState(null);

  useEffect(function() {

    if(!forAgent){
      fetch("http://localhost:8080/house/list",{
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
      })
      .then((response) => {return response.json()})
      .then((response) => {setDataHouses(response.data)})

      fetch("http://localhost:8080/plot/list",{
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
      })
      .then((response) => {return response.json()})
      .then((response) => {setDataPlots(response.data)})

      fetch("http://localhost:8080/premise/list", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
      })
      .then((response) => {return response.json()})
      .then((response) => {setDataPremises(response.data)})
    }
    else{

      fetch("http://localhost:8080/house/list/agent/"+users[0].id, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
          headers: {
            "Authorization": users[0].token,
          },
      })
      .then((response) => {
        console.log(users[0].token)
        return response.json()})
      .then((response) => {setDataHouses(response.data)})
  
      fetch("http://localhost:8080/plot/list/agent/"+users[0].id,{
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {"Authorization": users[0].token}
      })
      .then((response) => {return response.json()})
      .then((response) => {setDataPlots(response.data)})
  
      fetch("http://localhost:8080/premise/list/agent/"+users[0].id, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {"Authorization": users[0].token}
      })
      .then((response) => {return response.json()})
      .then((response) => {setDataPremises(response.data)})
      
    }

  },[]);

  return (
    <>
        <section className="row ">
          <div className="row justify-content-center aling-item-center">
            <h2 className='mt'>Casas</h2>
          </div>
          
            {
              dataHouses && dataHouses.map(houses => ( 
                <div className="col-4">
                  <Card title={houses.name} 
                  imj={"https://conejobucket.s3.us-east-2.amazonaws.com/persons/default/property/house/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg"} 
                  desc={houses.description}
                  price={houses.price + "$"} 
                  idss={houses.id}
                  types={"casa"}
                  isLoged={isLog}/>
                </div>
              ))
            }
        </section>
        <section className='row'>
          <h2 className='mt'>Terrenos</h2>
            {
              dataPlots && dataPlots.map(houses => ( 
                <div className="col-4">
                  <Card title={houses.name} 
                  imj={"https://conejobucket.s3.us-east-2.amazonaws.com/persons/default/property/house/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg"} 
                  desc={houses.description}
                  price={houses.price + "$"}
                  idss={houses.id}
                  types={"terreno"}
                  isLoged={isLog}/>
                </div>
              ))
            }
        </section>
        <section className='row'>
          <h2 className='mt'>Locales</h2>
          {
            dataPremises && dataPremises.map(premises =>( 
              <div className="col-4">
                <Card title={premises.name} 
                imj={"https://conejobucket.s3.us-east-2.amazonaws.com/persons/default/property/house/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg"} 
                desc={premises.description}
                price={premises.price + "$"}
                idss={premises.id}
                types={"locales"}
                isLoged={isLog}/>
              </div>
            ))
          }
        </section>
    </>
  )
}

export default Pagination