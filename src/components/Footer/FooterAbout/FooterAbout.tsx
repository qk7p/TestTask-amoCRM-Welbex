import { FC } from "react";
import classNames from "classNames";
import "./FooterAbout.scss";

export interface IFooterAboutProps {}

export const FooterAbout: FC<IFooterAboutProps> = ({}) => {
  return (
    <div className={classNames("FooterAbout")}>
      <p>О компании</p>
      <a>Партнёрская программа</a>
      <a>Вакансии</a>
    </div>
  );
};
