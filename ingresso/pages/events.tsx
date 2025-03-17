import EventCard from "@/components/EventCard";
import { useEffect, useState } from "react";

import * as S from "@/styles/events-styles";

// Tipagem do evento
interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  ticketsAvailable: number;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events"); // Chamando API interna do Next.js
      if (!response.ok) {
        throw new Error("Erro ao buscar eventos");
      }
      const data = await response.json();
      setEvents(data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) return <div>Carregando eventos...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <S.Events>
      <div className="container">
        <h1>Lista de Eventos</h1>
        <div className="card">
          {events
            .filter((event) => event.ticketsAvailable > 0)
            .map((event) => (
              <EventCard
                key={event.id}
                name={event.name}
                date={event.date}
                location={event.location}
                description={event.description}
                id={event.id}
                ticketsAvailable={0}
              />
            ))}
        </div>
      </div>
    </S.Events>
  );
};

export default Events;
