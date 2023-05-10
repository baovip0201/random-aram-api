import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRandomPeople(people: string[]) {
    const selectedPeople = [];
    while (selectedPeople.length < people.length) {
      const randomIndex = Math.floor(Math.random() * people.length);
      const randomPerson = people[randomIndex];
      if (!selectedPeople.includes(randomPerson)) {
        selectedPeople.push(randomPerson);
      }
    }
    return selectedPeople;
  }
}
