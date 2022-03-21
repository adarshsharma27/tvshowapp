import React from "react";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import Cards from "./Cards";
import Search from "./Search";
const Home = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("family");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const moviesFinder = async () => {
            const ApiUrl1 = `https://api.tvmaze.com/search/shows?q=${search}`;
            const response = await fetch(ApiUrl1);
            const data = await response.json();
            setMovies(data);
            setLoading(false);
        };
        moviesFinder();
    }, [search]);
    return (
        <>
            <Search setSearch={setSearch} />
            <div className="content bg-light">
                <div className="container">
                    <div className="row">
                        {loading ? (
                            <Loader />
                        ) : movies.length  ? (
                            movies.map((element, index) => {
                                // let { ?image:{original}, name, premiered, id } = element.show;
                                return <Cards key={index} id={element.show?.id} image={element.show.image?.original} name={element.show?.name} premiered={element.show?.premiered} type={element.show?.type} />;
                            })
                        ) : (
                            <h2 className="text-white p-2 m-0 text-center">No Shows Found</h2>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
