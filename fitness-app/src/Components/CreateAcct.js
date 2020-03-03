import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Components.css";

function CreateAcct({ values, errors, touched, status }) {
    const [formInfo, setFormInfo] = useState([]);

    useEffect(() => {
        console.log("status has changed!", status);
        console.log(formInfo);
        status && setFormInfo(formInfo => [...formInfo, status]);
    }, [status]);

    return (
      <div className="form-container">
        <div className="form">
            <Form>
                <label htmlFor="firstname">
                    First Name:
                    <Field
                        id="firstname"
                        type="text"
                        name="firstname"
                        placeholder="firstname"
                        />
                        {/* touched is if input has been visited, errors are captured from Yup validation. 
                        If has been visited && errors exist for that input => render JSX to show errors */}
                        {touched.firstname && errors.firstname && (
                        <p className="errors">{errors.firstname}</p>
                        )}
                </label>
                <label htmlFor="lastname">
                    Last Name:
                    <Field
                        id="lastname"
                        type="text"
                        name="lastname"
                        placeholder="lastname"
                        />
                        {/* touched is if input has been visited, errors are captured from Yup validation. 
                        If has been visited && errors exist for that input => render JSX to show errors */}
                        {touched.lastname && errors.lastname && (
                        <p className="errors">{errors.lastname}</p>
                        )}
                </label>
                <label htmlFor="username">
                    Create Username:
                    <Field
                        id="username"
                        type="text"
                        name="username"
                        placeholder="username"
                        />
                        {/* touched is if input has been visited, errors are captured from Yup validation. 
                        If has been visited && errors exist for that input => render JSX to show errors */}
                        {touched.username && errors.username && (
                        <p className="errors">{errors.username}</p>
                        )}
                </label>
                <label htmlFor="password">
                    Password:
                    <Field
                        id="password"
                        type="password"
                        name="password"
                        placeholder="password"
                        />
                </label>
                <label htmlFor="email">
                    Email:
                    <Field
                        id="email"
                        type="email"
                        name="email"
                        placeholder="email"
                        />
                </label>
                <label className="checkbox-container">
                    Instructor?:
                    <Field
                        type="checkbox"
                        name="terms"
                        checked={values.terms}
                        />
                    <span className="checkmark" />
                </label>
                <button type="submit">Submit!</button>
            </Form>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre> */}
            {formInfo.map(info => {
            return (
                <ul key={info.id}>
                    <p>Thank you, {info.firstname}. We have recieved your request for a new account.</p>
                </ul>
            );
            })}
        </div>
        <img className="header-img" src="https://images.unsplash.com/photo-1504025468847-0e438279542c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1735&q=80"></img>
      </div>
    );
}

const FormikCreateAcct = withFormik({
    mapPropsToValues(props) {
        return {
            firstname: props.firstname || "",
            lastname: props.lastname || "",
            username: props.username || "",
            email: props.email || "",
            password: props.password || "",
            terms: props.terms || "",
        };
    },

    validationSchema: Yup.object().shape({
        firstname: Yup.string().required("FIRST NAME IS REQUIRED"),
        lastname: Yup.string().required("LAST NAME IS REQUIRED"),
    }),

    handleSubmit(values, { setStatus, resetForm }) {
        console.log("submitting", values);
        console.log(values.name, " is username")
        axios
            .post("https://reqres.in/api/users", values)
            .then(res => {
                console.log("success", res);
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }
})(CreateAcct);

export default FormikCreateAcct;