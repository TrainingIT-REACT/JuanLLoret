import React from 'react';
import {connect} from 'react-redux';

import Card from '../../components/Card';
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
      loading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return <div className="LoginPage">
      <Card className="LoginPage__Card" title="Reactify" TitleTag="h1">
        <form noValidate className="LoginPage__Form" onSubmit={this.onSubmit}>
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
            loading={this.state.loading}
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
    } else if (!this.state.password.value) {
      this.setState({password: {error: true}});
    } else if (!this.state.nickname.error && !this.state.password.error) {
      this.setState({loading: true});
      setTimeout(() => {
        this.props.login(this.state.nickname);
      }, 2000);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    redirect: state.user.signedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (nickname) => dispatch(login(nickname)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
