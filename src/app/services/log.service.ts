import { Injectable } from '@angular/core';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated Components', date: new Date('12/27/2019 12:54:23')},
      {id: '2', text: 'Added Bootstrap', date: new Date('12/28/2019 09:33:23')},
      {id: '3', text: 'Added Logs Component', date: new Date('12/29/2019 11:00:23')}
    ];
  }

  getLogs() {
    return this.logs;
  }
}
