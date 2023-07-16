import React, { useState } from "react";
import * as Yup from "yup";
import UserApi from "../../api/UserApi";
import { Formik, Form, FastField } from "formik";
import { ReactstrapInput } from "reactstrap-formik";
// import { useParams } from "react-router-dom";

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

const ResetPassword = (props) => {
  const [isOpenModals, setOpenModals] = useState(false);

  const [email, setEmail] = useState("");

  const [isDisableResendButton, setIsDisableResendButton] = useState(false);

  // const { token } = useParams();
  // console.log(token);

  const resendEmailToResetPassword = async () => {
    setIsDisableResendButton(true);
    await UserApi.resendEmailToResetPassword(email);
    setIsDisableResendButton(false);
  };

  const redirectToHome = async () => {
    props.history.push(`/layouts/theme-corporate`);
  };

  return (
    <React.Fragment>
      <div className="text-center mt-4">
        <h1 className="h2">Reset password</h1>
        <p className="lead">Enter your email to reset your password.</p>
      </div>

      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required")
            .test(
              "checkExistEmail",
              "This email is not exits registered.",
              async (email) => {
                // call api
                const isExists = await UserApi.existsByEmail(email);
                return isExists;
              }
            ),
        })}
        onSubmit={async (values) => {
          try {
            // call api
            await UserApi.requestResetPassword(values.email);
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
                      label="Email"
                      type="email"
                      name="email"
                      bsSize="lg"
                      placeholder="Enter your email"
                      component={ReactstrapInput}
                    />
                  </FormGroup>
                  <div className="text-center mt-3">
                    <Button
                      color="primary"
                      size="lg"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Reset password
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
          <p className="mb-0">Please check your email to reset password</p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={resendEmailToResetPassword}
            disabled={isDisableResendButton}
          >
            Resend
          </Button>
          <Button color="primary" onClick={redirectToHome}>
            Home
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default ResetPassword;
