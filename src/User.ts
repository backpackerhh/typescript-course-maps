import { faker } from "@faker-js/faker";
import { Mappable, MappableData } from "./Mappable";

export class User implements Mappable {
  name: string;
  mappableData: MappableData;

  constructor() {
    this.name = faker.person.fullName();
    this.mappableData = {
      location: {
        lat: faker.location.latitude(),
        lng: faker.location.latitude(),
      },
      markerContent: () => `
        <div>
          <h1>${this.name}</h1>
        </div>
      `,
    };
  }
}
