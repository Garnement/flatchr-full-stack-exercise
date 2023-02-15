import React from 'react';
import { useTranslation } from 'react-i18next';
import FLATCHR_LOGO from '../assets/flatchr_logo.png';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-center">
        <img className="mb-5" width="450px" src={FLATCHR_LOGO} />
        <hr className="my-5" />
        <p className="lead">
          {t('app.welcomeText', `Bienvenue au test technique pour le poste de développeur full-stack.
        Ce test vise à évaluer vos compétences en matière de développement web,
        en particulier en ce qui concerne le développement de nouvelles features et la résolution de bugs.
        Nous espérons que ce test vous permettra de mettre en avant vos connaissances et votre expérience,
        ainsi que votre capacité à travailler en équipe et à résoudre des problèmes de manière créative.
        Nous vous souhaitons bonne chance dans votre participation à ce test.`)}
        </p>
        <hr className="my-5" />
      </div>
    </div>
  );
};

export default HomePage;
