import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LOCATIONIQ_API_KEY = "pk.09358e72a70920e6450bc441e4d3f7e6";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLocationSelect?: (location: string) => void;
}

function LocationPicker({
  position,
  setPosition,
}: {
  position: [number, number];
  setPosition: (pos: [number, number]) => void;
}) {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return <Marker position={position} icon={defaultIcon} />;
}

export default function LocationModal({
  isOpen,
  onClose,
  onLocationSelect,
}: Props) {
  const [position, setPosition] = useState<[number, number]>([17.385, 78.4867]); // Hyderabad default
  const [locationName, setLocationName] = useState("Fetching...");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    const recents = JSON.parse(localStorage.getItem("recentLocations") || "[]");
    setRecent(recents);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      fetchReverse(position);
    }
  }, [position, isOpen]);

  const fetchReverse = async (pos: [number, number]) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://us1.locationiq.com/v1/reverse?key=${LOCATIONIQ_API_KEY}&lat=${pos[0]}&lon=${pos[1]}&format=json`
      );
      const data = await res.json();
      setLocationName(data.display_name);
    } catch {
      setLocationName("Error fetching location");
    }
    setLoading(false);
  };

  const handleSearch = async () => {
    if (query.trim().length < 3) return;
    try {
      const res = await fetch(
        `https://api.locationiq.com/v1/autocomplete?key=${LOCATIONIQ_API_KEY}&q=${encodeURIComponent(
          query
        )}&limit=5&countrycodes=in&format=json`
      );
      const data = await res.json();
      setSuggestions(data);
    } catch (err) {
      console.error("Autocomplete error:", err);
    }
  };

  const saveRecent = (loc: string) => {
    const updated = [loc, ...recent.filter((r) => r !== loc)].slice(0, 5);
    localStorage.setItem("recentLocations", JSON.stringify(updated));
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* 👇 Fixed overlay for newer headlessui versions */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl z-50 p-6">
        <Dialog.Title className="text-xl font-semibold mb-4">
          📍 Choose your Location
        </Dialog.Title>

        {/* Search bar */}
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Search city, pincode, area"
            className="border w-full rounded px-3 py-2 text-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-purple-600 text-white px-4 rounded hover:bg-purple-700"
          >
            Search
          </button>
        </div>

        {/* Suggestions list */}
        {suggestions.length > 0 && (
          <ul className="mb-3 border rounded max-h-40 overflow-y-auto">
            {suggestions.map((item, idx) => (
              <li
                key={idx}
                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setPosition([parseFloat(item.lat), parseFloat(item.lon)]);
                  setQuery("");
                  setSuggestions([]);
                }}
              >
                {item.display_name}
              </li>
            ))}
          </ul>
        )}

        {/* Recent locations */}
        {recent.length > 0 && (
          <div className="mb-3 text-sm text-gray-600">
            <p className="font-medium mb-1">🕒 Recent:</p>
            <ul className="flex flex-wrap gap-2">
              {recent.map((r, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setLocationName(r);
                    onLocationSelect?.(r);
                    onClose();
                  }}
                  className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded cursor-pointer"
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Map */}
        <div className="h-[300px] rounded overflow-hidden mb-4 border border-gray-300">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; OpenStreetMap'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationPicker position={position} setPosition={setPosition} />
          </MapContainer>
        </div>

        {/* Display location */}
        <div className="mb-4 text-sm">
          {loading ? (
            <p className="text-gray-500">⏳ Fetching location...</p>
          ) : (
            <p className="text-gray-800">📌 {locationName}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded text-sm hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (onLocationSelect) {
                onLocationSelect(locationName);
                saveRecent(locationName);
              }
              onClose();
            }}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Confirm Location
          </button>
        </div>
      </div>
    </Dialog>
  );
}
