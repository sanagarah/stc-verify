import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import { useTranslation } from "react-i18next";

interface ConfirmToastInterface {
  show: boolean;
  setShow: (value: boolean) => void;
}

export default function ConfirmToast({ show, setShow }: ConfirmToastInterface) {
  const [t] = useTranslation();

  return (
    <Row>
      <Col xs={6}>
        <Toast
          className="position-absolute bottom-0 start-0 m-2 bg-secondary"
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
        >
          <Toast.Body className="text-center text-white py-4">
            {t("button.send")}
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
