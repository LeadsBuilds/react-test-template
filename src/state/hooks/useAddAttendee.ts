import { useSetRecoilState } from "recoil";
import { attendeeListState } from "../atom";

export const useAddAttendee = () => {
    const setList = useSetRecoilState(attendeeListState);
    return (attendeeName: string) => {
        return setList(currentList => [...currentList, attendeeName]);
    }
}