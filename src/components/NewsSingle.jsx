import { useState } from "react"
import { Link } from "react-router-dom"
import uuid from "react-uuid"
import calendar from "../assets/icons/calendar.svg"

const NewsSingle = ({ newsProps }) => {
    const { image, link, date: { day, month }, title, text, bullets } = newsProps

    const [isHovered, setIsHovered] = useState(false)
    const visibility = isHovered ? "opacity-100" : "opacity-0"

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    return (
        <section className="w-full grid grid-cols-[48%_125px_1fr] gap-0 py-[1.875rem] border-y border-[#D6D6D6]">
            <figure onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }
                className="w-full aspect-[1.47] relative flex items-center justify-center">
                <figcaption className={`w-4/5 h-4/5 bg-blue91 flex items-center justify-center z-[2] relative
                    ${visibility} transition-opacity duration-300 ease-in`}
                >
                    <div className={`w-full h-full absolute top-0 left-0 bg-blue91 z-[1] ${visibility}`}></div>
                    <Link to={ link } className="font-krub font-semibold text-base text-white z-[3] relative
                        hover:text-gold transition-all duration-300 ease-in"
                    >
                        Read More
                    </Link>
                </figcaption>
                <img src={ image } alt={ title } className="w-full object-cover absolute top-0 left-0 z-[0]]" />
            </figure>
            <div className="w-full flex flex-col items-center text-center">
                <img src={ calendar } alt="" className="w-[3.25rem]" />
                <h2 className="font-rubik font-semibold text-[2.5rem] leading-[3rem] text-htext">
                    { day }
                </h2>
                <p className="font-krub font-medium text-base text-ptext">
                    { month }
                </p>
            </div>
            <article className="w-full pl-[1.875rem] border-l">
                <Link to={ link }>
                    <h5 className="font-rubik font-normal text-[1.5625rem] leading-[1.875rem] text-htext
                        hover:text-gold mb-4"
                    >
                        { title }
                    </h5>
                </Link>
                <p className="font-krub font-medium text-base text-ptext mb-[1.125rem]">
                    { text }
                </p>
                <ul className="list-disc list-inside font-krub font-medium text-base leading-[1.6875] text-htext">
                    { bullets.map(point => <li key={uuid()}>{ point }</li>) }
                </ul>
            </article>
        </section>
    )
}

export default NewsSingle