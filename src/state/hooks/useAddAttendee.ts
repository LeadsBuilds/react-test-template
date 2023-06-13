import { useSetRecoilState, useRecoilValue } from "recoil";
import { attendeeListState, errorState } from "../atom";

export const useAddAttendee = () => {
    const setList = useSetRecoilState(attendeeListState);
    const list = useRecoilValue(attendeeListState);
    const setError = useSetRecoilState(errorState);

    return (attendeeName: string) => {
        if (list.includes(attendeeName)) {
            setError('Duplicated names are not allowed');
            return; 
        }
        return setList(currentList => [...currentList, attendeeName]);
    }
}