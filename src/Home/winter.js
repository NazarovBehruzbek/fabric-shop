import React from "react";
import "./winter.scss"
import Data from "../Data/Data" 
import useSharedStore from "../Store/store";
import { useNavigate } from "react-router-dom";
export default function Winter (){
    const navigate = useNavigate();
    const { setId } = useSharedStore();
    const handleClick = (id) => {
        setId(id);        
        navigate(`/product/${id}`);
        window.scrollTo(0, 0);
    }
    return(
        <>
        <div className="container">
           <div className="winter">
           <h2>Winter collection</h2>
            <p>Tashkent Natural product</p>
           </div>
           <div className="wrapper">
            {
                Data.slice(0, 5).map((item, index) => {
                    return(
                        <div className="card" key={index} onClick={()=>handleClick(item.id)}> 
                            <img src={item.img} alt={item.name}/>
                            <h3>{item.nameEn}</h3>
                        </div>
                    )
                })
            }
           </div>
        </div>
        </>
    )
}