import React, { useState } from "react";
import { Formik, Form as FForm } from "formik";
import { Form, Card } from "react-bootstrap";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { formValidations } from "./validations";
import SimpleInput from "../formFields/simpleInput";
import SelectInput from "../formFields/selectInput";
import { branchOptions, yearOptions } from "../../utils/options";
import { register } from "./api";

const Registration = ({ setIsRegistered, setError }) => {
  const { email, name, branch, year, college, mobile_number } =
    JSON.parse(localStorage?.getItem("response")) || {};
  const [submitAttempt, setSubmitAttempt] = useState(false);
  const [loader, setLoader] = useState(false);

  return (
    <>
      <Card.Title
        style={{
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          letterSpacing: "0.1rem",
          fontSize: "1.7rem",
        }}
        className="my-1 mb-2"
      >
        METAMORPHOSIS'22
      </Card.Title>
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
          style={{
            fontSize: "1.3rem",
          }}
          className=" my-1 mb-2 meta-title"
        >
          Registration Form
        </Card.Title>
        <Formik
          validationSchema={formValidations}
          validateOnChange={submitAttempt}
          onSubmit={async (values) => {
            setLoader(true);
            register(
              values,
              (data) => {
                console.log(data);
                if (data?.success) {
                  setIsRegistered(true);
                  localStorage.setItem("isRegisteredMeta", "true");
                } else {
                  setError(true);
                  localStorage.setItem("response", JSON.stringify(values));
                }
                setLoader(true);
              },
              (err) => {
                if (err) console.log(err);
                setError(true);
                localStorage.setItem("response", JSON.stringify(values));
                setLoader(true);
              }
            );
          }}
          initialValues={{ email, name, branch, year, college, mobile_number }}
        >
          {({ errors, touched, values, setFieldValue }) => {
            return (
              <FForm className="p-2">
                <div className="row">
                  <Form.Group
                    className="mb-3 p-2 col-lg-6"
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
                    className="mb-3 p-2 col-lg-6"
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
                </div>
                <Form.Group
                  className="mb-3 p-2 row col-lg-13"
                  controlId="formBasicName"
                >
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
                <div className="row">
                  <Form.Group
                    className="mb-3 p-2 col-lg-6"
                    controlId="formBasicBranch"
                  >
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
                  <Form.Group
                    className="mb-3 p-2 col-lg-6"
                    controlId="formBasicYear"
                  >
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
                </div>

                <Form.Group
                  className="mb-3 p-2 row col-lg-13"
                  controlId="formBasicCollege"
                >
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
                  <LoadingButton
                    variant="contained"
                    loading={loader}
                    className="m-2"
                    type="submit"
                    onClick={() => {
                      setSubmitAttempt(true);
                    }}
                  >
                    Register
                  </LoadingButton>
                </div>
              </FForm>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default Registration;
