import { locations, typeColorMap } from "./locations.js";

function createThumbnailPlaceholder() {
  const placeholder = document.createElement("div");
  placeholder.className = "location-card__thumbnail-placeholder";
  placeholder.textContent = "Photo coming soon";
  return placeholder;
}

function createInfoWindowContent(location) {
  const content = document.createElement("article");
  content.className = "location-card";

  const media = document.createElement("div");
  media.className = "location-card__media";

  if (location.thumbnail) {
    const thumbnail = document.createElement("img");
    thumbnail.className = "location-card__thumbnail";
    thumbnail.src = location.thumbnail;
    thumbnail.alt = location.thumbnailAlt || `Flat Sparky at ${location.name}`;
    thumbnail.loading = "lazy";
    thumbnail.addEventListener("error", () => {
      media.replaceChildren(createThumbnailPlaceholder());
    });
    media.append(thumbnail);
  } else {
    media.append(createThumbnailPlaceholder());
  }
  content.append(media);

  const title = document.createElement("h3");
  title.className = "location-card__title";
  title.textContent = location.name;
  content.append(title);

  const submitter = document.createElement("p");
  submitter.className = "location-card__submitter";
  submitter.textContent = `Photo submitted by ${location.submittedBy || "Anonymous"}`;
  content.append(submitter);

  if (location.moreinfo) {
    const description = document.createElement("p");
    description.className = "location-card__description";
    description.textContent = location.moreinfo;
    content.append(description);
  }

  if (location.url) {
    const link = document.createElement("a");
    link.className = "location-card__link";
    link.href = location.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "View photo";
    content.append(link);
  }

  return content;
}

export function initMap() {
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

    const infoWindow = new google.maps.InfoWindow({
      content: createInfoWindowContent(loc),
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}
