import React, { useState } from 'react';
import './Mod.css';

export default function Cards({ cardData }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="maincart">
      {cardData.map((card, index) => (
        <div key={index} className="cart col-3">
          <img src={card.image} alt={`Card ${index}`} />
          <p>{card.title}</p>
          <div className="info">
            <span className='year'>{card.year}</span><br />
            <span
              className='add'
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {card.addtofav}{' '}
              <i className={`fav ${hoveredCard === index ? 'fa-solid' : 'fa-regular'} fa-heart`} style={{ color: hoveredCard === index ? '#D24545' : '' }}></i>
            </span>
          </div>
          <button onClick={() => openLink(card.link)} className="btn1">
          <i class="fa-solid fa-play"></i> Watch Link
          </button>
          <br />
          <button onClick={()=>{openLink2(card.link2)}} className="btn2"><i class="fa-solid fa-download"></i> Download Link</button>
        </div>
      ))}
    </div>
  );
}

function openLink(link) {
  window.open(link);
}
function openLink2(link2) {
  window.open(link2);
}















// import React from 'react'
// import "./Mod.css";

// export default function Cards() {
//   return (
    
//        <div className="maincart">
//        <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealandbr.
//           </p>
//           <button onClick={btn1} className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Aquaman_and_the_Lost_Kingdom_poster.jpg/220px-Aquaman_and_the_Lost_Kingdom_poster.jpg"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button onClick={btn2} className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://img.cdno.my.id/thumb/w_200/h_300/the-beekeeper-1630856389.jpg"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button onClick={btn3} className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://img.cdno.my.id/thumb/w_200/h_300/lift-1630856408.jpg"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button onClick={btn4} className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://img.cdno.my.id/thumb/w_200/h_300/the-marvels-1630856042.jpg"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button onClick={btn5} className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//         <div id="wb1" className="cart col-3">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm"
//             alt="image lost"
//           />
//           <p>
//             Avatar: The Way of Water | 20th Century Studios Australia/New
//             Zealand
//           </p>
//           <button className="btn1">Watch Link</button>
//           <br />
//           <button className="btn2">Download Link</button>
//         </div>
//        </div>
      
    
//   )
// }
// function btn1 (){
//   window.open("https://ww4.fmovies.co/film/avatar-the-way-of-water-1630854576/")
// }
// function btn2 (){
//   window.open("https://ww4.fmovies.co/film/aquaman-and-the-lost-kingdom-1630856281/")
// }
// function btn3 (){
//   window.open("https://ww4.fmovies.co/film/the-beekeeper-1630856389/")
// }
// function btn4 (){
//   window.open("https://ww4.fmovies.co/film/lift-1630856408/")
// }
// function btn5 (){
//   window.open("https://ww4.fmovies.co/film/the-marvels-1630856042/")
// }

