import { useNavigate } from "react-router-dom"
import Button from "../continuous/Button"
import { Link } from "react-router-dom"
import '../styles/style.css'

function Card({imj,title,desc,price, idss, types,isLoged}) {
    const typ = "button"
    const clas = "btn btcard"
    
    const navigate = useNavigate();

    const handleOnClick = () =>{
        navigate("/property/"+types+"/"+idss)
    }

    return (
        <section className="card text-center mt">
        <div className="row img">
            <img src={imj} class="card-img-top" alt="..."/>
        </div>
        <section className="card-body">
            <div className="mt">
                <p><h5 class="card-title">{title}</h5></p>
            </div>
            <div className="mt">
                <p class="card-text"><small class="text-muted">{desc}</small></p>
            </div>
            <div className="mt">
                <p class="card-text">{price}</p>
            </div>
            <div className="mt row justify-content-center">
                <div className="col-12">
                    {isLoged == true && (
                         <Button handleOn={handleOnClick} Texto="See more" typ={typ} clas={clas} />
                    )}
                    {isLoged == false && (
                         <Link to={"/login/client"} className={clas} type='button'>See more</Link>
                    )}
                </div>
            </div>
        </section>
    </section>
    )
}
export default Card