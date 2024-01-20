import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

async function initMap() {
  const user = new User();
  const company = new Company();
  const customMap = await CustomMap.create("map");
  await customMap.addMarker(user);
  await customMap.addMarker(company);
}

initMap();
