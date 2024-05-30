import cors from "@fastify/cors";
import fastify from "fastify";

const server = fastify({ logger: true })

server.register(cors, {
  origin: "*"
})

const teams = [
  { id: 1, name: "Alfa Romeo Racing", base: "Hinwil, Switzerland" },
  { id: 2, name: "AlphaTauri", base: "Faenza, Italy" },
  { id: 3, name: "Alpine F1 Team", base: "Enstone, United Kingdom" },
  { id: 4, name: "Aston Martin Cognizant F1 Team", base: "Silverstone, United Kingdom" },
  { id: 5, name: "Ferrari", base: "Maranello, Italy" },
  { id: 6, name: "Haas F1 Team", base: "Kannapolis, North Carolina, United States" },
  { id: 7, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 8, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 9, name: "Red Bull Racing", base: "Brackley, United Kingdom" },
  { id: 10, name: "Williams Racing", base: "Grove, United Kingdom" }
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Mercedes" },
  { id: 3, name: "Lando Norris", team: "McLaren" },
  { id: 4, name: "Valtteri Bottas", team: "Mercedes" },
  { id: 5, name: "Charles Leclerc", team: "Ferrari" },
  { id: 6, name: "Carlos Sainz", team: "Ferrari" },
  { id: 7, name: "Daniel Ricciardo", team: "McLaren" },
  { id: 8, name: "Pierre Gasly", team: "AlphaTauri" },
  { id: 9, name: "Sebastian Vettel", team: "Aston Martin Cognizant F1 Team" },
  { id: 10, name: "Fernando Alonso", team: "Alpine F1 Team" },
  { id: 11, name: "Esteban Ocon", team: "Alpine F1 Team" },
  { id: 12, name: "Lance Stroll", team: "Aston Martin Cognizant F1 Team" },
  { id: 13, name: "Kimi Räikkönen", team: "Alfa Romeo Racing" },
  { id: 14, name: "Antonio Giovinazzi", team: "Alfa Romeo Racing" },
  { id: 15, name: "Mick Schumacher", team: "Haas F1 Team" },
  { id: 16, name: "Nikita Mazepin", team: "Haas F1 Team" },
  { id: 17, name: "Yuki Tsunoda", team: "AlphaTauri" },
  { id: 18, name: "Nicholas Latifi", team: "Williams Racing" },
  { id: 19, name: "George Russell", team: "Williams Racing" },
];


server.get("/teams", async (request, response) => {
  response.type("application/json").code(200)

  return { teams }
})

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200)

  return { drivers }
})


interface DriverParames {
  id: string
}


server.get<{ Params: DriverParames }>("/drivers/:id", async (request, response) => {
  const id = parseInt(request.params.id)
  const drive = drivers.find(d => d.id === id)

  if (!drive) {
    response.type("application/json").code(404)
    return { message: "Driver Not Found" }
  }

  response.type("application/json").code(200)
  return { drive }
})

const { PORT } = process.env || 3000

server.listen({ port: Number(PORT) }, () => {
  console.log("Server is Running")
})