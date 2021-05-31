/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { getCurrentProfile } from "../actions/profileActions";
import { getAllAssets, getETHRate } from "../actions/assetActions";
import { compose } from "redux";
import exactMath from "exact-math";
import { withStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import CurrencyFormat from "react-currency-format";
import Moment from "react-moment";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Helmet } from "react-helmet";
import logo from "../assets/img/favicon.png";

const styles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  table: {
    minWidth: 650,
  },
});

class Assets extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 1);
    this.props.getCurrentProfile();
    this.props.getAllAssets();
    this.props.getETHRate();
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { classes } = this.props;
    const { allAssets, assetLoading } = this.props.asset;
    const { ethPrice, ethPriceLoading } = this.props.ethRate;
    const disableMathError = { invalidError: false };

    let assetsTable;

    if (allAssets === null || assetLoading) {
      assetsTable = assetsTable = <div />;
    } else {
      if (Object.keys(allAssets).length > 0) {
        assetsTable = (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allAssets.map((asset) => (
                  <TableRow key={asset._id}>
                    <TableCell component="th" scope="row">
                      {asset.name}
                    </TableCell>
                    <TableCell>
                      {asset.price} ETH{" "}
                      {ethPrice === null || ethPriceLoading ? null : (
                        <CurrencyFormat
                          value={exactMath.mul(
                            asset.price,
                            ethPrice.amount,
                            disableMathError
                          )}
                          displayType={"text"}
                          thousandSeparator={true}
                          decimalSeperator="."
                          decimalScale={2}
                          fixedDecimalScale={true}
                          renderText={(value) => <span>(&#36; {value})</span>}
                        />
                      )}
                    </TableCell>
                    <TableCell>{asset.status}</TableCell>
                    <TableCell align="right">
                      <Moment format="Do MMM, YYYY">{asset.date}</Moment>
                    </TableCell>
                    <TableCell align="right">
                      <Link
                        to={`/asset/${asset._id}`}
                        className="btn btn-primary btn-sm"
                      >
                        APPROVE
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      } else {
        assetsTable = (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <p className="p-3">All assets will show here...</p>
              </TableBody>
            </Table>
          </TableContainer>
        );
      }
    }

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>WeAreMasters - Approve Digital Art</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
            crossorigin="anonymous"
          />
        </Helmet>

        <div className="container py-4" style={{ minHeight: "100vh" }}>
          <Backdrop
            className={classes.backdrop}
            open={!assetLoading ? false : true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <div className="row no-gutter">
            <div className="col-md-4 m-auto mt-4">
              <Link to="/account">
                <img
                  width="100"
                  src={logo}
                  alt="WeAreMasters Logo"
                  className="center-image"
                />
              </Link>
            </div>
            <div className="col-md-12 pt-4">
              <div className="row text-center">
                <div className="col-md-4 mb-10 mt-10 px-10">
                  <div className="d-grid gap-2">
                    <Link to="/upload" className="btn btn-dark">
                      <strong style={{ fontWeight: 600 }}>UPLOAD ART</strong>
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 mb-10 mt-10 px-10">
                  <div className="d-grid gap-2">
                    <Link to="/market" className="btn btn-dark">
                      <strong style={{ fontWeight: 600 }}>MARKET PLACE</strong>
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 mb-10 mt-10 px-10">
                  <div className="d-grid gap-2">
                    <Link
                      className="btn btn-dark"
                      onClick={this.onLogoutClick.bind(this)}
                    >
                      <strong style={{ fontWeight: 600 }}>LOG OUT</strong>
                    </Link>
                  </div>
                </div>
              </div>
              <h2 className="text-center mb-4">
                <strong style={{ wordSpacing: "5px" }}>
                  DIGITAL ART UPLOADS
                </strong>
              </h2>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-xl-12 col-sm-12 m-auto">
                  <div className="p-2">{assetsTable}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Assets.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getAllAssets: PropTypes.func.isRequired,
  getETHRate: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  asset: state.asset,
  ethRate: state.ethRate,
});

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {
    getCurrentProfile,
    getAllAssets,
    logoutUser,
    getETHRate,
  })
)(Assets);
