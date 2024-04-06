import React, { useState } from "react";
import "./collection.scss"
import { Row, Col, Pagination } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Data from '../Data/Data.js'
function Collection() {
    const [open, setOpen] = useState(true);
    const totalItems = Data.length; 
  const itemsPerPage = 6; 
  const [currentPage, setCurrentPage] = useState(1);
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (option) => {
    console.log('Clicked option:', option);
      setActiveOption(option);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const itemsToDisplay = Data.slice(startIndex, endIndex);

    return (
      <div className="wrapper-c">
        {itemsToDisplay.map((item, index) => (
          <div className="card-c" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  };

 const handleToggle = () => {
    setOpen(!open);
  };
    return (
        <>
            <div className="collection container">
                <Row>
                    <Col lg={5}>
                        <div className="search-item">
                            <input placeholder="Search here" />
                            <div className="icon"><FontAwesomeIcon className="icons" icon={faSearch} /></div>
                        </div>

                        <div className="select-item" >
                            <h2 onClick={handleToggle}>Collection</h2>
                            {
                                open ? <FontAwesomeIcon icon={faChevronDown} className="select-icon" onClick={handleToggle}/> : <FontAwesomeIcon icon={faChevronRight} className="select-icon" onClick={handleToggle}/>
                            }
                            {
                                open ? 
                                <div className="options">
                                    <p  
                                         className={activeOption === 'Spring Collection' ? 'active' : ''}
                                    onClick={() => handleOptionClick('Spring Collection')}
                                    >
                                        Spring Collection</p>
                                    <p  
                                     className={activeOption === 'Winter Collection' ? 'active' : ''}
                                    onClick={() => handleOptionClick('Winter Collection')}
                                    >
                                        Winter Collection</p>

                                </div> : ''
                            }
                        </div>


                    </Col>
                    <Col lg={19}>
                        <div className="page-items">
                            <h2>Collecction</h2>
                            <p>Showing 1-{itemsPerPage} of {totalItems}</p>
                            <select name="cars" className="product">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <div>
                                {renderItems()}
                                <Pagination
                                    current={currentPage}
                                    pageSize={itemsPerPage}
                                    total={totalItems}
                                    onChange={handlePageChange}
                                    style={{marginTop:'30px'}}
                                />

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Collection;