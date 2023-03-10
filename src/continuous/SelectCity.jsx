function SelectCity ({clase,id,titulo,optional}){
    return(
        <>
            <div className="col-10">
                <p className="inps">{titulo}</p>
                <select className="form-select" id={id} aria-label=".form-select-sm example" ref={optional}>
                    <option value="TXGZCH">Tuxtla Gutierrez, Chiapas</option>
                    <option value="COICH">Coita, Chiapas</option>
                </select>
            </div>
        </>
    )
}

export default SelectCity