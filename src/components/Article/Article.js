import React from "react";
import "./Article.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Article() {
    return ( <
        article className = "article" >
        <h1 className = "article__title"> Despre ITFest </h1>{" "} 
        <h3 className = "article__content" > { " " }
        ITFest este un proiect dedicat tinerilor pasionați de IT. Proiectul își propune, în primul rând, crearea unui spatiu eficient de învățare și transfer de cunoștințe printr-o serie de activități
ce includ workshopuri și competiții dedicate tinerilor pasionați de IT. 
        ITFest propune, de asemenea, și evenimente orientate către socializare: Lan Party-uri pentru gameri, precum și concursul iCONical pentru iubitorii de cosplay. { " " } 
        </h3> 
        <Link to = { "/evenimente" }> { " " } 
        <Button text="Vezi evenimentele" /> { " " } <
        /Link>{" "} 
        <
        /article>
    );
}

export default Article;