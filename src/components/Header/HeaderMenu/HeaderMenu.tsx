import { FC } from "react";
import classNames from "classNames";
import "./HeaderMenu.scss";

export interface IHeaderMenuProps {}

export const HeaderMenu: FC<IHeaderMenuProps> = ({}) => {
  return (
    <div className={classNames("HeaderMenu")}>
      <a>Услуги</a>
      <a>Виджеты</a>
      <a>Интеграции</a>
      <a>Кейсы</a>
      <a>Сертификаты</a>
    </div>
  );
};
