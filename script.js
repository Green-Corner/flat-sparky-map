import { locations, typeColorMap } from "./locations.js";

function initMap() {
  const center = { lat: 28.0339, lng: 1.6596 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center,
    styles: [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{ color: "#000" }],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#ffc627" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#efefef" }],
      },
    ],
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  });

  // Create and add markers
  locations.forEach((loc) => {
    const fillColor = typeColorMap[loc.bucket] || "#808080"; // default grey
    const marker = new google.maps.Marker({
      position: { lat: loc.lat, lng: loc.lng },
      map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 15,
        fillColor: fillColor,
        fillOpacity: 1,
        strokeColor: "#FFF",
        strokeWeight: 2,
      },
      title: loc.name,
    });

    // const infoWindow = new google.maps.InfoWindow({
    //   content: `
    //     <div style="max-width: 250px;">
    //       <strong style="color:#8C1D40;">${loc.name}</strong><br />
    //       <span>${loc.moreinfo}</span><br />
    //       <span>${loc.bucket}</span><br />
    //       <a href="${loc.url}" target="_blank" style="color:#8C1D40;text-decoration:underline;">
    //         Learn more
    //       </a>
    //     </div>
    //   `,
    // });

    const infoWindow = new google.maps.InfoWindow({
      content: (() => {
        if (loc.bucket === "connection") {
          return `
            <div style="max-width: 250px;">
              <h3 style="color:#8C1D40;">${loc.name}</h3>
              <p>The ${loc.name} is a friendly, on-the-ground ASU alumni contact dedicated to building community and fostering meaningful connections among fellow Sun Devils.</p>
              <a href="${loc.url}" target="_blank" style="color:#8C1D40;text-decoration:underline;">
                Learn more
              </a>
            </div>
          `;
        } else {
          return `
            <div style="max-width: 250px;">
              <strong style="color:#8C1D40;">${loc.name}</strong><br />
              <p>The ${loc.name} unites ASU alumni through social gatherings, networking and community service projects, strengthening ties to each other and the university.</p>
              <a href="${loc.url}" target="_blank" style="color:#8C1D40;text-decoration:underline;">
                Learn more
              </a>
            </div>
          `;
        }
      })(),
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}

window.initMap = initMap;
