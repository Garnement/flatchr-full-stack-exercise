import React, { useEffect, useState } from 'react';
import './app.css';
import ApplicationList from './components/ApplicationList';

export default function App() {
    const [selectedVacancy, setSelectedVacancy] = useState(null);
    const [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        fetch('/api/vacancies')
            .then(res => res.json())
            .then(res => setVacancies(res));
    }, []);

    const getVacancy = (event) => {
        const vacancyId = event.target.value;
        if (!vacancyId) {
            setSelectedVacancy(null);
            return;
        }
        fetch(`/api/vacancy/${vacancyId}`)
            .then(res => res.json())
            .then(vacancy => setSelectedVacancy(vacancy))
            .catch(() => setSelectedVacancy(null));
    };

    return (
        <div>
            <h1>Dashboard</h1>

            <div className="form-group">
                <label htmlFor="vacancy-id">
                    Select vacancy

                    <select name="vacancy-id" id="vacancy-id" className="form-control" onChange={getVacancy}>
                        <option value="" />
                        {vacancies && vacancies.map(vacancy => (
                            <option key={vacancy.id} value={vacancy.id}>
                                {vacancy.title}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            {selectedVacancy && (
                <div>
                    <h2>{selectedVacancy.title}</h2>
                </div>
            )}

            {selectedVacancy && <ApplicationList applications={selectedVacancy.applications} />}
        </div>
    );
}
