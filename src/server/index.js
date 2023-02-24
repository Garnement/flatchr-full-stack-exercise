const express = require('express');
const db = require('./database');
const cors = require('cors');

const app = express();

app.use(express.static('dist'));
app.use(cors());

const SUCCESS_STATUS = 200;
const ERROR_STATUS = 400;
const DEFAULT_PORT = 8080;

app.get('/api/vacancies', (req, res) => {
  let vacancies = [];
  try {
    vacancies = db.prepare('SELECT * FROM vacancy').all();

    return res.status(SUCCESS_STATUS).json(vacancies);
  } catch (err) {
    return res.status(ERROR_STATUS).json({ error: err.message });
  }
});

app.get('/api/vacancy/:id', (req, res) => {
  const { id } = req.params;
  let vacancy = null;
  try {
    vacancy = db.prepare('SELECT * FROM vacancy WHERE id = ?').get(id);
    vacancy.applications = db.prepare(`
            SELECT * FROM 
            application INNER JOIN candidate
                ON application.candidate_id = candidate.id
            WHERE vacancy_id = ?`).all(id);

    return res.status(SUCCESS_STATUS).json(vacancy);
  } catch (err) {
    return res.status(ERROR_STATUS).json({ error: err.message });
  }
});

app.post('/api/application', (req, res) => {
  const {
    vacancyId,
    first_name,
    last_name,
    email,
    description
  } = req.body

  const candidate = {
    first_name,
    last_name,
    email,
    description 
  }

  // Associated the newly created candidate to the vacancy
  try {
    test = db.prepare(`CREATE TABLE candidate (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name varchar(255) NOT NULL DEFAULT '',
      last_name varchar(255) NOT NULL DEFAULT '',
      email varchar(255) NOT NULL DEFAULT ''
    );`
    )
  } catch (err) {
    return res.status(ERROR_STATUS).json({ error: err.message });
  }

})

// eslint-disable-next-line no-console
app.listen(process.env.PORT || DEFAULT_PORT, () => console.info(`Listening on port ${process.env.PORT || DEFAULT_PORT}!`));
