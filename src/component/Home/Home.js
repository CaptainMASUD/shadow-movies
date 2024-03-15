import React, { useState } from 'react';
import Slidebar from '../Slidebar';
import Filters from '../Filters';
import Cardsdata from '../Cardsdata';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8; 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Slidebar/>
      <Filters/>
      <Cardsdata currentPage={currentPage} cardsPerPage={cardsPerPage} handlePageChange={handlePageChange} />
    </>
  );
}
