import React from "react";
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
const Description = () => {
    const { id } = useParams();
    const [movieDesc, setMovieDesc] = useState([]);

    useEffect(() => {
        const setDescription = async () => {
            const ApiUrl1 = `https://api.tvmaze.com/shows/${id}`;
            const response = await fetch(ApiUrl1);
            const data = await response.json();
            setMovieDesc(data);
        };
        setDescription();
    }, [id]);
    return (
        
        <>
            <section>
                <section className="bg-light">
                    <div className="container py-4">
                        {
                            <div className="row align-items-center py-5" id="details">
                                <div className="col-md-6 order-md-1 order-2  text-center text-md-start pt-4">
                                    <h4 className="font-weight-light animation">
                                        <b>{movieDesc.name}</b>
                                    </h4>
                                    <div className="description py- animation  overflow-hidden">
                                        <p>
                                            <strong>Released</strong> : {movieDesc.type}
                                        </p>
                                        <p>
                                            <strong>Premiered</strong> : {movieDesc.premiered}
                                        </p>
                                        <p>
                                            <strong>Ended</strong> : {movieDesc.ended}
                                        </p>
                                        <p>
                                            <strong>Genres</strong> : {String(movieDesc.genres)}
                                        </p>
                                        <p>
                                        <strong>Ratings</strong> : {movieDesc.rating?.average}
                                        </p>
                                        <p>
                                         {movieDesc.summary?.replace(/<\/?[^>]+(>|$)/g, "").split(".")[0]}.
                                        </p>
                                    </div>
                                    <div className="btns pt-2">
                                        <a href={movieDesc.officialSite} className="btn btn-primary" target="_black">
                                            View Website
                                        </a>
                                        <NavLink to="/" className="btn btn-primary btn-secondary ">
                                            Go Back To Search
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6 order-md-2 order-1 text-center p-0 ">
                                    <img src={movieDesc.image?.original} className="img-fluid" alt={movieDesc.name} />
                                </div>
                            </div>
                        }
                    </div>
                </section>
            </section>
        </>
    );
};

export default Description;
