import { FC } from "react";
import classNames from "classNames";
import "./Copyright.scss";

export interface ICopyrightProps {}

export const Copyright: FC<ICopyrightProps> = ({}) => {
  return (
    <div className={classNames("Copyright")}>
      <p>©WELBEX 2022. Все права защищены.</p>
      <a>Политика конфиденциальности</a>
    </div>
  );
};
