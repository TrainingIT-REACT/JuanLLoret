import React from 'react';
import {connect} from 'react-redux';

import {Input, Button} from '../../components/Form'
import {userData} from '../../state/actions/UserActions';

class User extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nickname: { value: props.user.nickname, error: false },
      email: { value: props.user.email, error: false },
      first: props.user.first,
      last: props.user.last,
      city: props.user.city,
      country: props.user.country,
      birthday: props.user.birthday,
      extract: props.user.extract,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    return <>
      <h1>
        <i className="fas fa-user-astronaut"></i>
        @{this.props.user.nickname}
      </h1>
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Your account details</legend>

          <Input
            id="nickname"
            label="Nickname"
            value={this.state.nickname.value}
            error={this.state.nickname.error}
            required={true}
            onChange={this.onChange}
          />

          <Input
            id="first"
            label="First Name"
            value={this.state.first}
            onChange={this.onChange}
          />

          <Input
            id="last"
            label="Last Name"
            value={this.state.last}
            onChange={this.onChange}
          />

          <Input
            id="email"
            label="Email"
            value={this.state.email.value}
            error={this.state.email.error}
            required={true}
            onChange={this.onChange}
          />

          <Input
            id="city"
            label="City"
            value={this.state.city}
            onChange={this.onChange}
          />

          <Input
            id="country"
            label="Country"
            value={this.state.country}
            onChange={this.onChange}
          />
        </fieldset>
        <Button
          className="UserData__Button"
          type="submit"
          size="large"
          loading={this.props.loading}
        >
          Save your details
        </Button>
      </form>
    </>
  }

  onChange(e) {
    e.preventDefault();
    const target = e.target.id;
    const value = e.target.value;

    if (target === 'nickname') {
      const error = !value.length;
      this.setState({[target]: {value, error}});
    } else if (target === 'email') {
      const error = !value.length;
      this.setState({[target]: {value, error}});
    } else {
      this.setState({[target]: value});
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.saveUserData(this.getUserFromState());
  }

  getUserFromState() {
    return {
      nickname: this.state.nickname.value,
      email: this.state.email.value,
      first: this.state.first,
      last: this.state.last,
      city: this.state.city,
      country: this.state.country,
      birthday: this.state.birthday,
      extract: this.state.extract
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = () => (dispatch) => ({
  saveUserData: (user) => {dispatch(userData(user))}
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
