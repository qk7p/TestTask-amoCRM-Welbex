import { FC } from "react";
import classNames from "classNames";
import "./OfferBlock.scss";
import Button from "components/Button";
import OfferDetails from "./OfferDetails";
import OfferDetailsMobile from "./OfferDetailsMobile";
import { useMediaPredicate } from "react-media-hook";

export interface IOfferBlockProps {}

export const OfferBlock: FC<IOfferBlockProps> = ({}) => {
  const mobile = useMediaPredicate("(max-width: 320px)");

  return (
    <div className={classNames("OfferBlock")}>
      <div className="Offer">
        <h1>
          Зарабатывайте
          <>
            <br />
          </>
          больше
        </h1>
        <h2 className={"OfferBlock-GradientOfferText"}>c WELBEX</h2>
        <p>
          Развиваем и контролируем
          <>
            <br />
          </>
          продажи за вас
        </p>
      </div>
      <div className="OfferDetails">
        <h3>
          Вместе c{" "}
          <span
            className={classNames(
              "OfferBlock-GradientOfferDetailText",
              "OfferDetailsHeaderText"
            )}
          >
            бесплатной консультацией
          </span>{" "}
          мы дарим:
        </h3>
        <div className="OfferDetailsContainer">
          {mobile ? <OfferDetailsMobile /> : <OfferDetails />}
        </div>
        <Button>Получить консультацию</Button>
      </div>
    </div>
  );
};
