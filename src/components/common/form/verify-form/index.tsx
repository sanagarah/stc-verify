import { Modal, Form, Image } from "react-bootstrap";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { fieldValidation } from "./validationSchema";
import { formFieldsInitials } from "../../../../constants";
import SubmitButton from "../../button";
import ErrorMessage from "../../error-message";
import { useNavigate } from "react-router-dom";
import { ConfirmPagePath } from "../../../../routers/paths";
import { getDirection } from "../../../../utils";
const verifyImg = require("../../../../assets/images/verify-img.png");

export default function VerifyForm() {
  const [t] = useTranslation();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: formFieldsInitials,
    onSubmit: (values) => {
      navigate(ConfirmPagePath(), { state: values });
    },
    validationSchema: fieldValidation,
  });

  return (
    <Modal
      show
      className="mt-30"
      style={{ pointerEvents: "none" }}
      backdropClassName="d-none"
      size="lg"
      centered
    >
      <Image
        src={verifyImg}
        width={70}
        height={70}
        className="align-self-center"
        style={{ marginTop: "-30px" }}
      />
      <Form onSubmit={formik.handleSubmit}>
        <Modal.Header className="d-flex flex-column text-center border-0 pt-5">
          <h4 className="fw-bold">{t("form.verifyTitle")}</h4>
          <p className="text-gray-200">{t("form.verifySubTitle")}</p>
        </Modal.Header>
        <Modal.Body className="m-4">
          <Form.Group dir={getDirection()} className="FormGroup mb-3">
            <Form.Label className="my-0 fw-bold">
              {t("form.idNumber")}
            </Form.Label>
            <Form.Control
              id="idNumber"
              type="number"
              placeholder={t("form.idNumberPlaceholder")!}
              className="border-0 rounded-0 border-bottom px-0 pb-1 shadow-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.idNumber && (
              <ErrorMessage message={formik.errors.idNumber}></ErrorMessage>
            )}
          </Form.Group>
          <Form.Group dir={getDirection()} className="mb-3 mt-4">
            <Form.Label className="my-0 fw-bold">
              {t("form.referenceNumber")}
            </Form.Label>
            <Form.Control
              id="referenceNumber"
              type="number"
              placeholder={t("form.referenceNumberPlaceholder")!}
              className="border-0 rounded-0 border-bottom px-0 pb-1 shadow-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.referenceNumber && (
              <ErrorMessage
                message={formik.errors.referenceNumber}
              ></ErrorMessage>
            )}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="flex justify-content-center border-0 pb-5">
          <SubmitButton
            disabled={!formik.isValid || !formik.dirty}
            variant="primary"
            text={t("button.submit")}
          />
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
