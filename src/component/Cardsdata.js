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
      title: 'as',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
      addtofav: 'Type : Movie '
    },
    
    {
      title: 'Avatar',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm',
      link: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      link2: 'https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/',
      year: 'Released year : 2020',
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



