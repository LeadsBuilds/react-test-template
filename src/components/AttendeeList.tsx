import { useAttendeeList } from "../state/hooks/useAttendeeList";

const AttendeeList = () => {
    const attendees: string[] = useAttendeeList();

    return (
        <ul>
        {attendees.map(attendee => <li key={attendee}>{attendee}</li>)}
        </ul>
    );    
}

export default AttendeeList;