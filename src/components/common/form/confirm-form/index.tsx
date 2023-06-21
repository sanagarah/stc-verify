import { useState } from "react";
import { Image, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import SubmitButton from "../../button";
import { VerifyPagePath } from "../../../../routers/paths";
import { Link, useLocation } from "react-router-dom";
import ConfirmToast from "../../toast";
import CertificationCard from "../../card";
const confirmImg = require("../../../../assets/images/confirm-img.png");

export default function ConfirmForm() {
  const [show, setShow] = useState<boolean>(false);

  const [t] = useTranslation();

  const location = useLocation();

  return (
    <>
      <Modal
        show
        className="d-flex mt-30"
        style={{ pointerEvents: "none" }}
        backdropClassName="d-none"
        size="lg"
        centered
      >
        <Image
          src={confirmImg}
          width={70}
          height={70}
          className="align-self-center"
          style={{ marginTop: "-30px" }}
        />
        <Modal.Header className="d-flex flex-column text-center border-0 pt-5">
          <h4 className="fw-bold w-75">{t("form.confirmTitle")}</h4>
        </Modal.Header>
        <Modal.Body className="m-4">
          <CertificationCard state={location.state} />
        </Modal.Body>
        <Modal.Footer className="flex flex-column justify-content-center border-0 pb-5">
          <SubmitButton
            variant="secondary"
            text={t("button.submit")}
            onClick={() => setShow(true)}
          />
          <Link
            className="text-decoration-none text-primary fw-bold mt-5"
            to={VerifyPagePath()}
          >
            {t("button.verify")}
          </Link>
        </Modal.Footer>
      </Modal>
      <ConfirmToast show={show} setShow={setShow} />
    </>
  );
}
