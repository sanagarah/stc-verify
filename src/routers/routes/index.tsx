import React, { Suspense } from "react";
import { VerifyPagePath, ConfirmPagePath, PDFPagePath } from "../paths";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const VerifyPage = React.lazy(
  () => import("../../components/pages/verify-page")
);

const ConfirmPage = React.lazy(
  () => import("../../components/pages/confirm-page")
);

const PDFPage = React.lazy(() => import("../../components/pages/pdf-page"));

const withSuspense = (WrappedComponent: any) => {
  return (
    <Suspense>
      <WrappedComponent />
    </Suspense>
  );
};

export const withSuspenseComponents = (element: any) => {
  const newComponent = () => withSuspense(element.props.component);

  return { ...element, props: { ...element.props, component: newComponent } };
};

export default function Routing() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route
            key="VerifyPage"
            path={VerifyPagePath()}
            element={withSuspenseComponents(<VerifyPage />)}
          />
          <Route
            key="ConfirmPage"
            path={ConfirmPagePath()}
            element={withSuspenseComponents(<ConfirmPage />)}
          />
          <Route
            key="PDFPage"
            path={PDFPagePath()}
            element={withSuspenseComponents(<PDFPage />)}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
