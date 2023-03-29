import { FC } from "react";
import classNames from "classNames";
import "./Content.scss";
import OfferBlock from "components/OfferBlock";

export interface IContentProps {
  className?: string;
}

export const Content: FC<IContentProps> = ({ className }) => {
  return (
    <div className={classNames("Content", className)}>
      <OfferBlock />
    </div>
  );
};
