import { useRecoilValue } from "recoil"
import { resultShuffle } from "../atom"

export const useShuffleResult = () => {
    return useRecoilValue(resultShuffle);
}