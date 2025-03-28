import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Create a simple mock-seating plan (6 rows × 4 seats)
const generateSeats = () => {
  const seats = [];
  const rows = 6;
  const cols = ["A", "B", "C", "D"];
  for (let row = 1; row <= rows; row++) {
    for (let col of cols) {
      seats.push({
        id: `${col}${row}`,
        occupied: Math.random() < 0.3, // 30% chance taken
      });
    }
  }
  return seats;
};

function SeatSelection() {
  const { flightId } = useParams();
  const [searchParams] = useSearchParams();
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    // Here we can get later data with backend
    const allSeats = generateSeats();
    setSeats(allSeats);
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Seat Recommendations for flight: {flightId}</h2>

      <div className="grid grid-cols-4 gap-4">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`p-4 border rounded text-center font-semibold ${
              seat.occupied
                ? "bg-gray-300 text-gray-500"
                : "bg-green-100 hover:bg-green-200 cursor-pointer"
            }`}
          >
            {seat.id}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeatSelection;
