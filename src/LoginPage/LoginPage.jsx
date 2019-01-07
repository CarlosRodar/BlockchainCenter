import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import '../styles/css/login.css';



class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
      const { loggingIn } = this.props;
      const { username, password, submitted } = this.state;
      return (
        <div className="login">
          <div className="container">
              <div className="d-flex justify-content-center h-100">
                  <div className="card">
                      <div className="card-header text-center">
                          <h3><h1>EY </h1>Blockchain Center</h3>
                      </div>
                      <div className="card-body">
                          <form onSubmit={this.handleSubmit}>
                              <div className="input-group form-group">
                                  <div className="input-group-prepend">
                                      <span className="input-group-text"><i className="fas fa-user"></i></span>
                                  </div>
                                  <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Username"/>
                              </div>
                              <div className="input-group form-group">
                                  <div className="input-group-prepend">
                                      <span className="input-group-text"><i className="fas fa-key"></i></span>
                                  </div>
                                  <input className="form-control" type="password" name="password" onChange={this.handleChange} value={password} placeholder="Password" />
                              </div>
                              <div className="form-group">
                                <button className="btn float-right login_btn" value="Login">Login</button>
                    					</div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
        </div>

      );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
