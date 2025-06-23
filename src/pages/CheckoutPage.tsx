import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

type LocationPickerProps = {
  position: LatLngTuple;
  setPosition: (pos: LatLngTuple) => void;
};

function LocationPicker({ position, setPosition }: LocationPickerProps) {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return <Marker position={position} icon={defaultIcon} />;
}

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [locationStep, setLocationStep] = useState<"map" | "form">("map");
  const [modals, setModals] = useState({ address: false, slot: false });
  const [position, setPosition] = useState<LatLngTuple>([17.385, 78.4867]);
  const [mapLocation, setMapLocation] = useState("Fetching...");
  const [location, setLocation] = useState("");
  const [slot, setSlot] = useState("");
  const [tip, setTip] = useState(0);

  const itemTotal = 5796;
  const discount = Math.min(1400, itemTotal);
  const taxes = 199;
  const totalAmount = itemTotal - discount + taxes;
  const amountToPay = totalAmount + tip;

  useEffect(() => {
    if (modals.address && locationStep === "form") {
      fetch(
        `https://us1.locationiq.com/v1/reverse?key=pk.09358e72a70920e6450bc441e4d3f7e6&lat=${position[0]}&lon=${position[1]}&format=json`
      )
        .then((res) => res.json())
        .then((data) => setMapLocation(data.display_name))
        .catch(() => setMapLocation("Failed to fetch location"));
    }
  }, [position, modals.address, locationStep]);

  const proceedToPayment = () => {
    if (!location || !slot) {
      alert("Please select both address and slot before proceeding.");
      return;
    }

    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const token = localStorage.getItem("token") || "";

    navigate("/payment", {
      state: {
        cartItems,
        totalAmount,
        tip,
        discount,
        token,
        address: {
          coordinates: position,
          fullAddress: mapLocation,
          label: "Home",
        },
        slot,
      },
    });
  };

  const handleSaveLocation = () => {
    setLocation(mapLocation);
    setModals({ ...modals, address: false });
    setLocationStep("map");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6"
    >
      {/* LEFT SECTION */}
      <div className="flex-1 space-y-4">
        <div className="text-sm font-medium text-green-700">Saving ₹{discount} on this order</div>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-600 mb-1">Address</p>
            <button
              onClick={() => setModals({ ...modals, address: true })}
              className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
            >
              {location || "Enter an address"}
            </button>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Slot</p>
            <button
              onClick={() => setModals({ ...modals, slot: true })}
              className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
            >
              {slot || "Select time & date"}
            </button>
          </div>
          <div className="border rounded p-3">
            <p className="text-sm text-gray-700 font-medium mb-2">Payment Method</p>
            <button
              onClick={proceedToPayment}
              className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
            >
              Proceed to pay
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-[320px] space-y-4">
        <div className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-sm font-semibold mb-4">Payment summary</h2>
          <div className="text-sm text-gray-600 space-y-2">
            <div className="flex justify-between"><span>Item total</span><span>₹{itemTotal}</span></div>
            <div className="flex justify-between text-green-700"><span>Pack discount</span><span>-₹{discount}</span></div>
            <div className="flex justify-between"><span>Taxes and Fee</span><span>₹{taxes}</span></div>
            <hr />
            <div className="flex justify-between font-medium"><span>Total amount</span><span>₹{totalAmount}</span></div>
            <div className="flex justify-between font-semibold text-black"><span>Amount to pay</span><span>₹{amountToPay}</span></div>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Add a tip</h3>
            <div className="flex gap-2 flex-wrap">
              {[10, 50, 100].map((val) => (
                <button
                  key={val}
                  className={`border px-3 py-1 rounded text-sm ${tip === val ? "bg-purple-600 text-white" : "hover:bg-gray-100"}`}
                  onClick={() => setTip(val)}
                >
                  ₹{val}
                </button>
              ))}
              <input
                type="number"
                placeholder="Custom"
                className="border rounded px-2 py-1 w-20"
                onChange={(e) => setTip(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ADDRESS MODAL */}
      <AnimatePresence>
        {modals.address && (
          <Dialog open={modals.address} onClose={() => setModals({ ...modals, address: false })} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-0 overflow-hidden">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6"
                >
                  {locationStep === "map" ? (
                    <div className="flex gap-6">
                      <div className="flex-1 h-[300px]">
                        <MapContainer center={position} zoom={13} scrollWheelZoom className="h-full w-full">
                          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                          <LocationPicker position={position} setPosition={setPosition} />
                        </MapContainer>
                      </div>
                      <div className="w-[300px] space-y-3">
                        <h2 className="text-lg font-semibold">Pick Location</h2>
                        <button className="bg-purple-600 text-white w-full py-2 rounded" onClick={() => setLocationStep("form")}>Next</button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <h2 className="text-lg font-semibold">Enter Address Details</h2>
                      <p className="text-sm text-gray-600">{mapLocation}</p>
                      <input type="text" placeholder="House Number" className="border rounded px-3 py-2 w-full" required />
                      <input type="text" placeholder="Landmark (Optional)" className="border rounded px-3 py-2 w-full" />
                      <input type="text" placeholder="Name" className="border rounded px-3 py-2 w-full" required />
                      <div className="flex gap-2">
                        <button className="border rounded px-3 py-2">Home</button>
                        <button className="border rounded px-3 py-2">Other</button>
                      </div>
                      <button className="bg-purple-600 text-white w-full py-2 rounded" onClick={handleSaveLocation}>Save and proceed</button>
                    </div>
                  )}
                </motion.div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>

      {/* SLOT MODAL */}
      <AnimatePresence>
        {modals.slot && (
          <Dialog open={modals.slot} onClose={() => setModals({ ...modals, slot: false })} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="bg-white rounded-lg shadow-lg w-full max-w-xl p-0 overflow-hidden">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6"
                >
                  <h2 className="text-lg font-semibold mb-4">Select time & date</h2>
                  <div className="mb-4 flex gap-2 overflow-x-auto">
                    {[1, 2, 3, 4].map((d) => {
                      const date = new Date();
                      date.setDate(date.getDate() + d);
                      const label = date.toLocaleDateString("en-IN", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      });
                      return (
                        <button
                          key={d}
                          onClick={() => setSlot(label + ", 10:00 AM")}
                          className={`border px-3 py-1 rounded ${slot.includes(label) ? "bg-purple-100 border-purple-600" : ""}`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                  <div className="grid grid-cols-4 gap-2 max-h-32 overflow-y-auto">
                    {Array.from({ length: 20 }, (_, i) => {
                      const hour = 8 + Math.floor(i / 2);
                      const min = i % 2 === 0 ? "00" : "30";
                      const time = `${hour}:${min} AM`;
                      return (
                        <button
                          key={i}
                          onClick={() => setSlot((prev) => (prev.split(",")[0] || "") + `, ${time}`)}
                          className={`border px-2 py-1 rounded text-sm ${slot.includes(time) ? "bg-purple-600 text-white" : ""}`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                  <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded" onClick={() => setModals({ ...modals, slot: false })}>Proceed to checkout</button>
                </motion.div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
