import React, { useReducer } from "react";

// Three items to be customized for every different type of thing we create
export default (
  reducer,
  actions,
  initialState
) => {
  // Create two things inside the functino and return them
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(
      reducer,
      initialState
    );

    // actions === { addBlogPost: (dispatch) => {return () => {}} }; we loop through thte object, for every key 'addBlogPost' we call the function with it with the dispatch argument which gives us back the return function; this gets passed to the value propr and allows us to make changes to the state object

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider
        value={{ state, ...boundActions }}
      >
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
