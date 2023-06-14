import { useNavigate } from "react-router-dom";
import { useAttendeeList } from "../state/hooks/useAttendeeList";

const Footer = () => {
    const attendees = useAttendeeList();
    const navigateTo = useNavigate();

    const start = () => {
        navigateTo('/shuffle');
    } 

    return(
        <footer>
            <button 
            disabled={attendees.length < 3}
            onClick={start}>Start game</button>
        </footer>
    )
}

export default Footer;