import { Injectable } from '@angular/core';

export interface IData {
  name: string;
  surname: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = [
    { name: 'John', surname: 'Doe', age: 25 },
    { name: 'Jane', surname: 'Smith', age: 30 },
    { name: 'Mike', surname: 'Johnson', age: 35 },
    { name: 'Sarah', surname: 'Williams', age: 28 }
  ];

  getData() {
    return this.data;
  }
}
