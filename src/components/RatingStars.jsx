import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md"
import helpers from "../helpers"
import uuid from "react-uuid"

const RatingStars = ({ rating }) => {
    const starArr = helpers.getStarArr(rating)

    return (
        <div className="w-fit flex gap-0 flex-none text-2xl text-[#FDAF3B]">
            { starArr.map((num) => {
                if (num === 1) {
                    return <MdStar key={ uuid() } />
                } else if (num === 0.5) {
                    return <MdStarHalf key={ uuid() } />
                } else {
                    return <MdStarOutline key={ uuid() } className="opacity-0" />
                }
            })}
        </div>
    )
}

export default RatingStars