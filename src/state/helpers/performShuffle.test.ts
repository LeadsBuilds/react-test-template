import { performShuffle } from "./performShuffle";

describe ('given shuffle is performed', () => {
    test('each attendee do not get its own name on shuffle', () => {
        const attendees = [
            'Mary',
            'Bryan',
            'John',
            'Sophia'
        ];

        const shuffle = performShuffle(attendees);

        attendees.forEach(attendee => {
            const result = shuffle.get(attendee);
            expect(result).not.toEqual(attendee);
        });
    });
});