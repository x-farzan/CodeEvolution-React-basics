import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  posts: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        posts: action.payload,
      };
    case "FETCH_FAILED":
      return {
        loading: true,
        error: "Something went wrong!",
        posts: {},
      };
    default:
      return state;
  }
};

function DataFetchTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(`USefffetc ------- `);
    axios
      .get("https://jsonplaceholder.typicode.com/posts/dav")
      .then((response) => {
        console.log(`REsponse check >>>>>> `, response.data);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILED" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading..." : state.posts.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchTwo;
