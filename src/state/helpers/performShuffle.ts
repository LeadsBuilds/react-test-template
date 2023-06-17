import shuffle from "just-shuffle";

export function performShuffle (attendees: string[]) {

    const totalAttendees = attendees.length;
        const shuffled = shuffle(attendees);
        const result = new Map<string, string>();

        for (let index = 0; index < totalAttendees; index++) {
            const target = index === (totalAttendees - 1) ? 0 : index + 1;
            result.set(shuffled[index], shuffled[target]);
        }

    return result;
}