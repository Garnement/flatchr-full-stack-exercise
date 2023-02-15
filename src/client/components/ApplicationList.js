import PropTypes from 'prop-types';
import React from 'react';
import '../styles/application-list.css';

const DEFAULT_INDENTATION = 2;

const ApplicationList = ({
  applications
}) => (
  <div className="application-list">
    {applications.map(app => (
      <div className="card application" key={`${app.vacancy_id}_${app.candidate_id}`}>
        <div className="card-body">
          <pre>{JSON.stringify(app, null, DEFAULT_INDENTATION)}</pre>
        </div>
      </div>
    ))}
  </div>
);

ApplicationList.propTypes = {
  applications: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ApplicationList;
