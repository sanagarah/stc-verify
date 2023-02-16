import { t } from "i18next";
import * as Yup from "yup";

export const fieldValidation = Yup.object().shape({
  idNumber: Yup.string()
  .min(
    10,
    t("error.length", {
      number: 10,
    })!
  )
    .max(
      10,     
      t("error.length", {
        number: 10,
      })!
    )
    .required(t("error.required")!),
    referenceNumber: Yup.string()
    .min(
      5,
      t("error.length", {
        number: 5,
      })!
      )
    .max(
      5,
      t("error.length", {
        number: 5,
      })!
    )
    .required(t("error.required")!),
});
