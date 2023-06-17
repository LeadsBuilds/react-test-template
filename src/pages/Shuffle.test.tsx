import { fireEvent, render, screen } from "@testing-library/react";
import React from "react"; 
import { RecoilRoot } from "recoil";
import { useAttendeeList } from "../state/hooks/useAttendeeList";
import Shuffle from "./Shuffle";
import { useShuffleResult } from "../state/hooks/useShuffleResult";

jest.mock('../state/hooks/useAttendeeList', () => {
    return {
        useAttendeeList: jest.fn()
    }
});

jest.mock('../state/hooks/useShuffleResult', () => {
    return {
        useShuffleResult: jest.fn()
    }
});

describe('The shuffle page', () => {
    const attendees = [
        'Mary',
        'Bryan',
        'John',
    ];

    const result = new Map([
        ['Mary', 'John'],
        ['Bryan', 'Mary'],
        ['John', 'Bryan']
    ]);

    beforeEach(() => {
        (useAttendeeList as jest.Mock).mockReturnValue(attendees);
        (useShuffleResult as jest.Mock).mockReturnValue(result);
    });

    test('all the attendees can show their game result', () => {
        render(<RecoilRoot>
            <Shuffle/>
        </RecoilRoot>)

        const options = screen.queryAllByRole('option');
        expect(options).toHaveLength(attendees.length);
    });

    test('target is shown when requested', () => {
        render(<RecoilRoot>
            <Shuffle />
        </RecoilRoot>);

        const selectElement = screen.getByPlaceholderText('Select name');
        fireEvent.change(selectElement, { target: { value: attendees[0] }});

        const button = screen.getByRole('button');
        fireEvent.click(button);

        const target = screen.getByRole('alert');
        expect(target).toBeInTheDocument();
    });
});