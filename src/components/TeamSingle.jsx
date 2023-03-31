import { Link } from "react-router-dom"
import uuid from "react-uuid"

const TeamSingle = ({ teamProps }) => {
    const { image, name, jobTitle, socialMedia } = teamProps

    return (
        <figure className="w-full">
            <img src={ image } alt={ name } className="w-full aspect-[0.8545]" />
            <figcaption className="w-full relative pt-[2.625rem] pb-5 px-[2.125rem] bg-blue">
                <h6 className="font-rubik font-medium text-xl leading-6 text-white">
                    { name }
                </h6>
                <p className="font-krub font-medium text-base text-white mt-[0.125rem]">
                    { jobTitle }
                </p>
                <div className="absolute top-0 right-0 translate-y-[-50%] z-[2] bg-teamGradient">
                    {/* <div className="w-full h-full bg-gradient absolute top-0 right-0
                        rotate-180 z-[1]">
                    </div> */}
                    <div className="w-max flex gap-6 items-center mx-6 my-4">
                        { socialMedia.map(item => {
                            return (
                                <Link key={uuid()} to={item.link}>
                                    <img key={uuid()} src={ item.icon } alt="" />
                                </Link>
                            )
                        }) }
                    </div>
                </div>
            </figcaption>
        </figure>
    )
}

export default TeamSingle