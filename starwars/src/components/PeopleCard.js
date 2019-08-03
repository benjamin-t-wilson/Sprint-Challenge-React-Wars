import React from "react";

const PeopleCard = props => {
  console.log(props);
  return (
    <>
      <div>
        <h1>{props.data.name}</h1>
      </div>
    </>
  );
};

export default PeopleCard;
