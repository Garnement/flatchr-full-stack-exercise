import PropTypes from 'prop-types';
import React from 'react';
import './application-list.css';

export default function ApplicationList(props) {
    const { applications } = props;
    return (
        <div>
            {applications.map(app => (
                <div className="card application" key={`${app.vacancy_id}_${app.candidate_id}`}>
                    <div className="card-body">
                        <pre>{JSON.stringify(app, null, 2)}</pre>
                    </div>
                </div>
            ))}
        </div>
    );
}

ApplicationList.propTypes = {
    applications: PropTypes.arrayOf(PropTypes.object).isRequired
};
