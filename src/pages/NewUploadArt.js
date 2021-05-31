import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../actions/authActions";
import { getCurrentProfile } from "../actions/profileActions";
import classnames from "classnames";
import { client } from "filestack-react";
import { getETHRate } from "../actions/assetActions";
import { compose } from "redux";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Spinner } from "@chevtek/react-spinners";
import { withStyles } from "@material-ui/core";
import Footer from "../components/Footer";
import { uploadArt } from "../actions/assetActions";
import { Link } from "react-router-dom";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import exactMath from "exact-math";
import CurrencyFormat from "react-currency-format";

const Validator = require("validator");

const styles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
});

class NewUploadArt extends Component {
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
      edition: "",
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
      <div className="bg-black">
        <div>
          <Link to="/account">
            <a
              className="py-2 bg-gray-700 w-full h-10 fixed z-50 bg-opacity-60"
              alt="#"
              href="#"
            >
              <div className="bg-gray-400 ml-3 bg-gray-600 w-6 h-6 rounded">
                <NavigateBeforeIcon style={{ color: "#fff" }} />
              </div>
            </a>
          </Link>
          <div>
            <p className="text-white font-black text-xl ml-12 pt-14">
              Upload Item
            </p>
          </div>
          <form
            onSubmit={this.onSubmit}
            noValidate
            className="border border-gray-300 ml-12 mt-7 w-96 p-7 mb-16 rounded"
          >
            <div>
              <p className="text-white font-black text-base">Title Of Item</p>
              <input
                type="text"
                id="title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                className={classnames(
                  "w-full text-xs rounded p-3 mt-2 mb-4 text-bordyColor dark:text-gray-100 bg-gray-white dark:bg-bordyColor border-gray-300 dark:border-bordyColor focus:outline-none focus:border focus:border-gray-500",
                  {
                    "is-invalid": errors.title,
                  }
                )}
                placeholder="e.g Kaleidoscope Woman"
                autofocus
                required
              />
              {errors.title && (
                <div className="invalid-feedback">{errors.title}</div>
              )}
            </div>
            <div className="mb-4">
              <p className="text-white font-black text-base">
                {" "}
                Price of Item
                {ethPrice === null || ethPriceLoading ? null : (
                  <CurrencyFormat
                    value={exactMath.mul(1, ethPrice.amount, disableMathError)}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalSeperator="."
                    decimalScale={2}
                    fixedDecimalScale={true}
                    renderText={(value) => <span>(1 ETH = &#36;{value})</span>}
                  />
                )}
              </p>
              <div>
                <span className="border rounded-l-lg text-xs border-gray-300 bg-gray-300 p-2">
                  ETH
                </span>

                <CurrencyFormat
                  name="price"
                  id="price"
                  thousandSeparator={true}
                  decimalSeperator="."
                  decimalScale={2}
                  fixedDecimalScale={true}
                  value={this.state.price}
                  className={classnames(
                    "w-64 rounded p-3 pl-3 text-xs mt-2 mb-4 text-bordyColor dark:text-gray-100 bg-gray-white dark:bg-bordyColor border-gray-300 dark:border-bordyColor focus:outline-none focus:border focus:border-gray-500",
                    {
                      "is-invalid": errors.price,
                    }
                  )}
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
                <button
                  className="p-3 w-full rounded text-xs text-center cursor-pointer text-bordyColor dark:text-gray-100 bg-blue-400 border-gray-300 dark:border-bordyColor"
                  onClick={this.uploadImage.bind(this)}
                >
                  Click to Upload
                </button>
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
              <p className="text-white font-black text-base">Editions</p>
              <input
                type="number"
                value={this.state.animation_url}
                onChange={this.onChange}
                className={classnames(
                  "w-full rounded text-xs p-3 mt-2 mb-4 text-bordyColor dark:text-gray-100 bg-gray-white dark:bg-bordyColor border-gray-300 dark:border-bordyColor focus:outline-none focus:border focus:border-gray-500",
                  {
                    "is-invalid": errors.animation_url,
                  }
                )}
                placeholder="Item No e.g 1/10 (optional)"
                required
              />
              {errors.animation_url && (
                <div className="invalid-feedback">{errors.animation_url}</div>
              )}
            </div>
            <div className="mb-4">
              <p className="text-white font-black text-base">
                Description of Digital Art
              </p>
              <textarea
                rows="5"
                id="description"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
                className={classnames(
                  "w-full text-xs rounded p-2 mt-2 mb-4 text-bordyColor dark:text-gray-100 bg-gray-white dark:bg-bordyColor border-gray-300 dark:border-bordyColor focus:outline-none focus:border focus:border-gray-500",
                  {
                    "is-invalid": errors.description,
                  }
                )}
                placeholder="Enter full description for Digital Art"
                required
              ></textarea>
              {errors.description && (
                <div className="invalid-feedback">{errors.description}</div>
              )}
            </div>
            <button className="ml-20 py-6 px-8">
              <Link
                to="/login"
                onClick={this.onLogoutClick.bind(this)}
                className="uppercase py-2 px-6 text-sm font-medium rounded text-white bg-appRed"
              >
                <Spinner name="uploadLoading">
                  <Backdrop className={classes.backdrop} open={true}>
                    <CircularProgress color="inherit" />
                  </Backdrop>
                  Processing...
                </Spinner>
                <Spinner name="uploadNotLoading" show={true}>
                  Submit
                </Spinner>
              </Link>
            </button>
          </form>
        </div>
        <div></div>
        <div className="">
          <Footer />
        </div>
      </div>
    );
  }
}

NewUploadArt.propTypes = {
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
)(NewUploadArt);
