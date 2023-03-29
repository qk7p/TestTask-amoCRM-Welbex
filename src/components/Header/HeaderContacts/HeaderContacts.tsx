import { FC } from "react";
import classNames from "classNames";
import "./HeaderContacts.scss";
import IconButton from "components/Button/IconButton";

export interface IHeaderContactsProps {}

export const HeaderContacts: FC<IHeaderContactsProps> = ({}) => {
  return (
    <div className={classNames("HeaderContacts")}>
      <a>+7 555 555-55-55</a>
      <IconButton iconType={"Telegram"} />
      <IconButton iconType={"Phone"} />
      <IconButton iconType={"WhatsApp"} />
    </div>
  );
};
