import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Form from "./Form";
import { RecoilRoot } from "recoil";

// Jest

test('when input is empty, new attendees cannot be added.', () => {

    render(<Form />);

    // find input element in the DOM
    const input = screen.getByPlaceholderText('Type here the name of the attendees');
    
    // find the button element
    const botao = screen.getByRole('button');
  
    // make sure the input element is in the document
    expect(input).toBeInTheDocument();

    // make sure the button element is disabled
    expect(botao).toBeDisabled();
});

test('add new attendee if the input is filled up', () => {
    render(
        <RecoilRoot>
            <Form />
        </RecoilRoot>
    );

    // find input element in the DOM
    const input = screen.getByPlaceholderText('Type here the name of the attendees');
    
    // find the button element
    const button = screen.getByRole('button');

    // insert a input value
    fireEvent.change(input, {
        target: {
            value: 'John Smith'
        }
    });

    // click on the submit button
    fireEvent.click(button);

    // make sure the input is on focus
    expect(input).toHaveFocus();

    // make sure the input is empty
    expect(input).toHaveValue("");
});


