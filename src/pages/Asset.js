/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { getAssetByID, getETHRate, updateAsset } from "../actions/assetActions";
import classnames from "classnames";
import { compose } from "redux";
import { withStyles } from "@material-ui/core";
import exactMath from "exact-math";
import { Spinner } from "@chevtek/react-spinners";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import CurrencyFormat from "react-currency-format";
import { Helmet } from "react-helmet";
import logo from "../assets/img/favicon.png";
import isEmpty from "../validation/is-empty";

const styles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
});

class Asset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      token_id: "",
      contract_address: "",
      price: "",
      description: "",
      image: "",
      youtube: "",
      facebook: "",
      twitter: "",
      instagram: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 1);
    this.props.getETHRate();
    this.props.getAssetByID(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getAssetByID(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.asset.asset) {
      const asset = nextProps.asset.asset;

      // If asset field doesn't exist, make empty string
      asset.name = !isEmpty(asset.name) ? asset.name : "";
      asset.token_id = !isEmpty(asset.token_id) ? asset.token_id : "";
      asset.contract_address = !isEmpty(asset.contract_address)
        ? asset.contract_address
        : "";
      asset.price = !isEmpty(asset.price) ? asset.price : "";
      asset.description = !isEmpty(asset.description) ? asset.description : "";
      asset.image = !isEmpty(asset.image) ? asset.image : "";
      asset.twitter = !isEmpty(asset.twitter) ? asset.twitter : "";
      asset.facebook = !isEmpty(asset.facebook) ? asset.facebook : "";
      asset.youtube = !isEmpty(asset.youtube) ? asset.youtube : "";
      asset.instagram = !isEmpty(asset.instagram) ? asset.instagram : "";

      // Set component field state
      this.setState({
        name: asset.name,
        token_id: asset.token_id,
        contract_address: asset.contract_address,
        price: asset.price,
        description: asset.description,
        image: asset.image,
        twitter: asset.twitter,
        facebook: asset.facebook,
        youtube: asset.youtube,
        instagram: asset.instagram,
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const assetData = {
      id: this.props.match.params.id,
      name: this.state.name,
      token_id: this.state.token_id,
      contract_address: this.state.contract_address,
      price: this.state.price,
      description: this.state.description,
      image: this.state.image,
      youtube: this.state.youtube,
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      instagram: this.state.instagram,
    };

    this.props.updateAsset(assetData, this.props.history);
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

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>WeAreMasters - Update Profile</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
            crossorigin="anonymous"
          />
        </Helmet>

        <div className="container py-4">
          <div className="row no-gutter">
            <div className="col-md-4 m-auto mt-4">
              <Link to="/account">
                <img
                  width="100"
                  src={logo}
                  alt="WeAreMasters Logo"
                  className="center-image mt-2 mb-4"
                />
              </Link>
            </div>
            <div className="col-md-12">
              <div className="col-md-6 m-auto">
                <h2 className="text-center mb-4">
                  <strong style={{ wordSpacing: "5px" }}>
                    APPROVE DIGITAL ART
                  </strong>
                </h2>
                <form
                  className="need-validation"
                  onSubmit={this.onSubmit}
                  noValidate
                >
                  {errors.error && (
                    <div class="alert alert-danger text-center" role="alert">
                      {errors.error}
                    </div>
                  )}
                  <div className="mb-4">
                    <label for="name" className="form-label">
                      <strong>Title of Digital Art</strong>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.name,
                      })}
                      placeholder="Enter title of Digital Art"
                      autofocus
                      required
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label for="token_id" className="form-label">
                      <strong>Token ID for Digital Art</strong>
                    </label>
                    <input
                      type="text"
                      id="token_id"
                      name="token_id"
                      value={this.state.token_id}
                      onChange={this.onChange}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.token_id,
                      })}
                      placeholder="Enter Token ID for Digital Art"
                      autofocus
                      required
                    />
                    {errors.token_id && (
                      <div className="invalid-feedback">{errors.token_id}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label for="contract_address" className="form-label">
                      <strong>Contract Address for Digital Art</strong>
                    </label>
                    <input
                      type="text"
                      id="contract_address"
                      name="contract_address"
                      value={this.state.contract_address}
                      onChange={this.onChange}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.contract_address,
                      })}
                      placeholder="Enter Contract Address for Digital Art"
                      autofocus
                      required
                    />
                    {errors.contract_address && (
                      <div className="invalid-feedback">
                        {errors.contract_address}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label for="price" className="form-label">
                      <strong>
                        Price of Digital Art in ETH{" "}
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
                      <input
                        type="text"
                        id="price"
                        name="price"
                        value={this.state.price}
                        onChange={this.onChange}
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.price,
                        })}
                        placeholder="e.g 2.5"
                        autofocus
                        required
                      />
                    </div>
                    {errors.price && (
                      <div className="invalid-feedback">{errors.price}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label for="description" className="form-label">
                      <strong>Description for Digital Art</strong>
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
                      placeholder="Enter full description for your Digital Art"
                      required
                    ></textarea>
                    {errors.description && (
                      <div className="invalid-feedback">
                        {errors.description}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label for="image" className="form-label">
                      <strong>Image URL for Digital Art</strong>
                    </label>
                    <input
                      type="text"
                      id="image"
                      name="image"
                      value={this.state.image}
                      onChange={this.onChange}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.image,
                      })}
                      placeholder="e.g https://filestack.com/WEA9EB7Q5RY"
                      autofocus
                      required
                    />
                    {errors.image && (
                      <div className="invalid-feedback">{errors.image}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label for="youtube" className="form-label">
                      <strong>YouTube URL for Digital Art</strong>
                    </label>

                    <input
                      type="text"
                      id="youtube"
                      name="youtube"
                      value={this.state.youtube}
                      onChange={this.onChange}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.youtube,
                      })}
                      placeholder="e.g https://youtu.be/WEA9EB7Q5RY (optional)"
                      autofocus
                      required
                    />
                    {errors.youtube && (
                      <div className="invalid-feedback">{errors.youtube}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label for="facebook" className="form-label">
                      <strong>FaceBook URL for Digital Art</strong>
                    </label>
                    <input
                      type="text"
                      id="facebook"
                      name="facebook"
                      value={this.state.facebook}
                      onChange={this.onChange}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.facebook,
                      })}
                      placeholder="e.g https://facebook.com/WEA9EB7Q5RY (optional)"
                      autofocus
                      required
                    />
                    {errors.facebook && (
                      <div className="invalid-feedback">{errors.facebook}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label for="twitter" className="form-label">
                      <strong>Twitter URL for Digital Art</strong>
                    </label>
                    <input
                      type="text"
                      id="twitter"
                      name="twitter"
                      value={this.state.twitter}
                      onChange={this.onChange}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.twitter,
                      })}
                      placeholder="e.g https://twitter.com/WEA9EB7Q5RY (optional)"
                      autofocus
                      required
                    />
                    {errors.twitter && (
                      <div className="invalid-feedback">{errors.twitter}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label for="instagram" className="form-label">
                      <strong>Instagram URL for Digital Art</strong>
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      name="instagram"
                      value={this.state.instagram}
                      onChange={this.onChange}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.instagram,
                      })}
                      placeholder="e.g https://instagram.com/WEA9EB7Q5RY (optional)"
                      autofocus
                      required
                    />
                    {errors.instagram && (
                      <div className="invalid-feedback">{errors.instagram}</div>
                    )}
                  </div>

                  <div className="d-grid gap-2">
                    <button className="btn btn-lg btn-primary" type="submit">
                      <Spinner name="updateAssetLoading">
                        <Backdrop className={classes.backdrop} open={true}>
                          <CircularProgress color="inherit" />
                        </Backdrop>
                        Processing...
                      </Spinner>
                      <Spinner name="updateAssetNotLoading" show={true}>
                        Proceed to Approve Digital Art
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
      </div>
    );
  }
}

Asset.propTypes = {
  getAssetByID: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  asset: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  getETHRate: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors,
  ethRate: state.ethRate,
  asset: state.asset,
});

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {
    getAssetByID,
    getETHRate,
    updateAsset,
    logoutUser,
  })
)(Asset);
