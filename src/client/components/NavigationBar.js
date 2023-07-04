import classNames from "classnames";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const HOME_ROUTE = "/";
const DASHBORD_ROUTE = "/dashbord";
const KANBAN_ROUTE = "/kanban";

const NavigationBar = ({ children }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const navigateTo = (navigationURL) =>
        navigate(navigationURL, { replace: true });

    const homeClassNames = useMemo(
        () =>
            classNames("nav-link", {
                active: location.pathname === HOME_ROUTE,
            }),
        [location]
    );

    const dashboardClassNames = useMemo(
        () =>
            classNames("nav-link", {
                active: location.pathname === DASHBORD_ROUTE,
            }),
        [location]
    );

    const kanbanClassNames = useMemo(
        () =>
            classNames("nav-link", {
                active: location.pathname === KANBAN_ROUTE,
            }),
        [location]
    );

    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container-fluid">
                    <a
                        className="navbar-brand"
                        onClick={() => navigateTo(HOME_ROUTE)}
                    >
                        {t("app.flatchr", "Flatchr")}
                    </a>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className={homeClassNames}
                                    aria-current="page"
                                    onClick={() => navigateTo(HOME_ROUTE)}
                                >
                                    {t("app.home", "Accueil")}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={dashboardClassNames}
                                    aria-current="page"
                                    onClick={() => navigateTo(DASHBORD_ROUTE)}
                                >
                                    {t("app.dashbord", "Dashbord")}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={kanbanClassNames}
                                    aria-current="page"
                                    onClick={() => navigateTo(KANBAN_ROUTE)}
                                >
                                    {t("app.kanban", "Kamban")}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container app-container">{children}</div>
        </>
    );
};

export default NavigationBar;
