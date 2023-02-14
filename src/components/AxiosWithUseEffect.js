import axios from "axios";
import React, { useEffect, useState } from "react";

function AxiosWithUseEffect() {
  const [posts, setPosts] = useState();
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((post) => {
        console.log(`Successfully fetched!`, post);
        setPosts(post.data);
      })
      .catch((error) => {
        console.log(`Fetching failed!`); 
      });
  }, [id]);

  return (
    <div>
      <label>Enter id : </label>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>

      <div>{posts.title}</div>1
    </div>
  );
}

export default AxiosWithUseEffect;
