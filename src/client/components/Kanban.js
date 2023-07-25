import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";
import ApplicationList from "./ApplicationList";
import Table from "react-bootstrap/Table";

const Dashboard = ({
    getVacancy = () => {},
    selectedVacancy = null,
    vacancies = null,
}) => {
    const { t } = useTranslation();

    const filterByStatus = (applications, status) => {
        return applications.filter(
            (application) => application.status === status
        );
    };

    return (
        <div>
            <div className="d-flex align-items-end justify-content-between">
                <h1 className="m-0">{t("app.dashboard", "Dashboard")}</h1>
                <div className="form-group">
                    <label htmlFor="vacancy-id">
                        <label className="label mb-1">
                            {t("app.selectVacancy", "Sélectionner une offre :")}
                        </label>
                        <select
                            name="vacancy-id"
                            id="vacancy-id"
                            className="form-control"
                            onChange={getVacancy}
                        >
                            <option value="" />
                            {vacancies &&
                                vacancies?.map((vacancy) => (
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
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>to_call</th>
                        <th>to_meet</th>
                        <th>recruited</th>
                        <th>abandoned</th>
                    </tr>
                </thead>
                <tbody>
                    <td>
                        {selectedVacancy && (
                            <ApplicationList
                                applications={filterByStatus(
                                    selectedVacancy.applications,
                                    "to_call"
                                )}
                            />
                        )}
                    </td>

                    <td>
                        {selectedVacancy && (
                            <ApplicationList
                                applications={filterByStatus(
                                    selectedVacancy.applications,
                                    "to_meet"
                                )}
                            />
                        )}
                    </td>

                    <td>
                        {selectedVacancy && (
                            <ApplicationList
                                applications={filterByStatus(
                                    selectedVacancy.applications,
                                    "recruited"
                                )}
                            />
                        )}
                    </td>
                    <td>
                        {selectedVacancy && (
                            <ApplicationList
                                applications={filterByStatus(
                                    selectedVacancy.applications,
                                    "abandoned"
                                )}
                            />
                        )}
                    </td>
                </tbody>
            </Table>
        </div>
    );
};

Dashboard.propTypes = {
    getVacancy: PropTypes.func.isRequired,
    selectedVacancy: PropTypes.object,
    vacancies: PropTypes.array.isRequired,
};

export default Dashboard;
