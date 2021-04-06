import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds =_.uniq(_.map(getState().posts, 'userId'));
  console.log(userIds)
}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};



export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
} 

// const _fetchUser = _.memoize(() => {
//   const response = await jsonPlaceholder.get(`/users/${id}`)

//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data
//   });
// });