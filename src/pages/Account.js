/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Avatar from "react-avatar";
import {
  logoutUser,
  activateAccount,
  resendActivationToken,
} from "../actions/authActions";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { getCurrentProfile } from "../actions/profileActions";
import { getAssets, getETHRate } from "../actions/assetActions";
import { compose } from "redux";
import { withStyles } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Footer from "../components/Footer";
import swal from "@sweetalert/with-react";

const styles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  table: {
    minWidth: 650,
  },
});

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
const endTime = stratTime + 1043248; // use UNIX timestamp in seconds

const remainingTime = endTime - stratTime;
const days = Math.ceil(remainingTime / daySeconds);
const daysDuration = days * daySeconds;

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const UrgeWithPleasureComponent = () => (
  <CountdownCircleTimer
    isPlaying
    duration={10}
    colors={[
      ["#004777", 0.33],
      ["#F7B801", 0.33],
      ["#A30000", 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);
class Account extends Component {
  constructor() {
    super();
    this.state = {
      code: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 1);
    this.props.getAssets();
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  resendCode(e) {
    e.preventDefault();

    this.props.resendActivationToken(this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.code.length !== 6) {
      swal("Error!", "Authorization code provided must be 6 digits.", "error");

      return;
    }

    const codeData = {
      code: this.state.code,
    };

    this.props.activateAccount(codeData, this.props.history);
  }

  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    const { user } = this.props.auth;
    const { profile, profileLoading } = this.props.profile;
    const { assets, assetLoading } = this.props.asset;

    const collection = [
      {
        img: "https://lh3.googleusercontent.com/9nTeFgvJAxS5I2es5KkxnjuP7dwbt0wWyR4V34LlaUPOQnBHK-omJbSw3lUeWvRhki7AJocyzYspSneOuXqqQdauxF_4-dyLwwz5=s0",
      },
      {
        img: "https://lh3.googleusercontent.com/m6rihxymByjWXFJWO3h4lIz2EJcWWxtlmRuH9VgpFbTRjBxltm7oyO7G0vfkeSZArdqsE-VI573oygdpURJtCtwqfAiJlMO-Fvfkjw=s0",
      },
      {
        img: "https://lh3.googleusercontent.com/CPe3saEkiRAMGiOuKIMtGXnent817rjIKGcwBRhSADk5zzFLsFxbHoWwc0qKqGqCFONS0E5SvT0ljbsZBiKLWolVFWP75PtcGCuh=s0",
      },
      {
        img: "https://lh3.googleusercontent.com/m6rihxymByjWXFJWO3h4lIz2EJcWWxtlmRuH9VgpFbTRjBxltm7oyO7G0vfkeSZArdqsE-VI573oygdpURJtCtwqfAiJlMO-Fvfkjw=s0",
      },
      {
        img: "https://lh3.googleusercontent.com/KBPFHbreehLr7iQYTAeAmAoQqM4GwlRJk9O9x9bLpBy1uVqtJEZTTEXkJ2-0bClw1zvFAmEDhXHctKAdW8tp2LwpMSMSROsUlyjS1A=s0",
      },
      {
        img: "https://lh3.googleusercontent.com/9nTeFgvJAxS5I2es5KkxnjuP7dwbt0wWyR4V34LlaUPOQnBHK-omJbSw3lUeWvRhki7AJocyzYspSneOuXqqQdauxF_4-dyLwwz5=s0",
      },
    ];
    const creation = [
      {
        img: "https://lh3.googleusercontent.com/CPe3saEkiRAMGiOuKIMtGXnent817rjIKGcwBRhSADk5zzFLsFxbHoWwc0qKqGqCFONS0E5SvT0ljbsZBiKLWolVFWP75PtcGCuh=s0",
      },
      {
        img: "https://lh3.googleusercontent.com/9nTeFgvJAxS5I2es5KkxnjuP7dwbt0wWyR4V34LlaUPOQnBHK-omJbSw3lUeWvRhki7AJocyzYspSneOuXqqQdauxF_4-dyLwwz5=s0",
      },
    ];
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
        partialVisibilityGutter: 0,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        partialVisibilityGutter: 0,
      },
      tablet: {
        breakpoint: { max: 1024, min: 650 },
        items: 1,
        partialVisibilityGutter: 0,
      },
      mobile: {
        breakpoint: { max: 650, min: 0 },
        items: 1,
        partialVisibilityGutter: 0,
      },
    };

    const getCollections = collection.map((img) => {
      return (
        <div className="w-full px-2 py-2">
          <img src={img.img} className="object-cover w-full"></img>
        </div>
      );
    });
    const getCreations = creation.map((img) => {
      return (
        <div className="w-full h-track">
          <img src={img.img} className="object-cover w-full h-full"></img>
        </div>
      );
    });
    const Navigation = ({ goToSlide, ...rest }) => {
      const {
        carouselState: { currentSlide },
      } = rest;
      return (
        <div className="carousel-button-group absolute top-0 right-0 left-0 text-center">
          {" "}
          <button
            onClick={() => goToSlide(0)}
            className={
              currentSlide === 0
                ? "px-2 sm:px-8 duration-100 ease-in-out py-2 mx-2 text-lg uppercase focus:outline-none border-b border-gray-400"
                : "px-2 sm:px-8 duration-100 ease-in-out py-2 mx-2 text-lg uppercase focus:outline-none"
            }
          >
            {" "}
            creations{" "}
          </button>
          <button
            onClick={() => goToSlide(1)}
            className={
              currentSlide === 1
                ? "px-2 sm:px-8 duration-100 ease-in-out py-2 mx-2 text-lg uppercase focus:outline-none border-b border-gray-400"
                : "px-2 sm:px-8 duration-100 ease-in-out py-2 mx-2 text-lg uppercase focus:outline-none"
            }
          >
            series
          </button>
        </div>
      );
    };
    return (
      //<div>
      //   {user.isVerified === true ? (
      <div>
        <Link to="/">
          <a
            className="py-2 bg-gray-700 w-full h-10 fixed z-50 bg-opacity-90"
            alt="#"
            href="#"
          >
            <div className="bg-gray-400 ml-3 bg-gray-600 w-6 h-6 rounded">
              <NavigateBeforeIcon style={{ color: "#fff" }} />
            </div>
            <div className="flex justify-end pr-4 relative -top-6">
              <Link
                to="/login"
                onClick={this.onLogoutClick.bind(this)}
                className="uppercase py-1 px-4 text-xs font-medium rounded text-white bg-appRed"
              >
                log out
              </Link>
            </div>
          </a>
        </Link>
        <div className="relative">
          <div className="max-w-7xl mx-auto text-bordyColor dark:text-gray-100 py-16 relative lg:px-8 px-10">
            <div className="grid grid-cols-12 gap-4 ml-20">
              <div className="col-span-12 sm:col-span-8 lg:col-span-5">
                <div className="w-24 h-24">
                  <Avatar
                    name={`${user.firstName} ${user.lastName}`}
                    size="100"
                    round="100%"
                    className="mx-auto"
                  />
                </div>
                <h4
                  className="mt-4"
                  style={{ fontWeight: "700", fontSize: "25px" }}
                >
                  {user.firstName + " " + user.lastName}{" "}
                </h4>
                <div className="flex space-x-6">
                  <p>Followers: 0</p>
                  <p className="">Following: 0</p>
                  <p className="">Creations: 0</p>
                </div>

                <div className="my-3">
                  <button
                    className="text-appRed focus:outline-none"
                    style={{ fontWeight: "600", fontSize: "20px" }}
                  >
                    @{user.username}
                  </button>
                  <div className="flex mt-4">
                    <p className="text-xl font-black">ETH Address :</p>
                    <p className="ml-2 text-xs mt-1 pt-1">3khbfjvnjnkcjk........</p>
                  </div>

                  <p className="mt-2">
                    British in 1960. Our living rooms or parlors have become the
                    arena citizens of our nascent nation have sat to watch the
                    deconstruction of the dream our founding fathers had. We’ve
                    seen
                  </p>
                </div>
                <div className="mt-8 mb-6">
                  <Link
                    to="/update-profile"
                    className="bg-gray-100 rounded-sm py-2 px-4 text-sm font-medium text-gray-600 mr-2"
                  >
                    Edit Profile
                  </Link>
                  <Link
                    to="/upload-art"
                    className="bg-gray-100 rounded-sm py-2 px-4 text-sm font-medium text-gray-600 mr-2"
                  >
                    Upload Art
                  </Link>
                  <div className="mt-6">
                    <Link
                      to="/next"
                      className="bg-gray-100 w-full rounded-sm py-2 ml-1 px-12 text-sm font-medium text-gray-600"
                    >
                      Next Drop Timer
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border bg-gray-400 h-full w-96 font-black text-7xl pt-10 text-center ml-36">
                When Is Your Next Drop?
                <div className="relative top-28 flex w-full">
                  <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#f8f8ff"]]}
                    duration={daysDuration}
                    initialRemainingTime={remainingTime}
                  >
                    {({ elapsedTime }) =>
                      renderTime(
                        "days",
                        getTimeDays(daysDuration - elapsedTime)
                      )
                    }
                  </CountdownCircleTimer>
                  <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#f8f8ff"]]}
                    duration={daySeconds}
                    initialRemainingTime={remainingTime % daySeconds}
                    onComplete={(totalElapsedTime) => [
                      remainingTime - totalElapsedTime > hourSeconds,
                    ]}
                  >
                    {({ elapsedTime }) =>
                      renderTime(
                        "hours",
                        getTimeHours(daySeconds - elapsedTime)
                      )
                    }
                  </CountdownCircleTimer>
                  <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#f8f8ff"]]}
                    duration={hourSeconds}
                    initialRemainingTime={remainingTime % hourSeconds}
                    onComplete={(totalElapsedTime) => [
                      remainingTime - totalElapsedTime > minuteSeconds,
                    ]}
                  >
                    {({ elapsedTime }) =>
                      renderTime(
                        "minutes",
                        getTimeMinutes(hourSeconds - elapsedTime)
                      )
                    }
                  </CountdownCircleTimer>
                  <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#f8f8ff"]]}
                    duration={minuteSeconds}
                    initialRemainingTime={remainingTime % minuteSeconds}
                    onComplete={(totalElapsedTime) => [
                      remainingTime - totalElapsedTime > 0,
                    ]}
                  >
                    {({ elapsedTime }) =>
                      renderTime("seconds", getTimeSeconds(elapsedTime))
                    }
                  </CountdownCircleTimer>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 mt-12">
              <div className="col-span-12 relative">
                <Carousel
                  renderButtonGroupOutside={true}
                  arrows={false}
                  customButtonGroup={<Navigation />}
                  partialVisible={true}
                  responsive={responsive}
                  itemClass="px-2"
                  className="mt-16"
                >
                  <div className="mt-8">
                    <ResponsiveMasonry
                      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                    >
                      <Masonry gutter="20">{getCollections}</Masonry>
                    </ResponsiveMasonry>
                    {/* <div className="grid grid-cols-4 gap-4">{getCollections}</div> */}
                  </div>
                  <div className="mt-8">
                    <div className="grid grid-cols-4 gap-4">{getCreations}</div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
      // ) : (
      //   <div>
      //     <Helmet>
      //       <meta charSet="utf-8" />
      //       <title>WeAreMasters - Upload Digital Art</title>
      //       <link
      //         href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      //         rel="stylesheet"
      //         integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      //         crossorigin="anonymous"
      //       />
      //     </Helmet>

      //     <div className="container" style={{ height: "100vh" }}>
      //       <div className="row no-gutter">
      //         <div className="col-md-12 mt-4">
      //           <Link to="/account">
      //             <img
      //               width="100"
      //               src={logo}
      //               alt="WeAreMasters Logo"
      //               className="center-image mt-2 mb-4"
      //             />
      //           </Link>
      //         </div>
      //         <div className="col-md-5 m-auto">
      //           <h2 className="text-center mb-4">
      //             <strong>
      //               Welcome, {user.firstName}! <br />
      //             </strong>
      //           </h2>
      //           <form
      //             className="need-validation"
      //             onSubmit={this.onSubmit}
      //             noValidate
      //           >
      //             <div className="mb-4 text-center">
      //               {errors.verification && (
      //                 <div class="alert alert-danger" role="alert">
      //                   {errors.verification}
      //                 </div>
      //               )}

      //               <label for="code" className="form-label">
      //                 <strong style={{ fontSize: "20px" }}>
      //                   Enter 6 digit verification code sent to your email
      //                 </strong>
      //               </label>
      //               <input
      //                 type="number"
      //                 id="code"
      //                 name="code"
      //                 value={this.state.code}
      //                 onChange={this.onChange}
      //                 className={classnames(
      //                   "form-control form-control-lg text-center mt-2",
      //                   {
      //                     "is-invalid": errors.verification,
      //                   }
      //                 )}
      //                 placeholder="Enter 6 digit verification code"
      //                 autofocus
      //                 required
      //               />
      //             </div>

      //             <div className="d-grid gap-2">
      //               <button
      //                 className="btn btn-lg btn-primary mb-3"
      //                 type="submit"
      //               >
      //                 <Spinner name="activationLoading">
      //                   <Backdrop className={classes.backdrop} open={true}>
      //                     <CircularProgress color="inherit" />
      //                   </Backdrop>
      //                   Processing...
      //                 </Spinner>
      //                 <Spinner name="activationNotLoading" show={true}>
      //                   Proceed to Verify Account
      //                 </Spinner>
      //               </button>
      //             </div>
      //           </form>
      //           <hr />
      //           <div className="row">
      //             <div className="col-md-6">
      //               <div className="d-grid gap-2">
      //                 <button
      //                   className="btn btn-dark my-2"
      //                   onClick={this.resendCode.bind(this)}
      //                 >
      //                   <Spinner name="resendActivationLoading">
      //                     <Backdrop className={classes.backdrop} open={true}>
      //                       <CircularProgress color="inherit" />
      //                     </Backdrop>
      //                     Processing...
      //                   </Spinner>
      //                   <Spinner
      //                     name="resendActivationNotLoading"
      //                     show={true}
      //                   >
      //                     Resend Code
      //                   </Spinner>
      //                 </button>
      //               </div>
      //             </div>
      //             <div className="col-md-6">
      //               <div className="d-grid gap-2">
      //                 <button
      //                   className="btn btn-dark my-2"
      //                   onClick={this.onLogoutClick.bind(this)}
      //                 >
      //                   Log out
      //                 </button>
      //               </div>
      //             </div>
      //           </div>
      //           <hr className="mb-5" />
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // )}
      //</div>
    );
  }
}

Account.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getAssets: PropTypes.func.isRequired,
  getETHRate: PropTypes.func.isRequired,
  activateAccount: PropTypes.func.isRequired,
  resendActivationToken: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  profile: state.profile,
  asset: state.asset,
  ethRate: state.ethRate,
});

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {
    getCurrentProfile,
    activateAccount,
    resendActivationToken,
    getAssets,
    logoutUser,
    getETHRate,
  })
)(Account);
