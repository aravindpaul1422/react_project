import React from "react";

const LocationButton = ({ latitude, longitude, placeName }) => {
    const handleRedirect = () => {
        let url;
        if (latitude && longitude) {
            url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        } else if (placeName) {
            url = `https://www.google.com/maps?q=${encodeURIComponent(placeName)}`;
        } else {
            console.error("No location provided!");
            return;
        }
        window.open(url, "_blank");
    };

    return (
        <div>
        <button onClick={handleRedirect}>
            Open in Google Maps
        </button>
        <h1>Hiii</h1>
        </div>
    );
};


export default LocationButton;
