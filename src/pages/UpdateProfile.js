/* eslint-disable */
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
import { Spinner } from "@chevtek/react-spinners";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Helmet } from "react-helmet";
import logo from "../assets/img/favicon.png";
import isEmpty from "../validation/is-empty";

const styles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
});

class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      location: "",
      ethAddress: "",
      youtubeURL: "",
      facebookURL: "",
      twitterURL: "",
      instagramURL: "",
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
      profile.phone = !isEmpty(profile.phone) ? profile.phone : "";
      profile.location = !isEmpty(profile.location) ? profile.location : "";
      profile.ethAddress = !isEmpty(profile.ethAddress)
        ? profile.ethAddress
        : "";
      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.twitter = !isEmpty(profile.social.twitter)
        ? profile.social.twitter
        : "";
      profile.facebook = !isEmpty(profile.social.facebook)
        ? profile.social.facebook
        : "";
      profile.linkedin = !isEmpty(profile.social.linkedin)
        ? profile.social.linkedin
        : "";
      profile.youtube = !isEmpty(profile.social.youtube)
        ? profile.social.youtube
        : "";
      profile.instagram = !isEmpty(profile.social.instagram)
        ? profile.social.instagram
        : "";

      // Set component field state
      this.setState({
        firstName: profile.firstName,
        lastName: profile.lastName,
        ethAddress: profile.ethAddress,
        phone: profile.phone,
        location: profile.location,
        bio: profile.bio,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        youtube: profile.youtube,
        instagram: profile.instagram,
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
      phone: this.state.phone,
      location: this.state.location,
      ethAddress: this.state.ethAddress,
      bio: this.state.bio,
      youtube_url: this.state.youtube_url,
      facebook_url: this.state.facebook_url,
      twitter_url: this.state.twitter_url,
      instagram_url: this.state.instagram_url,
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

        <div className="container py-4" style={{ minHeight: "100vh" }}>
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
                  <strong>UPDATE PROFILE</strong>
                </h2>
                <form
                  className="need-validation"
                  onSubmit={this.onSubmit}
                  noValidate
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label for="firstName" className="form-label">
                          <strong>First Name</strong>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={this.state.firstName}
                          onChange={this.onChange}
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.firstName,
                            }
                          )}
                          placeholder="Enter first name"
                          autofocus
                          required
                        />
                        {errors.firstName && (
                          <div className="invalid-feedback">
                            {errors.firstName}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label for="lastName" className="form-label">
                          <strong>Last Name</strong>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={this.state.lastName}
                          onChange={this.onChange}
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.lastName,
                            }
                          )}
                          placeholder="Enter last name"
                          autofocus
                          required
                        />
                        {errors.lastName && (
                          <div className="invalid-feedback">
                            {errors.lastName}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label for="firstName" className="form-label">
                          <strong>Location</strong>
                        </label>
                        <div class="input-group input-group-lg">
                          <select
                            id="location"
                            name="location"
                            value={this.state.location}
                            onChange={this.onChange}
                            className="form-select"
                          >
                            <option value={0}>Select Location</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Åland Islands">Åland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">
                              American Samoa
                            </option>
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
                            <option value="Cayman Islands">
                              Cayman Islands
                            </option>
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
                            <option value="Czech Republic">
                              Czech Republic
                            </option>
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
                            <option value="Norfolk Island">
                              Norfolk Island
                            </option>
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
                            <option value="Solomon Islands">
                              Solomon Islands
                            </option>
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
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
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
                            <option value="Western Sahara">
                              Western Sahara
                            </option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                          </select>
                          {errors.location && (
                            <div className="form-error">{errors.location}</div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label for="lastName" className="form-label">
                          <strong>Phone</strong>
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value={this.state.phone}
                          onChange={this.onChange}
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.phone,
                            }
                          )}
                          placeholder="Enter phone number"
                          autofocus
                          required
                        />
                        {errors.phone && (
                          <div className="invalid-feedback">{errors.phone}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
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
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.ethAddress,
                        })}
                        placeholder="Enter ETH payout address"
                        autofocus
                        required
                      />
                      {errors.ethAddress && (
                        <div className="invalid-feedback">
                          {errors.ethAddress}
                        </div>
                      )}
                    </div>
                    {errors.ethAddress && (
                      <div className="invalid-feedback">
                        {errors.ethAddress}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label for="bio" className="form-label">
                      <strong>Profile Bio</strong>
                    </label>
                    <textarea
                      rows="5"
                      id="bio"
                      name="bio"
                      value={this.state.bio}
                      onChange={this.onChange}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.bio,
                      })}
                      placeholder="Enter full bio for your profile"
                      required
                    ></textarea>
                    {errors.bio && (
                      <div className="invalid-feedback">{errors.bio}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label for="youtubeURL" className="form-label">
                      <strong>YouTube URL for Digital Art</strong>
                    </label>
                    <input
                      type="text"
                      id="youtubeURL"
                      name="youtubeURL"
                      value={this.state.youtubeURL}
                      onChange={this.onChange}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.youtubeURL,
                      })}
                      placeholder="e.g https://youtu.be/WEA9EB7Q5RY (optional)"
                      autofocus
                      required
                    />
                    {errors.youtubeURL && (
                      <div className="invalid-feedback">
                        {errors.youtubeURL}
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <label for="facebookURL" className="form-label">
                      <strong>FaceBook URL for Digital Art</strong>
                    </label>
                    <input
                      type="text"
                      id="facebookURL"
                      name="facebookURL"
                      value={this.state.facebookURL}
                      onChange={this.onChange}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.facebookURL,
                      })}
                      placeholder="e.g https://facebook.com/WEA9EB7Q5RY (optional)"
                      autofocus
                      required
                    />
                    {errors.facebookURL && (
                      <div className="invalid-feedback">
                        {errors.facebookURL}
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <label for="twitterURL" className="form-label">
                      <strong>Twitter URL for Digital Art</strong>
                    </label>
                    <input
                      type="text"
                      id="twitterURL"
                      name="twitterURL"
                      value={this.state.twitterURL}
                      onChange={this.onChange}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.twitterURL,
                      })}
                      placeholder="e.g https://twitter.com/WEA9EB7Q5RY (optional)"
                      autofocus
                      required
                    />
                    {errors.twitterURL && (
                      <div className="invalid-feedback">
                        {errors.twitterURL}
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <label for="instagramURL" className="form-label">
                      <strong>Instagram URL for Digital Art</strong>
                    </label>
                    <input
                      type="text"
                      id="instagramURL"
                      name="instagramURL"
                      value={this.state.instagramURL}
                      onChange={this.onChange}
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.instagramURL,
                      })}
                      placeholder="e.g https://instagram.com/WEA9EB7Q5RY (optional)"
                      autofocus
                      required
                    />
                    {errors.instagramURL && (
                      <div className="invalid-feedback">
                        {errors.instagramURL}
                      </div>
                    )}
                  </div>

                  <div className="d-grid gap-2">
                    <button className="btn btn-lg btn-primary" type="submit">
                      <Spinner name="updateProfileLoading">
                        <Backdrop className={classes.backdrop} open={true}>
                          <CircularProgress color="inherit" />
                        </Backdrop>
                        Processing...
                      </Spinner>
                      <Spinner name="updateProfileNotLoading" show={true}>
                        Proceed to Update Profile
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateProfile.propTypes = {
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
)(UpdateProfile);
