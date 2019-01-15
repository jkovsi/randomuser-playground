import { GET_USERS, FILTER_GENDER } from "../actionConstants";

const getUsers = () => dispatch =>
  fetch("https://randomuser.me/api/?results=50")
    .then(response => response.json())
    .then(data => dispatch({ type: GET_USERS, payload: data.results }));

export default getUsers;

export const filterGender = gender => ({
  type: FILTER_GENDER,
  payload: gender
});
