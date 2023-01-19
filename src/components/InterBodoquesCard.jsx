import '../styles/stylespage/AgentPage.css'

function InterBodoquesCard({nombre, precio, clients}) {
    return (
        <div className="row justify-content-center">
            <div className="col-10 card-client">
                <div className="container-fluid h100p">
                    <div className="row h100p">
                        <div className="col-5">
                            <div className="row justify-content-center h100p align-items-center">
                                <div className="col-7">
                                    <img className="img-fluid" src="https://conejobucket.s3.us-east-2.amazonaws.com/persons/default/property/house/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg" alt="ola" />
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="row">
                                <div className="col-7">
                                    <h4>{nombre}</h4>
                                </div>
                                <div className="col-5">
                                    <h2>${precio}</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-11">
                                    <div className="row client-ver">
                                        <div className="col-6">
                                            interesados
                                        </div>
                                        <div className="col-6">
                                            contacto
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="container-fluid contactao scrol-client">
                                            {clients && clients.map(client =>(
                                                <div className="row">
                                                    <div className="col-6">
                                                       {client.name}
                                                    </div>
                                                    <div className="col-6">
                                                        {client.contact}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterBodoquesCard;