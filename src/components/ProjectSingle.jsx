import { useState } from "react"

const ProjectSingle = ({ projectProps }) => {
    const { image, project, division } = projectProps

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    const imageZoom = isHovered ? "scale-[120%]" : ""

    return (
        <figure className="w-full aspect-[0.7843] relative overflow-hidden" 
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
            <img src={ image } alt={ division } 
                className={`w-full object-cover relative z-[1] ${imageZoom} transition-all duration-300 ease-in`}
            />
            <div className="w-full h-full absolute top-0 left-0 z-[2] bg-projectGrad"></div>
            <figcaption className="absolute w-fit bottom-4 left-[1rem] z-[3]">
                <p className="font-rubik font-medium text-base leading-6 text-white mb-1">
                    { project }
                </p>
                <p className="font-krub font-medium text-sm text-[#FFB629]">
                    { division }
                </p>
            </figcaption>
        </figure>
    )
}

export default ProjectSingle