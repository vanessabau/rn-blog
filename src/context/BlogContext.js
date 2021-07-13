import createDataContext from "./createDataContext";

// Handle data here
const blogReducer = (state, action) => {
  switch (action.type) {
    case "delete_blogpost":
      return state.filter(
        (blogPost) =>
          blogPost.id !== action.payload
      );
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    default:
      return state;
  }
};

// helper function. Add data here
// addBlogPOst() needs to have access to the dispatch() function; That is how we change our state
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

// Delete post
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({
      type: "delete_blogpost",
      payload: id,
    });
  };
};

export const { Context, Provider } =
  createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    []
  );
