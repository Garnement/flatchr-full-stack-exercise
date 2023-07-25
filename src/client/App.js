import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// import Dashboard from './components/Kanban';
import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import NotFound from "./components/NotFound";
import Kanban from "./components/Kanban";

import "./styles/app.css";

const API_URL = process.env.API_URL;

const App = () => {
    const [selectedVacancy, setSelectedVacancy] = useState(null);
    const [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/api/vacancies`)
            .then((res) => res.json())
            .then((res) => setVacancies(res));
    }, []);

    const getVacancy = (event) => {
        const vacancyId = event.target.value;

        if (!vacancyId) {
            setSelectedVacancy(null);

            return;
        }

        fetch(`${API_URL}/api/vacancy/${vacancyId}`)
            .then((res) => res.json())
            .then((vacancy) => setSelectedVacancy(vacancy))
            .catch(() => setSelectedVacancy(null));
    };

    return (
        <NavigationBar>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/kanban"
                    element={
                        <Kanban
                            getVacancy={getVacancy}
                            selectedVacancy={selectedVacancy}
                            vacancies={vacancies}
                        />
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </NavigationBar>
    );
};

export default App;
