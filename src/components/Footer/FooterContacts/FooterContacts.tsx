import { FC } from "react";
import classNames from "classNames";
import "./FooterContacts.scss";
import IconBar from "components/IconBar";
import { IconBarListItem } from "components/IconBar/IconBar";

export interface IFooterContactsProps {}

export const FooterContacts: FC<IFooterContactsProps> = ({}) => {
  const iconList: IconBarListItem[] = [
    { icon: "Telegram", onClick: () => {} },
    { icon: "Phone", onClick: () => {} },
    { icon: "WhatsApp", onClick: () => {} },
  ];

  return (
    <div className={classNames("FooterContacts")}>
      <p>Контакты</p>
      <a>+7 555 555-55-55</a>
      <IconBar iconsList={iconList} />
      <a>Москва, Путевой проезд 3с1, к 902</a>
    </div>
  );
};
