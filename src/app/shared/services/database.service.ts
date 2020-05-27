import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import {DatabaseTablesEnum} from '../enums/databaseTables.enum';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  public static generateId(): string {
    return uuidv4();
  }

  saveEntity<T>(table: DatabaseTablesEnum, data: Omit<T, 'id'>): T {
    const dataWithId = {
      ...data,
      id: DatabaseService.generateId()
    };
    const existedTable = JSON.parse(localStorage.getItem(table));
    if (!existedTable) {
      const newTable = [dataWithId];
      localStorage.setItem(table, JSON.stringify(newTable));
    } else {
      existedTable.push(dataWithId);
      localStorage.setItem(table, JSON.stringify(existedTable));
    }
    return JSON.parse(JSON.stringify(dataWithId));
  }

  public getAll<T>(table: DatabaseTablesEnum): T[] {
    return JSON.parse(localStorage.getItem(table));
  }

  public getById<T>(table: DatabaseTablesEnum, id: string): T | null {
    const existedTable = JSON.parse(localStorage.getItem(table));
    if (existedTable) {
      return existedTable.find(el => el.id === id);
    } else {
      return null;
    }
  }
}
