import { FC } from "react";
import classNames from "classNames";
import "./OfferDetails.scss";

export interface IOfferDetailsProps {}

export const OfferDetails: FC<IOfferDetailsProps> = ({}) => {
  return (
    <>
      <div className="OfferDetailsItem">
        <h3>Виджеты</h3>
        <p>30 готовых решений</p>
      </div>
      <div className="OfferDetailsItem">
        <h3>Dashboard</h3>
        <p>c показателями вашего бизнеса</p>
      </div>
      <div className="OfferDetailsItem">
        <h3>Skype Аудит</h3>
        <p>отдела продаж и CRM системы</p>
      </div>
      <div className="OfferDetailsItem">
        <h3>35 дней</h3>
        <p>использования CRM</p>
      </div>
    </>
  );
};
