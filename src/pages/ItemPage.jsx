import "../styles/stylespage/Item.css";
import Button from "../continuous/Button";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ItemPage() {

  const typ ="button"
  const clas ="btn btn-primary w100"
  const users = useSelector (state => state.users)
  const [data, setData] = useState({});
  const { id } = useParams();
  const { type } = useParams();
  useEffect(() => {

    switch (type) {
      case "casa": {
        fetch("http://localhost:8080/house/" + id, {
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
            setData(response.data);
          })
          .catch((err) => console.log(err));
          break
      }
      case "local": {
        fetch("http://localhost:8080/premise/" + id, {
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
            setData(response.data);
          })
          .catch((err) => console.log(err));
          break
      }
      case "terreno": {
        fetch("http://localhost:8080/plot/" + id, {
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
            setData(response.data);
          })
          .catch((err) => console.log(err));
          break
      }

    }
  }, []);
  return (
    <>
      {data && (
        <div className="row fondo-deg h100">
          <div className="container h100p bor">
            <div className="row bor h100p align-items-center">
              <div className="col-7">
                <div className="row">
                  <img
                    src="https://conejobucket.s3.us-east-2.amazonaws.com/persons/agent/Agent@gmail.com/properties/houses/house_2/pictures/casas-ecológicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg"
                    className="img-fluid"
                    alt="ola"
                  />
                  {/*no ta componiendo la imagen */}
                </div>
              </div>
              <div className="col-5">
                <div className="row cardsitas aligcen dirow">
                  <div className="col-9 dircol aligcen justcen">
                    <p>
                      <h4>{data.description}</h4>
                    </p>
                    <p>
                      <h2>${data.price}</h2>
                    </p>
                  </div>
                  {type == "casa" && (
                    <section className="col-3 dircol aligcen justcen">
                      <div className="dircol aligcen justcen">
                        <img
                          className="imgsize"
                          src="https://s3-alpha-sig.figma.com/img/0b1c/b3ae/30d5d69ed143dc5e100d6d97335ea826?Expires=1671408000&Signature=MJyxYoFonTMbdrDHcnFHEBmC4aRNqsk2onHf10hDSaoD4k1mPgE1h4VCoWHspaFvZKyklHjPjDIorYpaFUHBlUC8~9kOKMBx19SBHBDOYCQTao1ImfjVHDc3pnLSNzG~ZWrLD~e09lzQGaJHudGxqoFjHpEy~A12opRhHyacxBTuDdmInZuOd9gXrU9q1zAK8jIsflpfqq~bKCE60Zm9NCBRacfvCvZWSaaRCINY4qNHUV4MC5DZxYBsCpDR5P-QmnLeXDgLDCaqiwGxSWleUcuF-msvILYIMD7E7r3yqZozsKVriIEOa9ClbGmfiJdpQDjuchQ0d30OD1GskXt0sA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                          alt="ola"
                        />
                        <p>
                          <h5>Cuartos: {data.rooms}</h5>
                        </p>
                      </div>
                      <div className="dircol aligcen justcen">
                        <img
                          className="imgsize"
                          src="https://s3-alpha-sig.figma.com/img/40f7/8445/11f19421aab600c41a4504ab755012bc?Expires=1671408000&Signature=PwxznbgwQ1-7i1pV99yqXpR~epUFHNa5Zn2PFAFIuEOnnyeK-hsVIiEI70JNEGjZlLTz-D4M3e3QFqNnh6Y8eeaXtxwMagR8PvIKeW5OczBfTM5NrZsXcmXrI7Mks1wjmp4WVuu75LoLlx4enOh1uL6YCvlEV1vQS~FrkWvqb95P5SUjS8Bp671QhgGpMSU~UpAqhr3ko6xIEVOqEQ1xdzI2VylCrdGDLyUSqF0p4uroCseMo3y3BsqectYOFTFfV7dqxW8ojyt8hGUamaiftTbFeXeGjcc8oT~AL9cu5erKOVCalnlssszANIzr7RYNVjEqqkOtLb~h0nGj7FLc5A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                          alt="ola"
                        />
                        <p>
                          <h5>Baños: {data.bathroomNum}</h5>
                        </p>
                      </div>
                      <div className="dircol aligcen justcen dirow">
                        <img
                          className="imgsize"
                          src="https://s3-alpha-sig.figma.com/img/1a06/60fc/6af8fb00217e5c942325880df58bb26d?Expires=1671408000&Signature=hg2iEd7RjUrxZyQyp0duMOr1VedZ2Wo40BKUjVfsysgkfvrQ0xX2zLhHcJotTBxyxY1RLFF7uaZqHJBlM1tvFov8f1Axc59dNwUQa4Epovs37RIijnM43-WsMVng00H6LwAmtX7uPpSxYz6yyJi8Qi9rfTJ70xsI4MBRoLbTaNzkP37LcOKrJ9rJxQj3YpLsKv3A9ztoFnnk0B82aIxIXqzorsP4JUDthZ7SyzFAjVuBjLXV50TkFpMj0cUm3X-h1MAVD2hpX-V4F4JqZ1QzE9HuU4TAnnrrBBHUp4BtNSbuMGgobCILpIh7Sg0iYQjWfoIDpC2TsflJ24di14WZ0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                          alt="ola"
                        />
                        <p>
                          <h5>Tamaño: {data.size}m2</h5>
                        </p>
                      </div>
                    </section>
                  )}
                </div>
                <div className="row mt cardsitas">
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <div className="col-8">
                        <Link to={"/agentPage"} className={clas} type='button'>me gusta</Link>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemPage;
