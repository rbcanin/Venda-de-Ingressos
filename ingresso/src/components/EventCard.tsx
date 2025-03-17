import Link from "next/link";
import React, { useState } from "react";
import * as S from "../styles/events-styles";

// Tipagem das props do evento
interface EventCardProps {
  name: string;
  date: string;
  location: string;
  description: string;
  id: string;
  ticketsAvailable: number;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  name,
  date,
  location,
  description,
  ticketsAvailable,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleBuyTicket = () => {
    setShowPopup(true);
  };

  return (
    <S.Events>
      <div className="card-description">
        <h2>{name}</h2>
        <p>{date}</p>
        <p>{location}</p>
        <p>{description}</p>

        <button onClick={handleBuyTicket} disabled={ticketsAvailable === 0}>
          Comprar Ingresso
        </button>
      </div>

      {showPopup && (
        <div className="popup">
          <p>
            Compra efetuada com sucesso para o evento <strong>{name}</strong>!
          </p>
          <p>Seu ingresso foi enviado para test@test.com</p>
          <button onClick={() => setShowPopup(false)}>Fechar</button>
        </div>
      )}
    </S.Events>
  );
};

export default EventCard;
