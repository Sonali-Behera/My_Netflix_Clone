import React from "react";
import Row from "../Row";
import requests from "../../requests";
import Banner from "../Banner";
import Nav from "../Nav";
import "./HomeScreen.css";
import Footer from "../Footer";


function HomeScreen() {
  return (
    <div>
        <Nav />
        <Banner />
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Footer />
    </div>
  );
}

export default HomeScreen;