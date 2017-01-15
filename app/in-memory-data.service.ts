import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
        {id: 11, name: 'Batman'},
        {id: 12, name: 'Spiderman'},
        {id: 13, name: 'Wonder Woman'},
        {id: 14, name: 'Superman'},
        {id: 15, name: 'Captain America'},
        {id: 16, name: 'Punisher'},
        {id: 17, name: 'Luke Cage'},
        {id: 18, name: 'Storm'},
        {id: 19, name: 'Wolverine'},
        {id: 20, name: 'Quail Boy'}
    ];
    return {heroes};
  }
}
