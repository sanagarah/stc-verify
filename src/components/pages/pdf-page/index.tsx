import { useLocation } from "react-router-dom";
import PDFCreator from "../../common/pdf-creator";

export default function PDFPage({}) {
  const location = useLocation();
  console.log(location.state);
  return (
    <PDFCreator
      idNumber={location.state.idNumber}
      referenceNumber={location.state.referenceNumber}
    />
  );
}
