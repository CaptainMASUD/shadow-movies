import React, { useRef, useState, useEffect } from 'react';
import Cards from './Card';
import Pagination from './Pagination';
import './Mod.css';

const Cardsdata = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardData, setCardData] = useState([]);
  const cardsPerPage = 18;

  const fetchData = async () => {
    try {
      const response = await fetch('/cardData.json');
      const data = await response.json();
      setCardData(data);
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const cardsRef = useRef(null);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div ref={cardsRef}>
      <Cards cardData={currentCards} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(cardData.length / cardsPerPage)}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Cardsdata;
