import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const wireHouse = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    const loc = event.target.location.value;
    const dist = wireHouse.find((center) =>
      center.district.toLowerCase().includes(loc.toLowerCase())
    );
    if (dist) {
      const coord = [dist.latitude, dist.longitude];
      // got to location
      mapRef.current.flyTo(coord, 14);
    }
  };
  return (
    <div className="container mx-auto py-5 lg:px-20 px-10">
      <div className="head space-y-5 border-b pb-10 ">
        <h1 className="text-secondary text-5xl font-extrabold">
          We are available in 64 districts
        </h1>
        {/* search form */}
        <form
          className="search mt-10 relative max-w-md"
          onSubmit={handleSearch}
        >
          <label className="input rounded-full flex items-center gap-2 pr-2 border border-gray-300">
            <svg
              className="h-5 w-5 opacity-50 ml-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              name="location"
              required
              placeholder="Search here"
              className="grow border-none outline-none bg-transparent py-3"
            />
            <button className="btn bg-[#C4F82A] hover:bg-[#b5e625] text-black font-medium py-2 px-6 rounded-full whitespace-nowrap absolute right-0">
              Search
            </button>
          </label>
        </form>
      </div>
      <div className="body py-5 space-y-5 ">
        <h1 className="text-2xl text-secondary font-bold">
          We deliver almost all over Bangladesh
        </h1>
        <div className="map my-5 h-150 lg:w-7xl w-full flex mx-auto ">
          <MapContainer
            className="lg:w-7xl w-full h-150"
            center={position}
            zoom={9}
            scrollWheelZoom={false}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {wireHouse.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <strong>{center.district} </strong> <br /> Service Area:{" "}
                  {center.covered_area.join(", ")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
