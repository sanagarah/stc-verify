import { Button, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { AiOutlineGlobal } from "react-icons/ai";
import { changeLang } from "../../../utils";
const stcLogo = require("../../../assets/images/stc-logo.png");

export default function FormLayout() {
  const [t] = useTranslation();

  return (
    <div className="d-flex flex-column vh-100">
      <div className="h-50 bg-primary">
        <div className="d-flex align-items-center justify-content-between m-3">
          <Image src={stcLogo} height={100} />
          <Button
            onClick={() => changeLang()}
            className="d-flex align-items-center bg-primary border-primary"
          >
            <p className="text-white px-2 pt-2">{t("language")}</p>
            <AiOutlineGlobal color="white" size={20} />
          </Button>
        </div>
      </div>
      <div className="h-50"></div>
      <div className="bg-gray-100 py-3 text-center">{t("policy")}</div>
    </div>
  );
}
