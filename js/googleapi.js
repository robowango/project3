let map;
let mainMarker;
let infoWindow;

function initMap() {
  // Map Center Coordinates
  const center = { lat: 44.429, lng: -110.584 };

  // Initialize Map
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 8,
    mapTypeId: "terrain", // Enhanced map style
  });

  // Create a Main Marker
  mainMarker = new google.maps.Marker({
    position: center,
    map: map,
    title: "Main Marker",
    icon: {
      url: "https://maps.google.com/mapfiles/ms/icons/pink-dot.png", // Custom marker icon
    },
  });

  // Add Info Window to Main Marker
  infoWindow = new google.maps.InfoWindow({
    content: `
      <div style="font-family: Arial; line-height: 1.5;">
        <h3 style="color: #ff69b4; margin-bottom: 0.5em;">Custom Marker</h3>
        <p>This is an example of a custom marker with a styled info window.</p>
      </div>
    `,
  });

  // Add Click Event for Main Marker
  mainMarker.addListener("click", () => {
    infoWindow.open(map, mainMarker);
  });

  // Add Click Event to Map for Creating New Markers
  google.maps.event.addListener(map, "click", (event) => {
    createMarker(event.latLng);
  });
}

// Function to Create New Markers
function createMarker(location) {
  const newMarker = new google.maps.Marker({
    position: location,
    map: map,
    title: "New Marker",
    animation: google.maps.Animation.DROP, // Animation for marker appearance
  });

  // Add Info Window to the New Marker
  const newInfoWindow = new google.maps.InfoWindow({
    content: `
      <div style="font-family: Arial; line-height: 1.5;">
        <h4 style="color: #264653;">New Marker</h4>
        <p>You clicked at: <br><strong>Lat:</strong> ${location.lat().toFixed(4)}, <strong>Lng:</strong> ${location.lng().toFixed(4)}</p>
      </div>
    `,
  });

  // Show Info Window on Marker Click
  newMarker.addListener("click", () => {
    newInfoWindow.open(map, newMarker);
  });
} 
