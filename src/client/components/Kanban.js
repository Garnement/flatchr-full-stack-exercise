import PropTypes from 'prop-types';
import React from "react";
import { useTranslation } from 'react-i18next';
import ApplicationList from "./ApplicationList";
const { useEffect, useMemo } = React;

const columStyle = {
  width: "20em",
  height: "100vh",
  backgroundColor: 'grey',
  borderRadius: "1em",
  textAlign: "center"
}

const columnContainerStyle = {
  display: "flex",
  flexDirection: "row",
  columnGap: "2em",
  backgroundColor: "lightGrey",
  padding: "1em"
}

const userCardStyle = {

}

const OneUserCard = (candidate) => {
  console.log("!firstname+++++++++++++", candidate['first_name']);
  return (<>
    <div>
      <h1>{candidate.first_name}</h1>
    </div>
  </>);
}

const OneColumn = (props) => {
  const {name, candidates} = props;
  console.log("___________candidate", candidates);
  // console.log("!name", name);
  return (<>
    <div style={columStyle}>
      <h1>{name}</h1>
      {candidates.map((candidate, index) => (
        <OneUserCard candidate={candidate} key={index}/>
      ))}
    </div>
  </>);
}

const Columns = (props) => {
  const {vacancies, selectedVacancy} = props;
  const sortStatus = [];
  const contactStatus = ['to_call', 'to_meet', 'recruited', 'abandoned'];
  const getCandidatesFromStatus = (status) => {
    let result = [];
    if (!selectedVacancy)
      return [];
    selectedVacancy.applications.forEach(candidate => {
      if (candidate.status == status)
        result = [...result, candidate];
      console.log("candidate!", candidate);
    })
    return result;
  }
  console.log(selectedVacancy);

  console.log("!selectedVacancy !!", selectedVacancy);
    return (<>
      <div style={columnContainerStyle}>
        {contactStatus.map((status, index) => <OneColumn  key={index}  name={status} candidates={getCandidatesFromStatus(status)}/>)}
        {/* <OneColumn name="tet" /> */}
        {/* <OneColumn name="test" /> */}
      </div>
    </>);
}

const Dashboard = ({
  getVacancy = () => {},
  selectedVacancy = null,
  vacancies = null,
}) => {
  const { t } = useTranslation();
  // console.log("!!! selected", selectedVacancy);
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
{/* 
      // {selectedVacancy && <ApplicationList applications={selectedVacancy.applications} />} */}
      <Columns vacancies={vacancies} selectedVacancy={selectedVacancy}/>
    </div>
  );
};

Dashboard.propTypes = {
  getVacancy: PropTypes.func.isRequired,
  selectedVacancy: PropTypes.object,
  vacancies: PropTypes.array.isRequired,
};

export default Dashboard;
