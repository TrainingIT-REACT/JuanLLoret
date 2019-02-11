import React from 'react';
import {connect} from 'react-redux';

import Card from '../../components/Card';
import FormInput from '../../components/Form/FormInput';
import {login} from '../../state/actions/UserActions';

import './Login.css';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nickname: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return <div className="LoginPage">
      <Card className="LoginPage__Card" title="Reactify" TitleTag="h1">
        <form noValidate onSubmit={this.onSubmit}>
          <FormInput id="nickname" label="Nickname" value={this.state.nickname} onChange={this.onChange} />
          <FormInput id="password" label="Password" type="password" value={this.state.password} onChange={this.onChange} />
          <button type="submit">Login</button>
        </form>
      </Card>
    </div>
  }

  onChange(e) {
    e.preventDefault();
    const {target: {id, value}} = e;
    this.setState({[id]: value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.nickname);
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
