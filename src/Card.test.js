import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Card from "./Card.jsx";

it("renders without crashing", function(){
    render(<Card />);
})

it("matches snapshot", function(){
    const {asFragment} = render(<Card/>);
    expect(asFragment()).toMatchSnapshot();
});
  