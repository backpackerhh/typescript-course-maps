/// <reference types="@types/google.maps" />

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
    });
  }
}
