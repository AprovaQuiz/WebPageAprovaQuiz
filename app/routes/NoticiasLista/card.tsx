import React from 'react';

interface CardData {
  title: string;
  text: string;
  imageUrl: string;
  lastUpdated: string;
}


interface CardsProps {
  cards: CardData[];
}

const Cards: React.FC<CardsProps> = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div key={index} className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={card.imageUrl} className="img-fluid rounded-start" alt={card.title} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <p className="card-text">
                  <small className="text-body-secondary">{card.lastUpdated}</small>
                </p>
                <button className="btn btn-primary">Ver mais</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
