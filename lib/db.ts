import { Database } from 'sqlite3';

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

export async function query(sql: string, params?: any[]) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err: Error | null, rows: any[]) => { // Added type annotation for 'err' parameter
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}