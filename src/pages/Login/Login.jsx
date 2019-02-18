import React from 'react';
import {connect} from 'react-redux';

import Card from '../../components/Card';
import Notification from '../../components/Notification';
import {Input, Button} from '../../components/Form';
import {login} from '../../state/actions/UserActions';

import './Login.scss';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nickname: {
        value: '',
        error: false
      },
      password: {
        value: '',
        error: false
      },
      error: null
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderNotification() {
    if (!this.state.loading && this.state.error) {
      return <Notification type="error" message={this.state.error} />
    }
    if (!this.state.loading && this.props.location.state && this.props.location.state.message) {
      return <Notification type="error" message={this.props.location.state.message} />
    }
    return null;
  }

  render() {
    return <div className="LoginPage">
      <Card
        className="LoginPage__Card"
        title="Reactify"
        TitleTag="h1"
      >
        {this.renderNotification()}
        <form
          noValidate
          className="LoginPage__Form"
          onSubmit={this.onSubmit}
        >
          <Input
            id="nickname"
            label="Nickname"
            value={this.state.nickname.value}
            error={this.state.nickname.error}
            required={true}
            onChange={this.onChange}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            value={this.state.password.value}
            error={this.state.password.error}
            required={true}
            onChange={this.onChange}
          />
          <Button
            className="LoginPage__Button"
            type="submit"
            size="large"
            fullWidth={true}
            loading={this.props.loading}
          >
            Login
          </Button>
        </form>
      </Card>
    </div>
  }

  onChange(e) {
    e.preventDefault();
    const {target: {id, value}} = e;
    this.setState({[id]: {value, error: false}});
  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.state.nickname.value) {
      this.setState({nickname: {error: true}});
    }

    if (!this.state.password.value) {
      this.setState({password: {error: true}});
    }

    if (!this.state.nickname.value || !this.state.password.value) {
      this.setState({error: 'Please fill all mandatory fields.'});
    }

    if (this.state.nickname.value && this.state.password.value) {
      this.setState({error: null});
      this.props.login(this.state.nickname.value, this.state.password.value);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    redirect: state.user.signedIn,
    loading: state.user.loading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (nickname, password) => dispatch(login(nickname, password)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
