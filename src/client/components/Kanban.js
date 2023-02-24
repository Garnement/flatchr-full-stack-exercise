import PropTypes from 'prop-types';
import React from "react";
import { useTranslation } from 'react-i18next';
import ApplicationList from "./ApplicationList";
import KanbanList from './KanbanList';

const Dashboard = ({
  getVacancy = () => {},
  selectedVacancy = null,
  vacancies = null,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="d-flex align-items-end justify-content-between">
        <h1 className="m-0">{t('app.dashboard', 'Dashboard')}</h1>
        <div className="form-group">
          <label htmlFor="vacancy-id">
            <label className="label mb-1">{t('app.selectVacancy', 'Sélectionner une offre :')}</label>
            <select
              name="vacancy-id"
              id="vacancy-id"
              className="form-control"
              onChange={getVacancy}
            >
              <option value="" />
              {vacancies && vacancies?.map(vacancy => (
                <option key={vacancy.id} value={vacancy.id}>
                  {vacancy.title}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {selectedVacancy && (
        <>
          <hr className="mb-4 mt-4" />
          <div className="mb-4">
            <h2 className="m-0">{selectedVacancy.title}</h2>
          </div>
        </>
      )}

      {/* {selectedVacancy && <ApplicationList applications={selectedVacancy.applications} />} */}
      {selectedVacancy && <KanbanList applications={selectedVacancy.applications} />}
    </div>
  );
};

Dashboard.propTypes = {
  getVacancy: PropTypes.func.isRequired,
  selectedVacancy: PropTypes.object,
  vacancies: PropTypes.array.isRequired,
};

export default Dashboard;
