import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, FastField } from "formik";
import { ReactstrapInput } from "reactstrap-formik";
import * as Yup from "yup";
import LoginApi from "../../api/LoginApi";
import {
  setUserLoginInfo,
  setTokenInfo,
} from "../../redux/actions/UserLoginInfoActions";
import { connect } from "react-redux";
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

import avatar from "../../assets/img/avatars/avatar.jpg";

import stogare from "../../Stogare/Stogare";
import { toastr } from "react-redux-toastr";
import UserApi from "../../api/UserApi";

const showErrorNotification = (title, message) => {
  const options = {
    timeOut: 3000,
    showCloseButton: false,
    progressBar: false,
    position: "top-right",
  };

  // show notification
  toastr.error(title, message, options);
};

const SignIn = (props) => {
  const [isOpenModals, setOpenModals] = useState(false);

  const [email, setEmail] = useState();

  const [isDisableResendButton, setIsDisableResendButton] = useState(false);

  const resendEmail = async () => {
    setIsDisableResendButton(true);
    await UserApi.resendEmail(email);
    setIsDisableResendButton(false);
  };
  // rememberme
  // const [checkedRemember, setCheckedRemember] = useState(
  //   stogare.isRememberMe()
  // );
  return (
    <React.Fragment>
      <div className="text-center mt-4">
        <h2>Welcome to VTI Academy</h2>
        <p className="lead">Sign in to your account to continue</p>
      </div>

      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .min(6, "Must be between 6 and 50 characters")
            .max(50, "Must be between 6 and 50 characters")
            .required("Required"),
          // // .test(
          //   "checkExistUserName",
          //   "This UserName is already registered."
          //   // async (username) => {
          //   //   // call api
          //   //   const isExists = await LoginApi.existsByUsername(username);
          //   //   return !isExists;
          //   // }
          // // ),

          password: Yup.string()
            .min(6, "Must be between 6 and 50 characters")
            .max(50, "Must be between 6 and 50 characters")
            .required("Required"),
        })}
        onSubmit={async (values) => {
          try {
            // call api

            const result = await LoginApi.login(
              values.userName,
              values.password
            );

            // check user active
            if (result.token === null || result.token === undefined) {
              setEmail(result.email);
              setOpenModals(true);
            } else {
              // stogare.setRememberMe();
              // Save token and userInfo to Stogare
              stogare.setToken(result.token);
              stogare.setUserInfo(
                result.userName,
                result.email,
                result.firstName,
                result.lastName,
                result.role,
                result.status
              );

              // save token and unserInfo to redux
              props.setTokenInfo(result.token);
              props.setUserLoginInfo(
                result.userName,
                result.email,
                result.firstName,
                result.lastName,
                result.role,
                result.status
              );

              //redirect to hame page
              props.history.push("/dashboard/default");
            }
          } catch (error) {
            if (error.status === 401) {
              showErrorNotification(
                "Login False",
                "Wrong UserName or Password!"
              );
            } else {
              props.history.push("/auth/500");
              // console.log(error);
            }
          }
        }}
        // validateOnChange={false}
        // validateOnBlur={false}
      >
        {({ isSubmitting }) => (
          <Card>
            <CardBody>
              <div className="m-sm-4">
                <div className="text-center">
                  <img
                    src={avatar}
                    alt="Chris Wood"
                    className="img-fluid rounded-circle"
                    width="132"
                    height="132"
                  />
                </div>
                <Form>
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
                      label="Password"
                      type="password"
                      name="password"
                      bsSize="lg"
                      placeholder="Enter your Password"
                      component={ReactstrapInput}
                    />
                    <small>
                      <Link to="/auth/reset-password">Forgot password?</Link>
                    </small>
                  </FormGroup>

                  {/* <div>
                    <CustomInput
                      type="checkbox"
                      id="rememberMe"
                      label="Remember me next time"
                      // defaultChecked={checkedRemember}
                      // onChange={() => setCheckedRemember(!checkedRemember)}
                    />
                  </div> */}
                  <div className="text-center mt-3">
                    <Button
                      color="primary"
                      size="lg"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Sign in
                    </Button>
                  </div>
                </Form>
              </div>
            </CardBody>
          </Card>
        )}
      </Formik>

      <Modal isOpen={isOpenModals}>
        <ModalHeader>You need to active your account</ModalHeader>
        <ModalBody className=" m-3">
          <p className="mb-0">You account is not active</p>
          <p className="mb-0">
            Please check your <b>{email}</b> to active account!
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={resendEmail}
            disabled={isDisableResendButton}
          >
            Resend
          </Button>
          <Button color="primary" onClick={() => setOpenModals(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default connect(null, { setUserLoginInfo, setTokenInfo })(SignIn);
