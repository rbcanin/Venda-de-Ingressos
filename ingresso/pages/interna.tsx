import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Definição da estrutura do evento
interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
}

export default function EventDetails() {
  const router = useRouter();
  const { id } = router.query; // Captura o ID da URL
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    if (!id) return;

    // Faz a requisição para obter os detalhes do evento
    fetch(`/api/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data))
      .catch((err) => console.error("Erro ao buscar evento:", err));
  }, [id]);

  if (!event) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{event.name}</h1>
      <p>Data: {event.date}</p>
      <p>Local: {event.location}</p>
      <p>Descrição: {event.description}</p>
    </div>
  );
}
