import React, { useState } from "react";
import { Formik, Form, FastField } from "formik";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { ReactstrapInput } from "reactstrap-formik";
import * as Yup from "yup";
import UserApi from "../../api/UserApi";
import { withRouter } from "react-router-dom";

const SignUp = (props) => {
  const [isOpenModals, setOpenModals] = useState(false);

  const [email, setEmail] = useState();

  const [isDisableResendButton, setIsDisableResendButton] = useState(false);

  const resendEmail = async () => {
    setIsDisableResendButton(true);
    await UserApi.resendEmail(email);
    setIsDisableResendButton(false);
  };

  const redirectToLogin = () => {
    props.history.push("/auth/sign-in");
  };

  return (
    <React.Fragment>
      <div className="text-center mt-4">
        <h1 className="h2">Get started</h1>
        <p className="lead">Start creating account to experience in VTI.</p>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(50, "Must be less than 50 characters or greater")
            .required("Required"),

          lastName: Yup.string()
            .max(50, "Must be less than 50 characters or greater")
            .required("Required"),

          userName: Yup.string()
            .min(6, "Must be between 6 and 50 characters")
            .max(50, "Must be between 6 and 50 characters")
            .required("Required")
            .test(
              "checkExistUserName",
              "This UserName is already registered.",
              async (username) => {
                // call api
                const isExists = await UserApi.existsByUsername(username);
                return !isExists;
              }
            ),

          email: Yup.string()
            .email("Invalid email address")
            .required("Required")
            .test(
              "checkExistEmail",
              "This email is already registered.",
              async (email) => {
                // call api
                const isExists = await UserApi.existsByEmail(email);
                return !isExists;
              }
            ),

          password: Yup.string()
            .min(6, "Must be between 6 and 50 characters")
            .max(50, "Must be between 6 and 50 characters")
            .required("Required"),

          confirmPassword: Yup.string()
            .required("Required")
            .oneOf([Yup.ref("password")], "Confirm Password do not match"),
          // .when("password", {
          //   is: (value) => (value && value.length > 0 ? true : false),
          //   then: Yup.string().oneOf(
          //     [Yup.ref("password")],
          //     "Confirm Password do not match"
          //   ),
          // }),
        })}
        onSubmit={async (values) => {
          try {
            // call api
            await UserApi.create(
              values.firstName,
              values.lastName,
              values.userName,
              values.email,
              values.password
            );
            // message
            // alert("Success");
            setEmail(values.email);
            setOpenModals(true);
          } catch (error) {
            props.history.push("/auth/500");
            // console.log(error);
          }
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ isSubmitting }) => (
          <Card>
            <CardBody>
              <div className="m-sm-4">
                <Form>
                  <FormGroup>
                    <FastField
                      label="First Name"
                      type="text"
                      name="firstName"
                      bsSize="lg"
                      placeholder="Enter your First Name"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label="Last Name"
                      type="text"
                      name="lastName"
                      bsSize="lg"
                      placeholder="Enter your Last Name"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label="User Name"
                      type="text"
                      name="userName"
                      bsSize="lg"
                      placeholder="Enter your User Name"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label="Email"
                      type="email"
                      name="email"
                      bsSize="lg"
                      placeholder="Enter your email"
                      component={ReactstrapInput}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FastField
                      label="Password"
                      type="password"
                      name="password"
                      bsSize="lg"
                      placeholder="Enter your Password"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      bsSize="lg"
                      placeholder="Enter your Confirm Password"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <div className="text-center mt-3">
                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      Sign up
                    </Button>
                  </div>
                </Form>
              </div>
            </CardBody>
          </Card>
        )}
      </Formik>

      <Modal isOpen={isOpenModals}>
        <ModalHeader>You need to confirm your account</ModalHeader>
        <ModalBody className=" m-3">
          <p className="mb-0">
            We have sent an email to <b>{email}</b>
          </p>
          <p className="mb-0">Please check your email to active account</p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={resendEmail}
            disabled={isDisableResendButton}
          >
            Resend
          </Button>
          <Button color="primary" onClick={redirectToLogin}>
            Login
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default withRouter(SignUp);
