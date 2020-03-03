import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Components.css";

function SignIn({values, errors, touched, status}) {
    const [formInfo, setFormInfo] = useState([]);

    useEffect(() => {
        console.log("status has changed!", status);
        status && setFormInfo(formInfo => [...formInfo, status]);
    }, [status]);

    return (
        <div className="form-container">
            <div className="form">
                <Form>
                    <label htmlFor="username">
                        Username:
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
                {formInfo.map(info => {
                return (
                    <h3>{info.name}</h3>
                );
                })}
            </div>
            <img className="header-img" src="https://images.unsplash.com/photo-1504025468847-0e438279542c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1735&q=80"></img>
        </div>
    );
}

const FormikFormComponent = withFormik({
    mapPropsToValues(props) {
        return {
            username: props.username || "",
            password: props.password || "",
            terms: props.terms || "",

        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("NAME IS REQUIRED")
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
})(SignIn);

export default FormikFormComponent;