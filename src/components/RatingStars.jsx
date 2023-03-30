import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs"
import helpers from "../helpers"
import uuid from "react-uuid"

const RatingStars = (props) => {
    let { rating } = props.starProps
    const starArr = helpers.getStarArr(rating)

    return (
        <div className="w-fit flex gap-1 flex-none text-2xl text-[#FDAF3B]">
            { starArr.map((num) => {
                if (num === 1) {
                    return <BsStarFill key={ uuid() } />
                } else if (num === 0.5) {
                    return <BsStarHalf key={ uuid() } />
                } else {
                    return <BsStar key={ uuid() } className="opacity-0" />
                }
            })}
        </div>
    )
}

export default RatingStars