import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import AttendeeList from "./AttendeeList";
import { useAttendeeList } from "../state/hooks/useAttendeeList";

jest.mock('../state/hooks/useAttendeeList', () => {
    return {
        useAttendeeList: jest.fn(),
    }
});

describe('An empty attendee list', () => {
    beforeEach(() => {
        (useAttendeeList as jest.Mock).mockReturnValue([]);
    });

    test('must be rendered without any elements', () => {
        render(<RecoilRoot>
            <AttendeeList />
        </RecoilRoot>);
    
        const items = screen.queryAllByRole('listitem');
        expect(items).toHaveLength(0);
    });
});

describe('A filled attendee list', () => {
    const attendees = ['Mary', 'Bryan'];
    beforeEach(() => {
        (useAttendeeList as jest.Mock).mockReturnValue(attendees);
    });

    test('must be rendered without any elements', () => {
        render(<RecoilRoot>
            <AttendeeList />
        </RecoilRoot>);
    
        const items = screen.queryAllByRole('listitem');
        expect(items).toHaveLength(attendees.length);
    });
});