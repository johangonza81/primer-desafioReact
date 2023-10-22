import React from "react"
import Button  from "react-bootstrap/Button"
import Tags from "./Tag"

const Boton = ({colorButton,textButton}) =>{
    return(
        <>
        <Button variant={colorButton} className="boton"><Tags bgColor={colorButton} text={textButton}/>{textButton}</Button>
        </>
    );
};
export default Boton;