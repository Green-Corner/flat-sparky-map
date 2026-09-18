# Flat Sparky Map

An interactive map showing the places Flat Sparky has visited around the world.

Each pin represents a location where someone photographed Flat Sparky. Selecting a pin shows the name of the person who submitted the image and information about the visit.

## Run Locally

This project uses the Google Maps JavaScript API and must be served through a local web server.

1. Add an authorized Google Maps API key in `index.html`.
2. Start a local server from the project directory.
3. Open the local server URL in a browser.

For example, with the VS Code Live Server extension, open `index.html` and select **Open with Live Server**.

## Project Files

- `index.html` loads the map.
- `script.js` creates the map, pins, and information windows.
- `locations.js` contains the location data.
- `style.css` controls the map layout and appearance.

## Location Data

Each entry in `locations.js` can include a submitter and thumbnail:

```js
{
  name: "Tempe, Arizona",
  lat: 33.4255,
  lng: -111.94,
  submittedBy: "Taylor Smith",
  thumbnail: "images/tempe.jpg",
  thumbnailAlt: "Flat Sparky in Tempe, Arizona",
  moreinfo: "Flat Sparky visiting the ASU Tempe campus.",
  url: "https://example.com/full-size-photo",
  bucket: "club",
}
```

`thumbnail` may be a local image path or a full image URL. Leave it empty when no image is available; the popup will show a placeholder until a photo is added. `submittedBy` falls back to "Anonymous" when it is empty.
