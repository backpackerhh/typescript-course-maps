/// <reference types="@types/google.maps" />

(async () => {
  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;
  const mapDiv = document.getElementById("map") as HTMLElement;
  const map = new Map(mapDiv, {
    center: { lat: 27.92086, lng: -15.5706 }, // Gran Canaria, Canary Islands, Spain
    zoom: 11,
  }) as google.maps.Map;
})();
