import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const signUpSchema = Yup.object({
    firstname: Yup.string().required("Please enter your firstname").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").min(2, "Too Short").max(40, "Too Long"),
    lastname: Yup.string().required("Please enter your lastname").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").min(2, "Too Short").max(40, "Too Long"),
    email: Yup.string().email().required("Please enter your email"),
    contact: Yup.string()
        .required("Please enter your phone number")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "too short")
        .max(10, "too long"),
    state: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .min(2, "Too Short").max(25, "Too Long")
        .required("Please fill the state field"),
    city: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .min(2, "Too Short").max(25, "Too Long")
        .required("Please fill the city field"),
    address: Yup.string().min(2, "Too Short").max(125, "Too Long").required("Please enter your address"),

});



export const updateroleschema = Yup.object({
    firstname: Yup.string().required("Please enter your firstname").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").min(2, "Too Short").max(40, "Too Long"),
    lastname: Yup.string().required("Please enter your lastname").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").min(2, "Too Short").max(40, "Too Long"),
    email: Yup.string().email().required("Please enter your email"),
    contact: Yup.string()
        .required("Please enter your phone number")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "too short")
        .max(10, "too long"),
    state: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .min(2, "Too Short").max(25, "Too Long"),
    city: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .min(2, "Too Short").max(25, "Too Long"),
    address: Yup.string().min(2, "Too Short").max(125, "Too Long").required("Please enter your address"),

});

export const CustomerSchema = Yup.object({
    firstname: Yup.string().required("Please enter your firstname").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").min(2, "Too Short").max(40, "Too Long"),
    lastname: Yup.string().required("Please enter your lastname").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").min(2, "Too Short").max(40, "Too Long"),
    email: Yup.string().email().required("Please enter your email"),
    contact: Yup.string()
        .required("Please enter your phone number")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "too short")
        .max(10, "too long"),
    city: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .min(2, "Too Short").max(25, "Too Long")
        .required("Please fill the city field"),
    address: Yup.string().min(2, "Too Short").max(125, "Too Long").required("Please enter your address"),
    pin: Yup.string().required("Please enter your pincode").matches(/^[0-9]+$/, "Only numbers are allowed for this field ").min(6, "Too Short").max(6, "Too Long"),

});

export const ProductSchema = Yup.object({
    productname: Yup.string().required("Please enter your product name").min(2, "Too Short").max(40, "Too Long"),
    productprice: Yup.string().required("Please enter your product price").matches(/^[0-9]+$/, "Only numbers are allowed for this field ").max(40, "Too Long"),
    category: Yup.number().required("Please enter your product category"),
    subcategory: Yup.string(),
    offer: Yup.string().required("Please enter your product offer"),
    brand: Yup.string().required("Please enter your product brand"),
    uom: Yup.string().required("Please enter your product uom"),
});