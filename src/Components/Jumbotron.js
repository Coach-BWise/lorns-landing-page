import React from "react";

const Jumbotron = () => {
  return (
    <div
      className="jumbotron-container"
      style={{ backgroundImage: 'url("/jumbo-background.jpg")' }}
    >
      <div className="jumbo-banner-container">
        <img src="covers-copy_orig.png" alt=""></img>
      </div>
    </div>
  );
};

export default Jumbotron;
