import { useAttendeeList } from "../state/hooks/useAttendeeList"

const Shuffle = () => {

    const attendees = useAttendeeList();

    return (<section>
        <form>
            <select name="attendee" id="attendee">
                {attendees.map(attendee => <option key={attendee}>{attendee}</option>)}
            </select>
        </form>
    </section>)
}

export default Shuffle;