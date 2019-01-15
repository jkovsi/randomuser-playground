import React from "react";
import { connect } from "react-redux";
import { getUsers, filterGender } from "../actions/action_creators/index";
import shortid from "shortid";

class Filter extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="gender">
          Gender
          <select
            id="gender"
            onChange={this.props.handleGenderChange}
            value={this.props.gender}
            placeholder="Gender"
          >
            <option />
            <option value="all">all</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = ({ gender }) => ({ gender });
const mapDispatchToProps = dispatch => ({
  handleGenderChange(event) {
    dispatch(filterGender(event.target.value));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
