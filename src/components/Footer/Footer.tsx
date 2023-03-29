import { FC } from "react";
import classNames from "classNames";
import "./Footer.scss";
import FooterAbout from "./FooterAbout";
import FooterMenu from "./FooterMenu";
import FooterContacts from "./FooterContacts";

export interface IFooterProps {
  className?: string;
}

export const Footer: FC<IFooterProps> = ({ className }) => {
  return (
    <div className={classNames("Footer", className)}>
      <FooterAbout />
      <FooterMenu />
      <FooterContacts />
    </div>
  );
};
