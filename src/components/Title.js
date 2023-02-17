import React from "react";

function Title() {
  console.log(`Title Component`);
  return <div>Title</div>;
}

export default React.memo(Title);
