import { FC } from "react";
import "./Header.scss";
import classNames from "classNames";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderContacts from "./HeaderContacts";

export interface IHeaderProps {
  className?: string;
}

export const Header: FC<IHeaderProps> = ({ className }) => {
  return (
    <div className={classNames("Header", className)}>
      <HeaderLogo />
      <HeaderMenu />
      <HeaderContacts />
    </div>
  );
};
