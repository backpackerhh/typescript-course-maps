/// <reference types="@types/google.maps" />

import { Mappable } from "./Mappable";

export class CustomMap {
  map!: google.maps.Map;

  private constructor() {}

  static async create(mapContainerId: string): Promise<CustomMap> {
    const mapContainer = document.getElementById(mapContainerId) as HTMLElement;
    const customMap = new CustomMap();
    customMap.map = await this.loadMap(mapContainer);

    return customMap;
  }

  private static async loadMap(mapContainer: HTMLElement): Promise<google.maps.Map> {
    const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;

    return new Map(mapContainer, {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 2,
      mapId: "TS-Course-Map",
    });
  }

  async addMarker(mappable: Mappable) {
    const { AdvancedMarkerElement } = (await google.maps.importLibrary("marker")) as google.maps.MarkerLibrary;
    const { InfoWindow } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
    const marker = new AdvancedMarkerElement({ map: this.map, position: mappable.mappableData.location });

    marker.addListener("click", (e: PointerEvent) => {
      const infoWindow = new InfoWindow({
        content: mappable.mappableData.markerContent(),
      });

      infoWindow.open(this.map, marker);
    });
  }
}
