import { CustomMap } from "./CustomMap";

async function initMap() {
  const customMap = await CustomMap.create("map");
}

initMap();
