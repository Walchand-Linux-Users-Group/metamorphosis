import React, { useState } from "react";
import { Formik, Form as FForm } from "formik";
import { Form, Card } from "react-bootstrap";
import { Button } from "@mui/material";
import { formValidations } from "./validations";
import SimpleInput from "../formFields/simpleInput";
import SelectInput from "../formFields/selectInput";
import { branchOptions, yearOptions } from "../../utils/options";
import { register } from "./api";
import { useSnackbar } from "notistack";

const Registration = ({ setIsRegistered }) => {
  const { email, name, branch, year, college, mobile_number } = {};
  const [submitAttempt, setSubmitAttempt] = useState(false);
  const snackbar = useSnackbar();

  return (
    <div
      className="mt-4 p-3"
      style={{
        backgroundColor: "#ffffff10",
        backdropFilter: "blur(6px)",
        color: "white",
        WebkitBackdropFilter: "blur(6px)",
        borderRadius: "10px",
      }}
    >
      <Card.Title
        style={{ textAlign: "center", color: "white" }}
        className="my-2 mb-3"
      >
        Metamorphosis 2k22 Registration Form
      </Card.Title>
      <Formik
        validationSchema={formValidations}
        validateOnChange={submitAttempt}
        onSubmit={async (values) => {
          console.log(values);
          register(
            values,
            (data) => {
              console.log(data);
              setIsRegistered(true);
              localStorage.setItem("isRegisteredMeta", "true");
            },
            (err) => {
              console.log(err);
            }
          );
        }}
        initialValues={{ email, name, branch, year, college, mobile_number }}
      >
        {({ errors, touched, values, setFieldValue }) => {
          return (
            <FForm>
              <Form.Group
                className="mb-3 p-2"
                controlId="formBasicEmail"
                style={{ color: "white" }}
              >
                <SimpleInput
                  title="Email *"
                  type="text"
                  //required
                  value={values.email}
                  onChange={(e) => {
                    setFieldValue("email", e.target.value);
                  }}
                  placeholder="Enter your email"
                  error={errors.email && touched.email}
                  sideText={errors.email}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 p-2"
                controlId="formBasicMobileNumber"
              >
                <SimpleInput
                  title="Mobile Number *"
                  type="text"
                  //required
                  value={values.mobile_number}
                  onChange={(e) => {
                    setFieldValue("mobile_number", e.target.value);
                  }}
                  placeholder="Enter your mobile number"
                  error={errors.mobile_number && touched.mobile_number}
                  sideText={errors.mobile_number}
                />
              </Form.Group>

              <Form.Group className="mb-3 p-2" controlId="formBasicName">
                <SimpleInput
                  title="Name *"
                  type="text"
                  //required
                  value={values.name}
                  onChange={(e) => {
                    setFieldValue("name", e.target.value);
                  }}
                  placeholder="Enter your full name"
                  error={errors.name && touched.name}
                  sideText={errors.name}
                />
              </Form.Group>

              <Form.Group className="mb-3 p-2" controlId="formBasicBranch">
                <SelectInput
                  title="Branch *"
                  type="text"
                  options={branchOptions}
                  //required
                  value={values.branch}
                  onChange={(e) => {
                    setFieldValue("branch", e.target.value);
                  }}
                  placeholder="Enter your branch"
                  error={errors.branch && touched.branch}
                  sideText={errors.branch}
                />
              </Form.Group>

              <Form.Group className="mb-3 p-2" controlId="formBasicYear">
                <SelectInput
                  title="Year *"
                  options={yearOptions}
                  //required
                  value={values.year}
                  onChange={(e) => {
                    setFieldValue("year", e.target.value);
                  }}
                  placeholder="Enter the year you're studying in"
                  error={errors.year && touched.year}
                  sideText={errors.year}
                />
              </Form.Group>

              <Form.Group className="mb-3 p-2" controlId="formBasicCollege">
                <SimpleInput
                  title="College *"
                  type="text"
                  //required
                  value={values.college}
                  onChange={(e) => {
                    setFieldValue("college", e.target.value);
                  }}
                  placeholder="Enter your college name"
                  error={errors.college && touched.college}
                  sideText={errors.college}
                />
              </Form.Group>

              <div className="w-100 d-flex flex-row-reverse">
                <Button
                  variant="contained"
                  className="m-2"
                  type="submit"
                  onClick={() => {
                    setSubmitAttempt(true);
                  }}
                >
                  Register
                </Button>
              </div>
            </FForm>
          );
        }}
      </Formik>
    </div>
  );
};

export default Registration;
