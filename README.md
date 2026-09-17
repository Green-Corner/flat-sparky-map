# 🌍 ASU Alumni Map

A dynamic, interactive map for the [Arizona State University Alumni Association](https://alumni.asu.edu/chapters), showcasing chapters, clubs, and international connections all around the world. This project uses the **Google Maps JavaScript API** to render live map pins for each alumni group.

## 🗺️ Live Map Features

- Interactive Google Map display
- Custom pin colors based on group type:
  - **Chapters** — Maroon (`#8C1D40`)
  - **Clubs** — Blue (`#00A3E0`)
  - **Connections** — Green (`#78BE20`)
- Clickable pins open info windows with:
  - Group name
  - Description
  - Direct link to the alumni page

## 🎨 ASU Brand Compliance

This project follows [ASU Brand Standards](https://brandguide.asu.edu/brand-elements/design/color), particularly the official university color palette. Each map pin color reflects these brand colors to ensure visual consistency with the ASU identity.

## 📦 Tech Stack

- **JavaScript (ES Modules)**
- **Google Maps JavaScript API**
- **HTML5/CSS3**

## 📁 Project Structure

📦 alumni-map/
├── index.html # Main HTML file
├── script.js # Initializes the map & markers
├── locations.js # JSON-like list of all alumni group data
├── styles.css # Optional CSS styles
└── README.md # You're reading it!

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/alumni-map.git
cd alumni-map

2. Add Your Google Maps API Key
Replace YOUR_API_KEY in index.html:

html
Copy
Edit
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
You can get your API key from Google Maps Console.

3. Run Locally
You’ll need a local server due to module imports. Run with:

bash
Copy
Edit
npx serve .
# or
python -m http.server
Then open http://localhost:5000 or similar in your browser.

📌 Contribution
PRs welcome! If you’d like to add or edit alumni groups or features, just:

Update locations.js with new entries.

Open an issue for improvements.
```
