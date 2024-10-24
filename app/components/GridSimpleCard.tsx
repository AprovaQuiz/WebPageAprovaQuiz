/* eslint-disable react/prop-types */
import '../styles/simpleCard.css';

interface GridProps {
    cards: { title: string; imgSrc: string }[];
}
  
export const Grid: React.FC<GridProps> = ({ cards }) => {
    return (
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {cards.map((card, index) => (
          <div key={index} className="col">
            <div className="card custom-card">
              <div
                className="card-background"
                style={{ backgroundImage: `url(${card.imgSrc})` }}
              >
                <div className="gradient-overlay">
                  <h5 className="card-title">{card.title}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  };