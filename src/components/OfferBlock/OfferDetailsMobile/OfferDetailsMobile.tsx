import { FC } from "react";
import classNames from "classNames";
import "./OfferDetailsMobile.scss";

export interface IOfferDetailsMobileProps {}

export const OfferDetailsMobile: FC<IOfferDetailsMobileProps> = ({}) => {
  return (
    <>
      <div className="OfferDetailsItem">
        <p>Skype аудит</p>
      </div>
      <div className="OfferDetailsItem">
        <p>30 виджетов</p>
      </div>
      <div className="OfferDetailsItem">
        <p>Dashboard</p>
      </div>
      <div className="OfferDetailsItem">
        <p>Месяц аmoCRM</p>
      </div>
    </>
  );
};
