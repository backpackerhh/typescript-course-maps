export type MappableData = {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
};

export interface Mappable {
  mappableData: MappableData;
}
