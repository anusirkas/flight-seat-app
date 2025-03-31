import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Genereerime istmed
const generateSeats = () => {
  const seats = [];
  const rows = 6;
  const cols = ["A", "B", "C", "D"];
  for (let row = 1; row <= rows; row++) {
    for (let col of cols) {
      seats.push({
        id: `${col}${row}`,
        row,
        col,
        occupied: Math.random() < 0.3,
      });
    }
  }
  return seats;
};

function SeatSelection() {
  const { flightId } = useParams();
  const [searchParams] = useSearchParams();
  const [seats, setSeats] = useState([]);
  const [recommendedSeats, setRecommendedSeats] = useState([]);

  const preferences = {
    window: searchParams.get("window") === "true",
    legroom: searchParams.get("legroom") === "true",
    exit: searchParams.get("exit") === "true",
    together: searchParams.get("together") === "true",
    passengers: parseInt(searchParams.get("passengers") || "1"),
  };

  useEffect(() => {
    const allSeats = generateSeats();
    setSeats(allSeats);

    let freeSeats = allSeats.filter((seat) => !seat.occupied);

    if (preferences.window) {
      freeSeats = freeSeats.filter((s) => s.col === "A" || s.col === "D");
    }

    if (preferences.legroom) {
      freeSeats = freeSeats.filter((s) => s.row === 1);
    }

    if (preferences.exit) {
      freeSeats = freeSeats.filter((s) => s.row === 6);
    }

    if (preferences.together && preferences.passengers > 1) {
      const grouped = groupAdjacentSeats(freeSeats, preferences.passengers);
      if (grouped.length > 0) {
        setRecommendedSeats(grouped[0]);
        return;
      }
    }

    setRecommendedSeats(freeSeats.slice(0, preferences.passengers));
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Seat Recommendations for flight: {flightId}
      </h2>

      {/* 👉 Siin on nüüd korrektne grid koos Tailwindi klassidega */}
      <div className="grid grid-cols-4 gap-4 w-fit mx-auto bg-white p-4 rounded shadow">
        {seats.map((seat) => {
          const isRecommended = recommendedSeats.find((s) => s.id === seat.id);
          return (
            <div
              key={seat.id}
              className={`w-16 h-16 flex items-center justify-center border rounded font-semibold text-center transition 
                ${
                  seat.occupied
                    ? "bg-gray-300 text-gray-500"
                    : isRecommended
                    ? "bg-blue-500 text-white animate-pulse"
                    : "bg-green-100 hover:bg-green-200 cursor-pointer"
                }`}
            >
              {seat.id}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Kasulik utiliit: järjestikused kohad samas reas
function groupAdjacentSeats(seats, count) {
  const grouped = [];
  const byRow = {};

  seats.forEach((s) => {
    if (!byRow[s.row]) byRow[s.row] = [];
    byRow[s.row].push(s);
  });

  for (const row in byRow) {
    const rowSeats = byRow[row].sort((a, b) => a.col.localeCompare(b.col));
    for (let i = 0; i <= rowSeats.length - count; i++) {
      const chunk = rowSeats.slice(i, i + count);
      if (chunk.length === count) {
        grouped.push(chunk);
      }
    }
  }
  return grouped;
}

export default SeatSelection;