import { useAttendeeList } from "./useAttendeeList"
import { useSetRecoilState } from "recoil";
import { resultShuffle } from "../atom";
import { performShuffle } from "../helpers/performShuffle";

export const useShuffle = () => {
    
    const attendees = useAttendeeList();
    const setResult = useSetRecoilState(resultShuffle);

    return () => {
        const result = performShuffle(attendees);

        setResult(result);
    }
}