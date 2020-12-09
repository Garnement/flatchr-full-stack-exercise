const faker = require('faker');
const path = require('path');
const Database = require('better-sqlite3');
const schema = require('./schema');

const dbPath = path.resolve(__dirname, 'database.db');

const CANDIDATE_COUNT = 50;
const VACANCY_COUNT = 10;
const APPLICATION_COUNT = 70;

// Create file if not exist
const db = new Database(dbPath, { verbose: console.log });

// Create database schema
db.exec(schema);

function insertCandidates(count) {
    console.info(`Should create ${count} candidates.`);

    const insert = db.prepare('INSERT INTO candidate (first_name, last_name, email) VALUES (?, ?, ?)');
    for (let index = 0; index < count; index++) {
        insert.run(
            faker.name.firstName(),
            faker.name.lastName(),
            faker.internet.email(),
        );
    }
}

function insertVacancies(count) {
    console.info(`Should create ${count} vacancies.`);

    const insert = db.prepare('INSERT INTO vacancy (title, published_at, contract_type, status) VALUES (?, ?, ?, ?)');
    for (let index = 0; index < count; index++) {
        insert.run(
            faker.name.jobTitle(),
            faker.date.past().getTime(),
            faker.random.arrayElement(['cdi', 'cdd', 'internship']),
            faker.random.arrayElement(['opened', 'closed'])
        );
    }
}

function insertApplications(count) {
    console.info(`Should create approximately ${count} applications (errors are due to primary keys).`);

    const insert = db.prepare('INSERT INTO application (candidate_id, vacancy_id, created_at, status) VALUES (?, ?, ?, ?)');
    for (let index = 0; index < count; index++) {
        try {
            insert.run(
                faker.random.number({ min: 1, max: CANDIDATE_COUNT }),
                faker.random.number({ min: 1, max: VACANCY_COUNT }),
                faker.date.past().getTime(),
                faker.random.arrayElement(['to_call', 'to_meet', 'recruited', 'abandoned'])
            );
        } catch (err) {
            console.warn('[SKIP]', 'Unable to add new application', err.message);
        }
    }
}

// Insert candidates, vacancies and applications
insertCandidates(CANDIDATE_COUNT);
insertVacancies(VACANCY_COUNT);
insertApplications(APPLICATION_COUNT);

db.close();
