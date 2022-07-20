import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Banner() {
  return (
    <div className="container-fluid bg-secondary text-light p-5">
      <h1 className="display-4">App looks great!</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
        accusantium, dolor repudiandae optio minus soluta nam, quis dolore
        exercitationem nemo vel ad atque quae? Dicta ipsum sed consequuntur
        mollitia quibusdam.
      </p>
      <hr className="my-4" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,</p>
      <a className="btn btn-success btn-lg" href="#">
        {" "}
        React is awesome{" "}
      </a>
    </div>
  );
}
