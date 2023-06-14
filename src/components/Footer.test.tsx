import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";
import { useAttendeeList } from "../state/hooks/useAttendeeList";

jest.mock('../state/hooks/useAttendeeList', () => {
    return {
        useAttendeeList: jest.fn(),
    }
});

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigate
    }
});

describe("When there aren't enough attendees", () => {
    beforeEach(() => {
        (useAttendeeList as jest.Mock).mockReturnValue([]);
    });
    
    test('Disable start button', () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        );

        const button = screen.getByRole('button');

        expect(button).toBeDisabled();
    });
});

describe("When there are enough attendees", () => {
    const attendees = ['Mary', 'Bryan', 'Josefine']
    beforeEach(() => {
        (useAttendeeList as jest.Mock).mockReturnValue(attendees);
    });

    test('Enable start button', () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        );

        const button = screen.getByRole('button');

        expect(button).toBeEnabled();
    });

    test('The game has been started', () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/shuffle');
    });
});