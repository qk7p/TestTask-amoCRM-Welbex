import { FC } from "react";
import classNames from "classNames";
import "./FooterMenu.scss";

export interface IFooterMenuProps {}

export const FooterMenu: FC<IFooterMenuProps> = ({}) => {
  return (
    <div className={classNames("FooterMenu")}>
      <p>МЕНЮ</p>
      <div className="FooterMenuContainer">
        <a>Расчёт стоимости</a>
        <a>Кейсы</a>
        <a>Услуги</a>
        <a>Благодарственные письма</a>
        <a>Виджеты</a>
        <a>Сертификаты</a>
        <a>Интеграции</a>
        <a>Блог на Youtube</a>
        <a>Наши клиенты</a>
        <a>Вопрос / Ответ</a>
      </div>
    </div>
  );
};
