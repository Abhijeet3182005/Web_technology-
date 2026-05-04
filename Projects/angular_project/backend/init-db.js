require('dotenv').config();
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function setupDatabase() {
    try {
        console.log('Connecting to MySQL Server to ensure DB exists...');
        
        // Connect WITHOUT a database to create it first
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        });

        // Create Database if it doesn't exist
        const dbName = process.env.DB_NAME;
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
        console.log(`Database '${dbName}' verified/created.`);

        await connection.changeUser({ database: dbName });

        // Read schema file
        const schemaPath = path.join(__dirname, 'schema.sql');
        let schemaSql = fs.readFileSync(schemaPath, 'utf8');

        // Note: mysql2 query method doesn't support multiple statements securely by default
        // So we will split by ';' and execute one by one
        const statements = schemaSql.split(';').filter(stmt => stmt.trim() !== '');

        console.log('Executing schema statements...');
        for (const stmt of statements) {
            await connection.query(stmt);
        }

        console.log('Database tables successfully verified/created!');
        await connection.end();
        process.exit(0);

    } catch (error) {
        console.error('Error setting up the database:', error.message);
        process.exit(1);
    }
}

setupDatabase();
