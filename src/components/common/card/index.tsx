import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PDFPagePath } from "../../../routers/paths";
import { getDirection } from "../../../utils";

interface CertificationCardInterface {
  state: {
    idNumber: string;
    referenceNumber: string;
  };
}
export default function CertificationCard({
  state,
}: CertificationCardInterface) {
  const [t] = useTranslation();

  return (
    <Card>
      <Card.Body
        dir={getDirection()}
        className="d-flex justify-content-between align-items-center"
      >
        <div>
          <p className="fw-bold m-0">{t("form.certification")}</p>
          <p className="text-gray-200 m-0">{t("form.certificateDetails")}</p>
        </div>
        <Link
          className="text-decoration-none text-primary fw-bold"
          to={PDFPagePath()}
          state={state}
        >
          {t("button.view")}
        </Link>
      </Card.Body>
    </Card>
  );
}
