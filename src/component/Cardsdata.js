// Cardsdata.js

import React, {  useRef, useState } from 'react';
import "./Card.js";
import Cards from './Card'; 

import Pagination from './Pagination'; 
import './Mod.css';

const Cardsdata = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 18; 

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const cardData = [
    {
      title: 'Poor Things',
      image: 'https://img.cdno.my.id/thumb/w_200/h_300/poor-things-1630856214.jpg',
      link: 'https://ww4.fmovies.co/film/poor-things-1630856214/',
      link2: 'https://ww4.fmovies.co/film/poor-things-1630856214/',
      year: 'Released year : 2023',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Dune: Part Two',
      image: 'https://img.cdno.my.id/thumb/w_200/h_300/dune-part-two-1630856676.jpg',
      link: 'https://ww4.fmovies.co/film/land-of-bad-1630856616/',
      link2: 'https://ww4.fmovies.co/film/land-of-bad-1630856616/',
      year: 'Released year : 2024',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Land of Bad',
      image: 'https://img.cdno.my.id/thumb/w_200/h_300/land-of-bad-1630856616.jpg',
      link: 'https://ww4.fmovies.co/film/land-of-bad-1630856616/',
      link2: 'https://ww4.fmovies.co/film/land-of-bad-1630856616/',
      year: 'Released year : 2024',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Madame Web',
      image: 'https://img.cdno.my.id/thumb/w_200/h_300/madame-web-1630856608.jpg',
      link: 'https://ww4.fmovies.co/film/madame-web-1630856608/',
      link2: 'https://ww4.fmovies.co/film/madame-web-1630856608/',
      year: 'Released year : 2024',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Anyone But You',
      image: 'https://img.cdno.my.id/thumb/w_200/h_300/anyone-but-you-1630856291.jpg',
      link: 'https://ww4.fmovies.co/film/argylle-1630856531/',
      link2: 'https://ww4.fmovies.co/film/argylle-1630856531/',
      year: 'Released year : 2024',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Argylle',
      image: 'https://img.cdno.my.id/thumb/w_200/h_300/argylle-1630856531.jpg',
      link: 'https://ww4.fmovies.co/film/argylle-1630856531/',
      link2: 'https://ww4.fmovies.co/film/argylle-1630856531/',
      year: 'Released year : 2024',
      addtofav: 'Type : Movie '
    },
    {
      title: 'The Beekeeper',
      image: 'https://img.cdno.my.id/thumb/w_200/h_300/the-beekeeper-1630856389.jpg',
      link: 'https://ww4.fmovies.co/film/the-beekeeper-1630856389/',
      link2: 'https://ww4.fmovies.co/film/the-beekeeper-1630856389/',
      year: 'Released year : 2024',
      addtofav: 'Type : Movie '
    },
  
    {
      title: 'Aquaman and the Lost Kingdom',
      image: 'https://img.cdno.my.id/thumb/w_200/h_300/aquaman-and-the-lost-kingdom-1630856281.jpg',
      link: 'https://ww4.fmovies.co/film/aquaman-and-the-lost-kingdom-1630856281/',
      link2: 'https://ww4.fmovies.co/film/aquaman-and-the-lost-kingdom-1630856281/',
      year: 'Released year : 2024',
      addtofav: 'Type : Movie '
    },
  
    {
      title: 'Wonka',
      image: 'https://img.cdno.my.id/thumb/w_200/h_300/wonka-1630856207.jpg',
      link: 'https://ww4.fmovies.co/film/wonka-1630856207/',
      link2: 'https://ww4.fmovies.co/film/wonka-1630856207/',
      year: 'Released year :  2023',
      addtofav: 'Type : Movie '
    },
    {
      title: 'The Marvels',
      image: 'https://img.cdno.my.id/thumb/w_200/h_300/the-marvels-1630856042.jpg',
      link: 'https://ww4.fmovies.co/film/the-marvels-1630856042/',
      link2: 'https://ww4.fmovies.co/film/the-marvels-1630856042/',
      year: 'Released year :  2023',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Lift',
      image: 'https://img.cdno.my.id/thumb/w_200/h_300/lift-1630856408.jpg',
      link: 'https://ww4.fmovies.co/film/lift-1630856408/',
      link2: 'https://ww4.fmovies.co/film/lift-1630856408/',
      year: 'Released year :  2023',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Society of the Snow',
      image: 'https://img.cdno.my.id/thumb/w_200/h_300/society-of-the-snow-1630856355.jpg',
      link: 'https://ww4.fmovies.co/film/society-of-the-snow-1630856355/',
      link2: 'https://ww4.fmovies.co/film/society-of-the-snow-1630856355/',
      year: 'Released year :  2023',
      addtofav: 'Type : Movie '
    },
  
    {
      title: 'Rebel Moon: Part One - A Child of Fire',
      image: 'https://img.cdno.my.id/thumb/w_200/h_300/rebel-moon-part-one-a-child-of-fire-1630856289.jpg',
      link: 'https://ww4.fmovies.co/film/rebel-moon-part-one-a-child-of-fire-1630856289/',
      link2: 'https://ww4.fmovies.co/film/rebel-moon-part-one-a-child-of-fire-1630856289/',
      year: 'Released year :  2023',
      addtofav: 'Type : Movie '
    },
  
  ];

  const cardsRef = useRef(null);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div ref={cardsRef}>
      <Cards cardData={currentCards}/>
      <Pagination currentPage={currentPage} totalPages={Math.ceil(cardData.length / cardsPerPage)} handlePageChange={handlePageChange} />
    </div>
  );
}

export default Cardsdata;



