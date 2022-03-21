import React from "react";
import { useNavigate } from "react-router-dom";
const Cards = ({ image, name, premiered, id,type}) => {
    let navigate = useNavigate();
    return (
        <>
            <div
                className="col-xl-3 col-md-3 col-sm-12"
                onClick={() => {
                    navigate(`/description/${id}`);
                }}
            >
                <div className="product-card text-start">
                    <img className="img-responsive" src={image!==undefined ?(image):("../images/image.png") } alt={name} />
                    <div className="product-image-caption">
                        <div className="product-image-txt">
                            <h3>{name}</h3>
                            <p className="decription-1">Premiered:{premiered}</p>
                            <p className="decription-1">Type:{type}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
