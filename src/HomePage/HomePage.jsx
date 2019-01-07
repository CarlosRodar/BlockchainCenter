import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import '../styles/css/home.css';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users } = this.props;

        return (
            <div className="home">
              <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand"  href="#"><h3 className="title-ey">EY </h3> Blockchain Center</a>
                  </div>
                  <ul className="nav navbar-nav navbar-right">
                    <li><span className="glyphicon glyphicon-user"></span><Link to="/login" className="navbar-brand">Logout</Link></li>
                  </ul>
                </div>
              </nav>
              <div className="container">
                  <div className="row">
                      <div className="col-md-4">
                        <div class="card-ey">
                          <img src={require('../assets/financial.jpg')} alt="PFM" className="img-card-ey" />
                          <div class="container-ey">
                            <h4><b>PFM</b></h4>
                            <p>Public Finance Management</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                          <div class="card-ey">
                            <img src={require('../assets/analyzer.jpg')} alt="PFM" className="img-card-ey" />
                            <div class="container-ey">
                              <h4><b>Blockchain Analyzer</b></h4>
                              <p>...</p>
                              <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                        <div class="card-ey">
                          <img src={require('../assets/financial.jpg')} alt="PFM" className="img-card-ey" />
                          <div class="container-ey">
                            <h4><b>Rights and Royalties</b></h4>
                            <p>...</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-4">
                        <div class="card-ey">
                          <img src={require('../assets/financial.jpg')} alt="PFM" className="img-card-ey" />
                          <div class="container-ey">
                            <h4><b>Ops Chain</b></h4>
                            <p>...</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                          <div class="card-ey">
                            <img src={require('../assets/financial.jpg')} alt="PFM" className="img-card-ey" />
                            <div class="container-ey">
                              <h4><b>Tesseract</b></h4>
                              <p>...</p>
                              <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                        <div class="card-ey">
                          <img src={require('../assets/financial.jpg')} alt="PFM" className="img-card-ey" />
                          <div class="container-ey">
                            <h4><b>Not Sure</b></h4>
                            <p>...</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
