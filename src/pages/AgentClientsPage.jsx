import React, { useState } from "react";
import CardAgent from "../components/CardAgent";
import NavBar from "../components/NavBar";
import RowBienvenida from "../components/RowBienvenida";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import SelectPages from "../continuous/SelectPages";
import InterBodoquesCard from "../components/InterBodoquesCard";
import "../styles/stylespage/AgentPage.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function AgentClientsPage() {
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();

  const type = useParams();

  const users = useSelector((state) => state.users);

  useEffect(() => {
    fetch("http://localhost:8080/house/list/agent/" + users[0].id, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Authorization: users[0].token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData1(response.data);
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:8080/plot/list/agent/" + users[0].id, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Authorization: users[0].token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData2(response.data);
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:8080/premise/list/agent/" + users[0].id, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Authorization: users[0].token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData3(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="row fondo-deg">
        <section className="row fondo-img">
          <div className="row header nav-bar fixed-top">
            <NavBar isAgent={3} />
          </div>
          <div className="row align-items-center justify-content-center bie">
            <RowBienvenida texto={"Mira los clientes de tu propiedades"} />
          </div>
        </section>
        <section className="container">
          <div className="row justify-content-center mt">
            <div className="col-4">
              <h2 className="hsblack">Lista de propiedades</h2>
            </div>
          </div>
        </section>
        <section className="container mt">
            {
              data1 && data1.map(bodoques => ( 
                <InterBodoquesCard
                nombre={bodoques.name}
                clients={bodoques.clients} 
                precio={bodoques.price}/>
              ))
            }
            {
              data2 && data2.map(bodoques => ( 
                <InterBodoquesCard
                nombre={bodoques.name}
                clients={bodoques.clients} 
                precio={bodoques.price}/>
              ))
            }
            {
              data3 && data3.map(bodoques => ( 
                <InterBodoquesCard
                nombre={bodoques.name}
                clients={bodoques.clients} 
                precio={bodoques.price}/>
              ))
            }
        </section>
        <section className="row fondo-footer">
          <Footer />
          {/*footer*/}
        </section>
      </div>
    </>
  );
}

export default AgentClientsPage;
