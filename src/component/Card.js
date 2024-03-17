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



