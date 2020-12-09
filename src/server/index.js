const express = require('express');
const db = require('./database');

const app = express();

app.use(express.static('dist'));

app.get('/api/vacancies', (req, res) => {
    let vacancies = [];
    try {
        vacancies = db.prepare('SELECT * FROM vacancy').all();
    } catch (err) {
        res.status(400).json({ error: err.message });
        return;
    }
    res.status(200).json(vacancies);
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
    } catch (err) {
        res.status(400).json({ error: err.message });
        return;
    }
    res.status(200).json(vacancy);
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
