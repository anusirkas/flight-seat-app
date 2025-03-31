import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function Preferences() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const flightId = searchParams.get("flightId");

  const [passengers, setPassengers] = useState(1);
  const [preferences, setPreferences] = useState({
    window: false,
    legroom: false,
    exit: false,
    together: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send data to backend later
    navigate(`/seats/${flightId}?passengers=${passengers}&${new URLSearchParams(preferences)}`);
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your preferences: </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">How many people are travelling?</label>
          <input
            type="number"
            min="1"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Preferences:</label>
          <div>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="window" checked={preferences.window} onChange={handleChange} />
              Next to the window
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="legroom" checked={preferences.legroom} onChange={handleChange} />
              More foot space
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="exit" checked={preferences.exit} onChange={handleChange} />
              Closer to the exit
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="together" checked={preferences.together} onChange={handleChange} />
              Seats together
            </label>
          </div>
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Recommend seats
        </button>
      </form>
    </div>
  );
}

export default Preferences;
