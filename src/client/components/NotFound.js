import React from "react";
import { useTranslation } from 'react-i18next';
import FLATCHR_LOGO from '../assets/flatchr_logo.png';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex align-items-center h-100">
      <div className="text-center w-100">
        <img className="mb-5" width="450px" src={FLATCHR_LOGO} />
        <h1 className="display-3 mb-5">{t('app.error', 'Erreur 404')}</h1>
        <p className="lead">
          {t('app.errorText', `Cette page n'est pas définie dans l'application.`)}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
