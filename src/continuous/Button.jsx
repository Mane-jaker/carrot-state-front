
function Button ({Texto,typ,clas, handleOn}){
    return(
        <>
            <a
            type={typ}
            className={clas}
            onClick={handleOn}
            >
                {Texto}
            </a>
        </>
    ) 
}

export default Button