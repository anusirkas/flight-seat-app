import { useNavigate } from "react-router-dom";

const mockFlights = [
  {
    id: "flight-001",
    destination: "London",
    date: "2025-06-15",
    time: "10:30",
    price: 120,
  },
  {
    id: "flight-002",
    destination: "Berlin",
    date: "2025-06-16",
    time: "14:45",
    price: 95,
  },
  {
    id: "flight-003",
    destination: "Rome",
    date: "2025-06-17",
    time: "09:00",
    price: 110,
  },
];

function FlightList() {
  const navigate = useNavigate();

  const handleSelect = (flightId) => {
    navigate(`/preferences?flightId=${flightId}`);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose a flight ✈️</h1>
      <ul className="space-y-4">
        {mockFlights.map((flight) => (
          <li
            key={flight.id}
            className="border border-gray-300 rounded-lg p-4 flex justify-between items-center shadow-sm hover:shadow-md transition"
          >
            <div>
              <p className="text-lg font-semibold">{flight.destination}</p>
              <p className="text-sm text-gray-500">
                {flight.date} – {flight.time}
              </p>
              <p className="text-sm text-gray-700">Price: €{flight.price}</p>
            </div>
            <button
              onClick={() => handleSelect(flight.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightList;
