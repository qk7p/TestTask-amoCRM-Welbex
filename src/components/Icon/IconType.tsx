import { ReactComponent as SiteLogo } from "../../assets/icons/SiteLogo.svg";
import { ReactComponent as WhatsApp } from "../../assets/icons/WhatsApp.svg";
import { ReactComponent as Telegram } from "../../assets/icons/Telegram.svg";
import { ReactComponent as Phone } from "../../assets/icons/Phone.svg";
import { newGuid } from "../../utils/guid";

export type IconType = "SiteLogo" | "WhatsApp" | "Telegram" | "Phone";

export const iconTypes = new Map([
  ["SiteLogo", <SiteLogo key={newGuid()} />],
  ["WhatsApp", <WhatsApp key={newGuid()} />],
  ["Telegram", <Telegram key={newGuid()} />],
  ["Phone", <Phone key={newGuid()} />],
]);
