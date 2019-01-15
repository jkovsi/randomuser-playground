import React from "react";
import { connect } from "react-redux";
import getUsers from "../actions/action_creators/index";
import shortid from "shortid";

class UserList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { results, filtered, filterGender } = this.props;
    return !filtered ? (
      <div>
        {results.map(result => (
          <div
            key={result.id.value != null ? result.id.value : shortid.generate()}
          >
            <img
              src={result.picture.medium}
              alt={`${result.name.first} picture`}
            />
            <h3>
              {result.name.first} - {result.dob.age}
            </h3>
          </div>
        ))}
      </div>
    ) : (
      <div>
        {filterGender.map(genders => (
          <div
            key={
              genders.id.value != null ? genders.id.value : shortid.generate()
            }
          >
            <img
              src={genders.picture.medium}
              alt={`${genders.name.first} picture`}
            />
            <h3>
              {genders.name.first} - {genders.dob.age}
            </h3>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.results,
  filtered: state.filtered,
  filterGender: state.filterGender
});

export default connect(
  mapStateToProps,
  { getUsers }
)(UserList);
