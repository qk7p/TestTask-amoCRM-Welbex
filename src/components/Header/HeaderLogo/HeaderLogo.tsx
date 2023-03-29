import { FC } from "react";
import classNames from "classNames";
import "./HeaderLogo.scss";
import IconButton from "components/Button/IconButton";

export interface IHeaderLogoProps {}

export const HeaderLogo: FC<IHeaderLogoProps> = ({}) => {
  return (
    <div className={classNames("HeaderLogo")}>
      <IconButton iconType={"SiteLogo"} className="HeaderLogoIconButton" />
      <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
    </div>
  );
};
