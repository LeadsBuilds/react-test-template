import { useState } from "react";
import { useAttendeeList } from "../state/hooks/useAttendeeList"
import { useShuffleResult } from "../state/hooks/useShuffleResult";

const Shuffle = () => {

    const attendees = useAttendeeList();
    const [selectedTarget, setSelectedTarget] = useState('');
    const [targetAttendee, setTargetAttendee] = useState('');

    const result = useShuffleResult();

    const shuffle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (result.has(selectedTarget)) {
            setTargetAttendee(result.get(selectedTarget)!);
        }

    }

    return (<section>
        <form onSubmit={shuffle}>
            <select 
                required 
                name="attendee" 
                id="attendee" 
                placeholder="Select name"
                value={selectedTarget}
                onChange={e => setSelectedTarget(e.target.value)}
        >
                {attendees.map(attendee => <option key={attendee}>{attendee}</option>)}
            </select>
            <button>Shuffle</button>
        </form>
        {targetAttendee && <p role="alert">{targetAttendee}</p>}
    </section>)
}

export default Shuffle;