import { faker } from "@faker-js/faker";

function createStop() {
  const startAt = faker.date.soon();

  return {
    id: faker.string.uuid(),
    name: faker.location.city(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zip: faker.location.zipCode(),
    startAt,
    endAt: faker.date.soon({ refDate: startAt }),
  };
}

function createLoad() {
  return {
    id: faker.string.uuid(),
    number: faker.string.alphanumeric({ casing: 'upper', length: 6 }),
    customer: {
      id: faker.string.uuid(),
      name: faker.company.name(),
    },
    driver: {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
    },
    truck: {
      id: faker.string.uuid(),
      number: faker.string.numeric(4),
    },
    stops: [createStop(), createStop()],
  };
}

const loads = Array.from({ length: 10 }, createLoad);

console.log(JSON.stringify(loads, null, 2));
