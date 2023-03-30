import { Link } from "react-router-dom"

export const ButtonGold = ({ btnProps }) => {
    const { text, linkTo = "#" } = btnProps

    return (
        <Link to={linkTo} className=""
        >
            <div className="w-fit px-[3rem] py-[1.1875rem] bg-gradient z-1 relative overflow-hidden after:w-[27%]
            after:aspect-square after:rounded-full after:bg-white after:absolute after:bottom-0 after:right-0
            after:translate-x-[40%] after:translate-y-[60%] after:z-[2] hover:after:scale-[400%]
            after:transition-all after:duration-300">
                <p className="font-krub font-semibold text-[#23212A] text-base leading-[1.375rem] z-[3] relative">
                    { text }
                </p>
            </div>
        </Link>
    )
}

export const ButtonBlue = ({ btnProps }) => {
    const { text, linkTo = "#" } = btnProps

    return (
        <Link to={linkTo} className=""
        >
            <div className="w-fit px-[3rem] py-[1.1875rem] bg-blue z-1 relative overflow-hidden after:w-[27%]
            after:aspect-square after:rounded-full after:bg-[#1F2A69] after:absolute after:bottom-0 after:right-0
            after:translate-x-[40%] after:translate-y-[60%] after:z-[2] hover:after:scale-[400%]
            after:transition-all after:duration-300">
                <p className="font-krub font-semibold text-white text-base leading-[1.375rem] z-[3] relative">
                    { text }
                </p>
            </div>
        </Link>
    )
}

export const ButtonGoldNormal = ({ btnProps }) => {
    const { text, disabled, clickHandler } = btnProps

    const handleClick = (e) => {
        clickHandler(e)
    }

    return (
        <button onClick={ handleClick } disabled={ disabled }
            className="w-fit px-[2.25rem] py-[1.1875rem] bg-gradient z-1 relative overflow-hidden
            transition-all duration-300 hover:scale(1.05) disabled:cursor-not-allowed" 
        >
            <p className="font-krub font-semibold text-[#23212A] text-base leading-[1.375rem] z-[3] relative">
                { text }
            </p>
        </button>
    )
}