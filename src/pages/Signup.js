/* eslint-disable */
// import insta from "../assets/icons/insta.png";
// import twitter from "../assets/icons/twitter.png";
import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import signup from "../assets/img/signup.jpg";
import "../assets/video.min.css";
import logo from "../assets/img/logo-white.svg";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { registerUser } from "../actions/authActions";
import { Spinner } from "@chevtek/react-spinners";
import { withStyles } from "@material-ui/core/styles";
import compose from "recompose/compose";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../assets/video.min.css";

const styles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
});

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      location: "",
      password: "",
      confirmPassword: "",
      isOpen: false,
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleKeyDown(e) {
    if (e.key === " ") {
      e.preventDefault();
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
      location: this.state.location,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };

    console.log("Reached here...");
    this.props.registerUser(newUser);
  }

  render() {
    const { errors } = this.state;
    const { classes } = this.props;

    return (
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto py-16 lg:px-8 px-4">
          <div className="grid lg:grid-cols-7 gap-8 text-bordyColor dark:text-gray-200 items-center">
            <div className="lg:col-span-3 px-8 lg:order-first order-last">
              <div>
                <Link to="/">
                  <img src={logo} width="225px" className="mb-10" />
                </Link>

                <h2 className="sm:text-5xl text-3xl sm:leading-extraLoose font-bold">
                  Create Account
                </h2>
              </div>
              <form
                className="mt-12 space-y-4"
                onSubmit={this.onSubmit}
                novalidate="novalidate"
              >
                <div className="grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-control flex flex-col text-sm space-y-2 text-bordyColor dark:text-gray-400 w-full">
                    <label className="capitalize font-medium">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter first name"
                      onChange={this.onChange}
                      className={classnames(
                        "px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-sideBar",
                        {
                          "is-invalid": errors.firstName,
                        }
                      )}
                      required
                    />
                    {errors.firstName && (
                      <div className="form-error">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="form-control flex flex-col text-sm space-y-2 text-bordyColor dark:text-gray-400 w-full">
                    <label className="capitalize font-medium">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Enter last name"
                      value={this.state.lastName}
                      onChange={this.onChange}
                      className={classnames(
                        "px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-sideBar",
                        {
                          "is-invalid": errors.lastName,
                        }
                      )}
                      required
                    />
                    {errors.lastName && (
                      <div className="form-error">{errors.lastName}</div>
                    )}
                  </div>
                  <div className="form-control flex flex-col text-sm space-y-2 text-bordyColor dark:text-gray-400 w-full">
                    <label className="capitalize font-medium">username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Username"
                      value={this.state.username}
                      onChange={this.onChange}
                      onKeyDown={this.handleKeyDown}
                      className={classnames(
                        "px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-sideBar",
                        {
                          "is-invalid": errors.username,
                        }
                      )}
                      required
                    />
                    {errors.username && (
                      <div className="form-error">{errors.username}</div>
                    )}
                  </div>
                  <div className="form-control flex flex-col text-sm space-y-2 text-bordyColor dark:text-gray-400 w-full">
                    <label className="capitalize font-medium">
                      email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Email Address"
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
                  <div className="form-control flex flex-col text-sm space-y-2 text-bordyColor dark:text-gray-400 w-full">
                    <label className="capitalize font-medium">phone</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Enter Phone"
                      value={this.state.phone}
                      onChange={this.onChange}
                      className={classnames(
                        "px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-sideBar",
                        {
                          "is-invalid": errors.phone,
                        }
                      )}
                      required
                    />
                    {errors.email && (
                      <div className="form-error">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-control flex flex-col text-sm space-y-2 text-bordyColor dark:text-gray-400 w-full">
                    <label className="capitalize font-medium">location</label>
                    <div className="select-wrapper country relative">
                      <select
                        id="location"
                        name="location"
                        value={this.state.location}
                        onChange={this.onChange}
                        className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-sideBar w-full focus:outline-none"
                      >
                        <option value={0}>Select Location</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Åland Islands">Åland Islands</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">
                          Antigua and Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </option>
                        <option value="Brunei Darussalam">
                          Brunei Darussalam
                        </option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos (Keeling) Islands">
                          Cocos (Keeling) Islands
                        </option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo, The Democratic Republic of The">
                          Congo, The Democratic Republic of The
                        </option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">
                          Falkland Islands (Malvinas)
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Territories">
                          French Southern Territories
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-bissau">Guinea-bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and Mcdonald Islands">
                          Heard Island and Mcdonald Islands
                        </option>
                        <option value="Holy See (Vatican City State)">
                          Holy See (Vatican City State)
                        </option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran, Islamic Republic of">
                          Iran, Islamic Republic of
                        </option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, Democratic People's Republic of">
                          Korea, Democratic People's Republic of
                        </option>
                        <option value="Korea, Republic of">
                          Korea, Republic of
                        </option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">
                          Lao People's Democratic Republic
                        </option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">
                          Libyan Arab Jamahiriya
                        </option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia, The Former Yugoslav Republic of">
                          Macedonia, The Former Yugoslav Republic of
                        </option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">
                          Micronesia, Federated States of
                        </option>
                        <option value="Moldova, Republic of">
                          Moldova, Republic of
                        </option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">
                          Netherlands Antilles
                        </option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestinian Territory, Occupied">
                          Palestinian Territory, Occupied
                        </option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">
                          Russian Federation
                        </option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Helena">Saint Helena</option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Pierre and Miquelon">
                          Saint Pierre and Miquelon
                        </option>
                        <option value="Saint Vincent and The Grenadines">
                          Saint Vincent and The Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and The South Sandwich Islands">
                          South Georgia and The South Sandwich Islands
                        </option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">
                          Svalbard and Jan Mayen
                        </option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syrian Arab Republic">
                          Syrian Arab Republic
                        </option>
                        <option value="Taiwan, Province of China">
                          Taiwan, Province of China
                        </option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, United Republic of">
                          Tanzania, United Republic of
                        </option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-leste">Timor-leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">
                          Turks and Caicos Islands
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="United States Minor Outlying Islands">
                          United States Minor Outlying Islands
                        </option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">
                          Virgin Islands, British
                        </option>
                        <option value="Virgin Islands, U.S.">
                          Virgin Islands, U.S.
                        </option>
                        <option value="Wallis and Futuna">
                          Wallis and Futuna
                        </option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                      {errors.location && (
                        <div className="form-error">{errors.location}</div>
                      )}
                    </div>
                  </div>
                  <div className="form-control flex flex-col text-sm space-y-2 text-bordyColor dark:text-gray-400 w-full">
                    <label className="capitalize font-medium">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter Password"
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
                  <div className="form-control flex flex-col text-sm space-y-2 text-bordyColor dark:text-gray-400 w-full">
                    <label className="capitalize font-medium">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={this.state.confirmPassword}
                      onChange={this.onChange}
                      className={classnames(
                        "px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-sideBar",
                        {
                          "is-invalid": errors.confirmPassword,
                        }
                      )}
                      required
                    />
                    {errors.confirmPassword && (
                      <div className="form-error">{errors.confirmPassword}</div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-4">
                  <button className="px-4 py-3 bg-appRed text-sm text-gray-100  font-semibold rounded-sm w-full mt-8">
                    <Spinner name="registerLoading">
                      <Backdrop className={classes.backdrop} open={true}>
                        <CircularProgress color="inherit" />
                      </Backdrop>
                      Signing up...
                    </Spinner>
                    <Spinner name="registerNotLoading" show={true}>
                      Sign up
                    </Spinner>
                  </button>
                  {/* <p className="text-sm">or</p>
                  <div className="flex space-x-4 w-full">
                    <button className="flex items-center justify-center px-8 py-3 bg-gray-100 capitalize text-sm text-gray-600 font-semibold rounded-sm w-full">
                      <img src={insta} className="w-5 h-5 mr-4" alt="google" />
                      instagram
                    </button>
                    <button className="flex items-center justify-center px-8 py-3 bg-gray-100 capitalize text-sm text-gray-600 font-semibold rounded-sm w-full">
                      <img
                        src={twitter}
                        className="w-5 h-5 mr-4"
                        alt="twitter"
                      />
                      twitter
                    </button>
                  </div> */}
                  <div className="pt-8 text-sm text-center w-full space-y-4">
                    <p>Already have account?</p>
                    <Link
                      to="/login"
                      className="flex items-center justify-center px-8 py-3 bg-gray-100 text-sm text-gray-600 font-semibold rounded-sm w-full"
                    >
                      Sign in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <div className="lg:col-span-4">
              <div className="relative w-full text-gray-100">
                <img src={signup} className="" alt="signup" />
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
                        onClose={() => this.setState({ isOpen: false })}
                      />

                      <button
                        className="px-12 py-3 bg-gray-100 rounded-full uppercase text-appRed font-medium focus:outline-none hover:bg-appRed hover:text-gray-100 duration-200"
                        onClick={() => this.setState({ isOpen: true })}
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

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, { registerUser })
)(withRouter(Signup));
