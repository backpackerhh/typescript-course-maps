import { faker } from "@faker-js/faker";
import { Mappable, MappableData } from "./Mappable";

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  mappableData: MappableData;

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.mappableData = {
      location: {
        lat: faker.location.latitude(),
        lng: faker.location.latitude(),
      },
      markerContent: () => `
        <div>
          <h1>${this.name}</h1>
          <h2>${this.catchPhrase}</h2>
        </div>
      `,
    };
  }
}
