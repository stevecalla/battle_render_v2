import pg from 'pg';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    database: process.env.DB_NAME,
    port: 5432,
});

fs.readFile('./server/db/character.json', 'utf8', async (err, data) => {
    if (err) {
        console.error('Error reading JSON file', err);
        return;
    }

    const characters = JSON.parse(data);

    const client = await pool.connect();

    await client.query('BEGIN');

    for (const character of characters) {
      const { name, health, attack, defense, speed } = character;

      const query = `
        INSERT INTO character (name, health, attack, defense, speed)
        VALUES ($1, $2, $3, $4, $5)
      `;
      
      await client.query(query, [name, health, attack, defense, speed]);
    }

    await client.query('COMMIT');

    console.log('Characters inserted successfully.');
    client.release();
});
