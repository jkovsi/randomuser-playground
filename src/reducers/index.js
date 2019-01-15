import {
  FILTER_OLDER,
  FILTER_YOUNGER,
  GET_USERS,
  FILTER_GENDER
} from "../actions/actionConstants";

const initialState = {
  results: [],
  filterGender: [],
  filtered: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        results: action.payload
      };
    case FILTER_GENDER:
      return {
        ...state,
        filterGender: state.results.filter(
          person => person.gender == action.payload
        ),
        filtered: true
      };

    default:
      return state;
  }
}
