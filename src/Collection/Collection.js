import React, { useState } from "react";
import "./collection.scss"
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
function Collection() {
    const [open, setOpen] = useState(true);
    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };
    
    return (
        <>
            <div className="collection container">
                <Row>
                    <Col lg={5}>
                        <div className="search-item">
                            <input placeholder="Search here"/>
                            <div className="icon"><FontAwesomeIcon className="icons" icon={faSearch}/></div>
                        </div>
                    
                       <div className="select-item" onClick={handleToggle}> 
                       <h2>Collection</h2>
                      {
                        open? <FontAwesomeIcon icon={faChevronDown} className="select-icon"/>: <FontAwesomeIcon icon={faChevronRight} className="select-icon"/>
                      }
                      {
                        open? <div className="options">
                        <p>Spring Collection</p>
                        <p>Winter Collection</p>
                
                    </div>:''
                       }
                       </div>
                    

                    </Col>
                    <Col lg={19}>
                        <div className="page-items">
                            <h2>Collecction</h2>
                            <p>Showing 1-16 of 76</p>
                            <select name="cars" className="product">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Collection;