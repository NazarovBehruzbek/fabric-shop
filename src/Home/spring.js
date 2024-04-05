import React from "react";
import "./winter.scss"
import Data from "../Data/Data" 
import useSharedStore from "../Store/store";
import { useNavigate } from "react-router-dom";
export default function Spring (){
    const navigate = useNavigate();
    const { id, setId } = useSharedStore();
    const handleClick = (id) => {
        setId(id);
        navigate(`/product/${id}`);
        window.scrollTo(0, 0);
    }
    return(
        <>
        <div className="container">
           <div className="winter">
           <h2>Spring collection</h2>
            <p>Tashkent Natural product</p>
           </div>
           <div className="wrapper">
            {
                Data.slice(5, 10).map((item, index) => {
                    return(
                        <div className="card" key={index} onClick={()=>handleClick(item.id)}> 
                            <img src={item.img} alt={item.name}/>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    )
                })
            }
           </div>
        </div>
        </>
    )
}