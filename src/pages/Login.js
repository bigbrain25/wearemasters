/* eslint-disable */
import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import { Link, withRouter } from "react-router-dom";
import login from "../assets/img/signup.jpg";
import logo from "../assets/img/logo-white.svg";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { loginUser } from "../actions/authActions";
import { Spinner } from "@chevtek/react-spinners";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import classnames from "classnames";
import "../assets/video.min.css";

const styles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
});

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isOpen: false,
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/account");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/account");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onBlur = (field) => (e) => {
    e.preventDefault();

    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData, this.props.history);
  }

  render() {
    const { errors } = this.state;
    const { classes } = this.props;

    return (
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto py-16 lg:px-8 px-4">
          <div className="grid lg:grid-cols-12 gap-8 text-bordyColor dark:text-gray-200 items-center">
            <div className="lg:col-span-4 lg:order-first order-last">
              <div>
                <Link to="/">
                  <img src={logo} width="225px" className="mb-10" />
                </Link>

                <h2 className="text-3xl sm:text-5xl sm:leading-extraLoose font-bold capitalize">
                  welcome Back!
                </h2>
              </div>
              <form
                className="mt-12 space-y-4"
                onSubmit={this.onSubmit}
                novalidate="novalidate"
              >
                <div className="form-control flex flex-col text-sm space-y-2 text-bordyColor dark:text-gray-400">
                  <label className="capitalize font-medium">
                    email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={this.state.email}
                    onChange={this.onChange}
                    className={classnames(
                      "px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-sideBar",
                      {
                        "is-invalid": errors.email,
                      }
                    )}
                    required
                  />
                  {errors.email && (
                    <div className="form-error">{errors.email}</div>
                  )}
                </div>
                <div className="form-control flex flex-col text-sm space-y-2 text-bordyColor dark:text-gray-400">
                  <label className="capitalize font-medium">password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChange={this.onChange}
                    className={classnames(
                      "px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-sideBar",
                      {
                        "is-invalid": errors.password,
                      }
                    )}
                    required
                  />
                  {errors.password && (
                    <div className="form-error">{errors.password}</div>
                  )}
                </div>
                <div className="flex justify-end text-xs space-y-2 text-bordyColor dark:text-gray-400">
                  <button className="font-medium underline">
                    Forgot your password?
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center space-y-4">
                  <button className="px-4 py-3 bg-appRed text-sm text-gray-100 font-semibold rounded-sm w-full">
                    <Spinner name="loginLoading">
                      <Backdrop className={classes.backdrop} open={true}>
                        <CircularProgress color="inherit" />
                      </Backdrop>
                      Signing in...
                    </Spinner>
                    <Spinner name="loginNotLoading" show={true}>
                      Sign in
                    </Spinner>
                  </button>
                  {/* <p className="text-sm">or</p>
                  <div className="flex space-x-4 w-full">
                    <button className="flex items-center justify-center px-8 py-3 bg-gray-100 capitalize text-sm text-gray-600 font-semibold rounded-sm w-full">
                      <img src={fb} className="w-5 h-5 mr-4" alt="facebook" />
                      facebook
                    </button>
                    <button className="flex items-center justify-center px-8 py-3 bg-gray-100 capitalize text-sm text-gray-600 font-semibold rounded-sm w-full">
                      <img src={google} className="w-5 h-5 mr-4" alt="google" />
                      google
                    </button>
                  </div> */}
                  <div className="pt-8 text-sm text-center w-full space-y-4">
                    <p>Don't have account?</p>
                    <Link
                      to="/sign-up"
                      className="flex items-center justify-center px-8 py-3 bg-gray-100 text-sm text-gray-600 font-semibold rounded-sm w-full"
                    >
                      Create an Acccount
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <div className="lg:col-span-8">
              <div className="relative w-full text-gray-100">
                <img src={login} className="" alt="login" />
                <div className="absolute w-full h-full bg-gradient-to-t from-black top-0 left-0 bg-opacity-60 flex px-8 pb-8 items-end justify-start">
                  <div className="max-w-sm">
                    <h3 className="text-3xl sm:text-5xl sm:leading-extraLoose font-semibold mb-2">
                      Night Sky
                    </h3>
                    <p className="mb-6">
                      The `night sky` depicts a time of reflection and how all
                      our actions have consequences.
                    </p>
                    <React.Fragment>
                      <ModalVideo
                        channel="vimeo"
                        autoplay
                        isOpen={this.state.isOpen}
                        videoId="355087595"
                        onClose={() => setOpen(false)}
                      />

                      <button
                        className="px-12 py-3 bg-gray-100 rounded-full uppercase text-appRed font-medium focus:outline-none hover:bg-appRed hover:text-gray-100 duration-200"
                        onClick={() => this.state({ isOpen: true })}
                      >
                        View video
                      </button>
                    </React.Fragment>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, { loginUser })
)(withRouter(Login));
