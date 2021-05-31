/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { getCurrentProfile } from "../actions/profileActions";
import classnames from "classnames";
import { compose } from "redux";
import { withStyles } from "@material-ui/core";
import CurrencyFormat from "react-currency-format";
import { client } from "filestack-react";
import { Spinner } from "@chevtek/react-spinners";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { uploadArt } from "../actions/assetActions";
import { Helmet } from "react-helmet";
import { getETHRate } from "../actions/assetActions";
import exactMath from "exact-math";
import logo from "../assets/img/favicon.png";

const Validator = require("validator");

const styles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
});

class UploadArt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      price: "",
      image_url: "",
      animation_url: "",
      youtube_url: "",
      facebook_url: "",
      twitter_url: "",
      instagram_url: "",
      description: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 1);
    this.props.getCurrentProfile();
    this.props.getETHRate();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  uploadImage(e) {
    e.preventDefault();

    const apikey = "ADBFWdFLGQ8C3n9tImp8Ez";
    const options = {
      accept: "image/*",
      maxFiles: 1,
      transformations: {
        crop: true,
      },
      onFileUploadFinished: (res) => {
        this.setState({
          image_url: res.url,
        });
      },
    };

    const filestack = client.init(apikey, options);
    const picker = filestack.picker(options);
    picker.open();
  }

  onSubmit(e) {
    e.preventDefault();

    const uploadData = {
      title: this.state.title,
      price: this.state.price,
      image_url: this.state.image_url,
      animation_url: this.state.animation_url,
      youtube_url: this.state.youtube_url,
      facebook_url: this.state.facebook_url,
      twitter_url: this.state.twitter_url,
      instagram_url: this.state.instagram_url,
      description: this.state.description,
    };

    this.props.uploadArt(uploadData, this.props.history);
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    const { ethPrice, ethPriceLoading } = this.props.ethRate;
    const disableMathError = { invalidError: false };

    let imageBox;

    if (!Validator.isEmpty(this.state.image_url)) {
      imageBox = (
        <div className="col-md-6 m-auto">
          <img
            src={this.state.image_url}
            alt="Digital Art Preview"
            className="image-preview"
          />
        </div>
      );
    }

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>WeAreMasters - Upload Digital Art</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
            crossorigin="anonymous"
          />
        </Helmet>

        <div className="container mt-20 mb-100">
          <div className="row no-gutter">
            <div className="col-md-12 mt-4">
              <Link to="/account">
                <img
                  width="100"
                  src={logo}
                  alt="WeAreMasters Logo"
                  className="center-image mt-2"
                />
              </Link>
            </div>
            <div className="col-md-6 m-auto">
              <hr />
              <h2 className="text-center mb-4">
                <strong>UPLOAD DIGITAL ART</strong>
              </h2>
              <form
                className="need-validation"
                onSubmit={this.onSubmit}
                noValidate
              >
                <div className="mb-4">
                  <label for="title" className="form-label">
                    <strong>
                      Title of Digital Art (e.g Kaleidoscope Woman by IPneuma)
                    </strong>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.title,
                    })}
                    placeholder="e.g Kaleidoscope Woman by IPneuma"
                    autofocus
                    required
                  />
                  {errors.title && (
                    <div className="invalid-feedback">{errors.title}</div>
                  )}
                </div>
                <div className="mb-4">
                  <label for="price" className="form-label">
                    <strong>
                      Price of Digital Art{" "}
                      {ethPrice === null || ethPriceLoading ? null : (
                        <CurrencyFormat
                          value={exactMath.mul(
                            1,
                            ethPrice.amount,
                            disableMathError
                          )}
                          displayType={"text"}
                          thousandSeparator={true}
                          decimalSeperator="."
                          decimalScale={2}
                          fixedDecimalScale={true}
                          renderText={(value) => (
                            <span>(1 ETH = &#36;{value})</span>
                          )}
                        />
                      )}
                    </strong>
                  </label>
                  <div className="input-group mb-4">
                    <span className="input-group-text">
                      <strong>ETH</strong>
                    </span>

                    <CurrencyFormat
                      name="price"
                      id="price"
                      thousandSeparator={true}
                      decimalSeperator="."
                      decimalScale={2}
                      fixedDecimalScale={true}
                      value={this.state.price}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.price,
                      })}
                      onValueChange={(values) => {
                        const { value } = values;
                        this.setState({
                          price: value,
                        });
                      }}
                      placeholder="e.g 2.75"
                      required
                    />
                  </div>
                  {errors.price && (
                    <div
                      style={{
                        color: "#dc3545",
                        fontSize: "12px",
                        marginTop: "-15px",
                        fontWeight: "400",
                      }}
                    >
                      {errors.price}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  {!Validator.isEmpty(this.state.image_url) ? (
                    imageBox
                  ) : (
                    <div
                      className="upload-image"
                      onClick={this.uploadImage.bind(this)}
                    >
                      Click this area to Select Image for Digital Art
                    </div>
                  )}

                  {errors.image_url && (
                    <div
                      style={{
                        color: "#dc3545",
                        fontSize: "12px",
                        marginTop: "5px",
                        fontWeight: "400",
                      }}
                    >
                      {errors.image_url}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label for="name" className="form-label">
                    <strong>Animation URL for Digital Art</strong>
                  </label>
                  <input
                    type="text"
                    id="animation_url"
                    name="animation_url"
                    value={this.state.animation_url}
                    onChange={this.onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.animation_url,
                    })}
                    placeholder="e.g https://youtu.be/WEA9EB7Q5RY (optional)"
                    required
                  />
                  {errors.animation_url && (
                    <div className="invalid-feedback">
                      {errors.animation_url}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label for="youtube_url" className="form-label">
                    <strong>YouTube URL for Digital Art</strong>
                  </label>
                  <input
                    type="text"
                    id="youtube_url"
                    name="youtube_url"
                    value={this.state.youtube_url}
                    onChange={this.onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.youtube_url,
                    })}
                    placeholder="e.g https://youtu.be/WEA9EB7Q5RY (optional)"
                    autofocus
                    required
                  />
                  {errors.youtube_url && (
                    <div className="invalid-feedback">{errors.youtube_url}</div>
                  )}
                </div>
                <div className="mb-4">
                  <label for="facebook_url" className="form-label">
                    <strong>FaceBook URL for Digital Art</strong>
                  </label>
                  <input
                    type="text"
                    id="facebook_url"
                    name="facebook_url"
                    value={this.state.facebook_url}
                    onChange={this.onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.facebook_url,
                    })}
                    placeholder="e.g https://facebook.com/WEA9EB7Q5RY (optional)"
                    autofocus
                    required
                  />
                  {errors.facebook_url && (
                    <div className="invalid-feedback">
                      {errors.facebook_url}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label for="twitter_url" className="form-label">
                    <strong>Twitter URL for Digital Art</strong>
                  </label>
                  <input
                    type="text"
                    id="twitter_url"
                    name="twitter_url"
                    value={this.state.twitter_url}
                    onChange={this.onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.twitter_url,
                    })}
                    placeholder="e.g https://twitter.com/WEA9EB7Q5RY (optional)"
                    autofocus
                    required
                  />
                  {errors.twitter_url && (
                    <div className="invalid-feedback">{errors.twitter_url}</div>
                  )}
                </div>
                <div className="mb-4">
                  <label for="instagram_url" className="form-label">
                    <strong>Instagram URL for Digital Art</strong>
                  </label>
                  <input
                    type="text"
                    id="instagram_url"
                    name="instagram_url"
                    value={this.state.instagram_url}
                    onChange={this.onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.instagram_url,
                    })}
                    placeholder="e.g https://instagram.com/WEA9EB7Q5RY (optional)"
                    autofocus
                    required
                  />
                  {errors.instagram_url && (
                    <div className="invalid-feedback">
                      {errors.instagram_url}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label for="name" className="form-label">
                    <strong>Description of Digital Art</strong>
                  </label>
                  <textarea
                    rows="5"
                    id="description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.description,
                    })}
                    placeholder="Enter full description for Digital Art"
                    required
                  ></textarea>
                  {errors.description && (
                    <div className="invalid-feedback">{errors.description}</div>
                  )}
                </div>

                <div className="d-grid gap-2">
                  <button className="btn btn-lg btn-primary" type="submit">
                    <Spinner name="uploadLoading">
                      <Backdrop className={classes.backdrop} open={true}>
                        <CircularProgress color="inherit" />
                      </Backdrop>
                      Processing...
                    </Spinner>
                    <Spinner name="uploadNotLoading" show={true}>
                      Proceed to Submit Digital Art
                    </Spinner>
                  </button>
                </div>
              </form>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <div className="d-grid gap-2">
                    <Link to="/account" className="btn btn-dark my-2">
                      Back Home
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-grid gap-2">
                    <Link to="/market" className="btn btn-dark my-2">
                      Market Place
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="mb-5" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UploadArt.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  uploadArt: PropTypes.func.isRequired,
  getETHRate: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  ethRate: state.ethRate,
  errors: state.errors,
});

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {
    getCurrentProfile,
    uploadArt,
    logoutUser,
    getETHRate,
  })
)(UploadArt);
