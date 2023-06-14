import { useRecoilValue } from "recoil"
import { attendeeListState } from "../atom"

export const useAttendeeList = () => {
    return useRecoilValue(attendeeListState);
}