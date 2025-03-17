import { NextApiRequest, NextApiResponse } from "next";

const events = [
  {
    id: "1",
    name: "AgroPlay Festival",
    date: "15-06-2025",
    location: "Parque de Exposições Ney Braga, Londrina, PR",
    description:
      "O maior festival sertanejo da região, com Ana Castela, Luan Pereira e DJ Chris no Beat.",
    ticketsAvailable: 5000,
  },
  {
    id: "2",
    name: "Show Solidário AgroPlay",
    date: "20-07-2025",
    location: "Ginásio Moringão, Londrina, PR",
    description:
      "Evento beneficente com ingressos trocados por alimentos. Participações de Us Agroboy, Julia & Rafaela e Theo & Gabriel.",
    ticketsAvailable: 3000,
  },
  {
    id: "3",
    name: "Sunset AgroPlay",
    date: "10-08-2025",
    location: "Lago Igapó, Londrina, PR",
    description:
      "Show ao ar livre no pôr do sol com Luan Pereira, Ana Castela e convidados especiais.",
    ticketsAvailable: 2000,
  },
  {
    id: "4",
    name: "Rodeio AgroPlay Londrina",
    date: "05-09-2025",
    location: "Parque de Exposições Ney Braga, Londrina, PR",
    description:
      "Três dias de rodeio e muita música, com apresentações de Theo & Gabriel, Julia & Rafaela e Us Agroboy.",
    ticketsAvailable: 8000,
  },
  {
    id: "5",
    name: "Noite do Piseiro e Sertanejo",
    date: "25-09-2025",
    location: "Balada Wood’s, Londrina, PR",
    description:
      "Uma mistura de piseiro e sertanejo com DJ Chris no Beat e convidados.",
    ticketsAvailable: 1000,
  },
  {
    id: "6",
    name: "Arraiá da AgroPlay",
    date: "10-10-2025",
    location: "Praça Nishinomiya, Londrina, PR",
    description:
      "Festa junina fora de época com muita música, comida típica e quadrilha.",
    ticketsAvailable: 3500,
  },
  {
    id: "7",
    name: "Acústico AgroPlay",
    date: "20-10-2025",
    location: "Teatro Marista, Londrina, PR",
    description:
      "Show intimista com versões acústicas de grandes sucessos sertanejos.",
    ticketsAvailable: 800,
  },
  {
    id: "8",
    name: "Viva AgroPlay",
    date: "05-11-2025",
    location: "Shopping Catuaí, Londrina, PR",
    description:
      "Pocket show gratuito na praça de eventos do shopping com Ana Castela e Us Agroboy.",
    ticketsAvailable: 1500,
  },
  {
    id: "9",
    name: "Réveillon Sertanejo AgroPlay",
    date: "31-12-2025",
    location: "Aterro do Lago Igapó, Londrina, PR",
    description:
      "Virada do ano com fogos de artifício e shows de Luan Pereira e Julia & Rafaela.",
    ticketsAvailable: 7000,
  },
  {
    id: "10",
    name: "Carnaval AgroPlay",
    date: "15-02-2026",
    location: "Avenida Higienópolis, Londrina, PR",
    description:
      "Bloco sertanejo elétrico comandado por Ana Castela, Theo & Gabriel e DJ Chris no Beat.",
    ticketsAvailable: 10000,
  },
  {
    id: "11",
    name: "Churrasco AgroPlay",
    date: "15-02-2026",
    location: "Avenida Higienópolis, Londrina, PR",
    description:
      "Churras comandado por Ana Castela, Theo & Gabriel e DJ Chris no Beat.",
    ticketsAvailable: 0,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(events); // Retorna a lista de eventos com ingressos disponíveis
  } else {
    return res.status(405).json({ message: "Método não permitido" });
  }
}
