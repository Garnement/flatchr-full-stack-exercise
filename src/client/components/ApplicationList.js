import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "../styles/application-list.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
const DEFAULT_INDENTATION = 2;

const ApplicationList = ({ applications }) => {
    const [status, setStatus] = useState("");
    const [id, setId] = useState("");

    const onChange = (event, id) => {
        const value = event.target.value;
        setStatus(value);
        setId(id);
    };

    const changeStatus = (id, status) => {
        fetch(`${API_URL}/api/vacancies/${id}/update-status`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify({ status: status }),
        });
    };

    useEffect(() => {
        changeStatus(id, status);
    }, [status]);

    return (
        <div className="application-list">
            {applications.map((app) => (
                <div
                    className="card application"
                    key={`${app.vacancy_id}_${app.candidate_id}`}
                >
                    <div className="card-body">
                        <Card.Body>
                            <Card.Text>{app.first_name}</Card.Text>
                            <Card.Text>{app.last_name}</Card.Text>
                            <Card.Text>{app.email}</Card.Text>
                            <Card.Text>{app.status}</Card.Text>
                            <Form.Select
                                onChange={(e) => onChange(e, app.candidate_id)}
                                aria-label="Default select example"
                            >
                                <option>Change status</option>
                                <option value="to_call">to_call</option>
                                <option value="to_meet">to_meet</option>
                                <option value="recruited">recruited</option>
                                <option value="abandoned">abandoned</option>
                            </Form.Select>
                        </Card.Body>
                    </div>
                </div>
            ))}
        </div>
    );
};

ApplicationList.propTypes = {
    applications: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ApplicationList;
