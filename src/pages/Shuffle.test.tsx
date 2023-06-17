import { render, screen } from "@testing-library/react";
import React from "react"; 
import { RecoilRoot } from "recoil";
import { useAttendeeList } from "../state/hooks/useAttendeeList";
import Shuffle from "./Shuffle";

jest.mock('../state/hooks/useAttendeeList', () => {
    return {
        useAttendeeList: jest.fn()
    }
});

describe('The shuffle page', () => {
    const attendees = [
        'Mary',
        'Bryan',
        'John'
    ];
    beforeEach(() => {
        (useAttendeeList as jest.Mock).mockReturnValue(attendees)
    });

    test('all the attendees can show their game result', () => {
        render(<RecoilRoot>
            <Shuffle/>
        </RecoilRoot>)

        const options = screen.queryAllByRole('option');
        expect(options).toHaveLength(attendees.length);
    });
});