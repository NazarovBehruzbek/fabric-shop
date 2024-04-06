import React, { useState } from "react";
import "./collection.scss";
import { Row, Col, Pagination } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Data from '../Data/Data.js';

function Collection() {
    const [open, setOpen] = useState(true);
    const totalItems = Data.length;
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [activeOption, setActiveOption] = useState(null);
    const [sortedData, setSortedData] = useState(Data);

    const sortByIncreasingPrice = (data) => {
        return data.slice().sort((a, b) => a.price - b.price);
    }

    const sortByDecreasingPrice = (data) => {
        return data.slice().sort((a, b) => b.price - a.price);
    }

    const handleOptionClick = (option) => {
        setActiveOption(option);
        if (option === 'spring') {
            setSortedData(Data.slice(5, 10));
        } else if (option === 'winter') {
            setSortedData(Data.slice(0, 5));
        } else if (option === 'summer') {
            setSortedData(Data.slice(10, 15));
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleSortChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === 'increase') {
            setSortedData(sortByIncreasingPrice(sortedData));
        } else if (selectedValue === 'decrease') {
            setSortedData(sortByDecreasingPrice(sortedData));
        } else if (selectedValue === 'initial') {
            setSortedData(Data);
            setActiveOption(null);
        }
    };

    const renderItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
        const itemsToDisplay = sortedData.slice(startIndex, endIndex);

        return (
            <div className="wrapper-c">
                {itemsToDisplay.map((item, index) => (
                    <div className="card-c" key={index}>
                        <img src={item.img} alt={item.name} />
                        <h3>{item.nameEn}</h3>
                    </div>
                ))}
            </div>
        );
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
                                open ? <FontAwesomeIcon icon={faChevronDown} className="select-icon" onClick={handleToggle} /> : <FontAwesomeIcon icon={faChevronRight} className="select-icon" onClick={handleToggle} />
                            }
                            {
                                open ?
                                    <div className="options">
                                        <p
                                            className={`option-p ${activeOption === 'spring' ? 'active' : ''}`}
                                            onClick={() => handleOptionClick('spring')}
                                        >
                                            Spring Collection
                                        </p>

                                        <p
                                            className={`option-p ${activeOption === 'winter' ? 'active' : ''}`}
                                            onClick={() => handleOptionClick('winter')}
                                        >
                                            Winter Collection</p>
                                        <p
                                            className={`option-p ${activeOption === 'summer' ? 'active' : ''}`}
                                            onClick={() => handleOptionClick('summer')}
                                        >
                                            Summer Collection</p>

                                    </div> : ''
                            }
                        </div>
                    </Col>
                    <Col lg={19}>
                        <div className="page-items">
                            <h2>Collection</h2>
                            <p>Showing 1-{itemsPerPage} of {totalItems}</p>
                            <select name="cars" className="product" onChange={handleSortChange} defaultValue="initial">
                                <option value="initial">Initial Sort</option>
                                <option value="increase">Increase Sort</option>
                                <option value="decrease">Decrease Sort</option>
                            </select>
                            <div>
                                {renderItems()}
                                <Pagination
                                    current={currentPage}
                                    pageSize={itemsPerPage}
                                    total={totalItems}
                                    onChange={handlePageChange}
                                    style={{ marginTop: '30px' }}
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
