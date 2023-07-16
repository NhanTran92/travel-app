import React, { useState } from "react";
import * as Yup from "yup";
import UserApi from "../../api/UserApi";
import { Formik, Form, FastField } from "formik";
import { ReactstrapInput } from "reactstrap-formik";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  // Modal,
  // ModalBody,
  // ModalFooter,
  // ModalHeader,
} from "reactstrap";
import { toastr } from "react-redux-toastr";

const NewPassword = (props) => {
  const { token } = useParams();

  // if (!token) {
  //   props.history.push("/auth/500");
  // }

  console.log(token);

  const [isOpenModals, setOpenModals] = useState(false);

  const showNotification = (title, message) => {
    const options = {
      timeOut: 3000,
      showCloseButton: false,
      progressBar: false,
      position: "top-right",
    };

    // show notification
    toastr.success(title, message, options);
  };

  const redirectToLogin = () => {
    props.history.push("/auth/sign-in");
  };

  return (
    <React.Fragment>
      <div className="text-center mt-4">
        <h1 className="h2">Reset password</h1>
        <p className="lead">Enter your new password.</p>
      </div>

      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .min(6, "Must be between 6 and 50 characters")
            .max(50, "Must be between 6 and 50 characters")
            .required("Required"),

          confirmPassword: Yup.string()
            .required("Required")
            .oneOf([Yup.ref("password")], "Confirm Password do not match"),
        })}
        onSubmit={async (values) => {
          try {
            // call api
            await UserApi.resetPassword(token, values.password);

            showNotification(
              "Reset Password",
              "Reset Password Successfully!!!"
            );

            redirectToLogin();
            // message
            // alert("Success");
            // setEmail(values.email);
            setOpenModals(true);
          } catch (error) {
            props.history.push("/auth/500");
            // console.log(error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Card>
            <CardBody>
              <div className="m-sm-4">
                <Form>
                  <FormGroup>
                    <FastField
                      label="Password"
                      type="password"
                      name="password"
                      bsSize="lg"
                      placeholder="Enter your new Password"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      bsSize="lg"
                      placeholder="Enter your new Confirm Password"
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
    </React.Fragment>
  );
};

export default NewPassword;
