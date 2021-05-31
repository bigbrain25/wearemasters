import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { getCurrentProfile, updateProfile } from "../actions/profileActions";
import classnames from "classnames";
import { compose } from "redux";
import { withStyles } from "@material-ui/core";
import { client } from "filestack-react";
import * as AiIcons from "react-icons/ai";
import { Spinner } from "@chevtek/react-spinners";
import isEmpty from "../validation/is-empty";
import Backdrop from "@material-ui/core/Backdrop";
import * as IconName from "react-icons/io";
import CircularProgress from "@material-ui/core/CircularProgress";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import hero from "../assets/img/hero.png";

const styles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
});

class NewUpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      ethAddress: "",
      confirmEthAddress: "",
      twitterURL: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 1);
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // If profile field doesn't exist, make empty string
      profile.firstName = !isEmpty(profile.firstName) ? profile.firstName : "";
      profile.lastName = !isEmpty(profile.lastName) ? profile.lastName : "";
      profile.userName = !isEmpty(profile.userName) ? profile.userName : "";
      profile.ethAddress = !isEmpty(profile.ethAddress)
        ? profile.ethAddress
        : "";
      profile.confirmEthAddress = !isEmpty(profile.confirmEthAddress)
        ? profile.confirmEthAddress
        : "";
      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.twitter = !isEmpty(profile.social.twitter)
        ? profile.social.twitter
        : "";
      profile.youtube = !isEmpty(profile.social.youtube)
        ? profile.social.youtube
        : "";

      // Set component field state
      this.setState({
        firstName: profile.firstName,
        lastName: profile.lastName,
        userName: profile.userName,
        ethAddress: profile.ethAddress,
        confirmEthAddress: profile.confirmEthAddress,
        bio: profile.bio,
        twitter: profile.twitter,
        youtube: profile.youtube,
      });
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

    const profileData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      ethAddress: this.state.ethAddress,
      confrimEthAddress: this.state.confirmEthAddress,
      bio: this.state.bio,
      youtube_url: this.state.youtube_url,
      twitter_url: this.state.twitter_url,
    };

    this.props.updateProfile(profileData, this.props.history);
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    return (
      <div className="bg-black text-gray pb-1">
        <div>
          <div className="">
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
          </div>
          <div>
            <p className="text-white font-black text-xl ml-20 pt-6" />
          </div>
          <div className="flex justify-evenly">
            <form
              onSubmit={this.onSubmit}
              noValidate
              className="border border-gray-300 mt-7 w-96 p-7 ml-10 bg-gray-300 mb-16 rounded need-validation"
            >
              <div className="h-24 w-24 rounded-full bg-gray-400 flex-end mb-7 pt-4 pl-6 flex justify-between">
                <button className="focus:outline-none">
                  <AiIcons.AiOutlineUserAdd size="50px" color="skyblue" />
                </button>
                <div className="ml-10 mt-2 ">
                  <IconName.IoIosAddCircle
                    color="skyblue"
                    size="40px"
                    onMouseOver={({ target }) => (target.style.color = "white")}
                    onMouseOut={({ target }) =>
                      (target.style.color = "skyblue")
                    }
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="mb-1">
                  <div>First Name</div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChange}
                    className={classnames(
                      "w-full text-xs rounded p-3 mt-2 mb-1 text-black dark:text-black bg-gray-white dark:bg-gray-300 border border-black dark:border-black focus:border focus:border-black",
                      {
                        "is-invalid": errors.firstName,
                      }
                    )}
                    placeholder="Enter first name"
                    autofocus
                    required
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>
                <div className="mb-1">
                  <div>Last Name</div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.onChange}
                    className={classnames(
                      "w-full text-xs rounded p-3 mt-2 mb-1 text-black dark:text-black bg-gray-white dark:bg-gray-300 border border-black dark:border-black focus:border focus:border-black",
                      {
                        "is-invalid": errors.lastName,
                      }
                    )}
                    placeholder="Enter last name"
                    autofocus
                    required
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>
              </div>
              <div className="flex justify-between space-x-1">
                <div className="mb-1">
                  <div>Username</div>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.onChange}
                    className={classnames(
                      "w-full text-xs rounded p-3 mt-2 mb-1 text-black dark:text-black bg-gray-white dark:bg-gray-300 border border-black dark:border-black focus:border focus:border-black",
                      {
                        "is-invalid": errors.userName,
                      }
                    )}
                    placeholder="Enter first Username"
                    autofocus
                    required
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.userName}</div>
                  )}
                </div>
                <div className="mb-1">
                  <div>Twitter Url</div>
                  <input
                    type="text"
                    id="twitterUrl"
                    name="twitterUrl"
                    value={this.state.twitterUrl}
                    onChange={this.onChange}
                    className={classnames(
                      "w-full text-xs rounded p-3 mt-2 mb-1 text-black dark:text-black bg-gray-white dark:bg-gray-300 border border-black dark:border-black focus:border focus:border-black",
                      {
                        "is-invalid": errors.twitterUrl,
                      }
                    )}
                    placeholder="e.g https://twitterUrl.be/WEA9EB7Q5RY (optional)"
                    autofocus
                    required
                  />
                  {errors.twitterUrl && (
                    <div className="invalid-feedback">{errors.ltwitterUrl}</div>
                  )}
                </div>
              </div>
              <div className="mb-1">
                <label for="ethAddress" className="form-label">
                  <strong>ETH Payout Address</strong>
                </label>
                <div className="mb-4">
                  <input
                    type="text"
                    id="ethAddress"
                    name="ethAddress"
                    value={this.state.ethAddress}
                    onChange={this.onChange}
                    className={classnames(
                      "w-full text-xs rounded p-3 mt-2 mb-1 text-black dark:text-black bg-gray-white dark:bg-gray-300 border border-black dark:border-black focus:border focus:border-black",
                      {
                        "is-invalid": errors.ethAddress,
                      }
                    )}
                    placeholder="Enter ETH payout address"
                    autofocus
                    required
                  />
                  {errors.ethAddress && (
                    <div className="invalid-feedback">{errors.ethAddress}</div>
                  )}
                </div>
                {errors.ethAddress && (
                  <div className="invalid-feedback">{errors.ethAddress}</div>
                )}
              </div>

              <div className="mb-1">
                <label for="bio" className="form-label">
                  <strong>Profile Bio</strong>
                </label>
                <textarea
                  rows="5"
                  id="bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  className={classnames(
                    "w-full text-xs rounded p-3 mt-2 mb-1 text-black dark:text-black bg-gray-white dark:bg-gray-300 border border-black dark:border-black focus:border focus:border-black",
                    {
                      "is-invalid": errors.bio,
                    }
                  )}
                  placeholder="Enter full bio for your profile"
                  required
                ></textarea>
                {errors.bio && (
                  <div className="invalid-feedback">{errors.bio}</div>
                )}
              </div>
              <div className="mb-1">
                <label for="youtubeURL" className="form-label">
                  <strong>Website Url</strong>
                </label>
                <input
                  type="text"
                  id="youtubeURL"
                  name="youtubeURL"
                  value={this.state.youtubeURL}
                  onChange={this.onChange}
                  className={classnames(
                    "w-full text-xs rounded p-3 mt-2 mb-1 text-black dark:text-black bg-gray-white dark:bg-gray-300 border border-black dark:border-black focus:border focus:border-black",
                    {
                      "is-invalid": errors.youtubeURL,
                    }
                  )}
                  placeholder="e.g https://youtu.be/WEA9EB7Q5RY (optional)"
                  autofocus
                  required
                />
                {errors.youtubeURL && (
                  <div className="invalid-feedback">{errors.youtubeURL}</div>
                )}
              </div>
              <button className="ml-16 py-6 px-8">
                <Link
                  to="/login"
                  onClick={this.onLogoutClick.bind(this)}
                  className="uppercase py-2 px-6 text-sm font-medium rounded text-white bg-blue-400"
                >
                  <Spinner name="uploadLoading">
                    <Backdrop className={classes.backdrop} open={true}>
                      <CircularProgress color="inherit" />
                    </Backdrop>
                    Processing...
                  </Spinner>
                  <Spinner name="uploadNotLoading" show={true}>
                    Update
                  </Spinner>
                </Link>
              </button>
            </form>
            <div className="self-center ml-40">
              <img
                src={hero}
                alt="hero"
                className="h-1/2 mt-10 rounded w-1/2"
              />
              <h6 className="text-white font-black text-2xl ml-40 mt-2">
                Hey Dodo
              </h6>
              <h6 className="text-white font-black text-xl ml-28 text-appRed">
                Just Add Details Dodo
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewUpdateProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors,
});

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {
    getCurrentProfile,
    updateProfile,
    logoutUser,
  })
)(NewUpdateProfile);
