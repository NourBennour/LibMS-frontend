import * as yup from "yup";


export const ValidationScheme = yup.object().shape({
    firstName: yup.string().required("First name is required").default(""),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().matches(/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(medtech.tn|msb.tn|smu.tn)$/, 
    "Only SMU (medtech.tn, msb.tn or smu.tn) domain names are allowed"
    ).required("Email is required"),
    universityID: yup.string()
    .matches(/^\d+$/, "University ID should contain digits only")
    .min(7,"University ID must be exactly 7 digits")
    .max(7,"University ID must be exactly 7 digits")
    .required("University ID is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().oneOf(
        [yup.ref("password"), null], "Passwords must match"
    )
})