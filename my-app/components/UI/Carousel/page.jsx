"use client";
import React from "react";

const Carousel = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Jamkrindo
        <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
          {" "}
            Report information systemt
        </span>
      </h1>
      <p className="desc text-center leading-8">
      Every month the Claims and Subrogation Division also provides claims data to the relevant divisions to support reporting to internal and external parties of the company.
      </p>
    </section>
  );
};

export default Carousel;
