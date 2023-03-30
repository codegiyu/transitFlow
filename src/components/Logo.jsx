import logoImg from "../assets/icons/logo.png"

const Logo = () => {
    return (
        <div className="w-fit flex gap-[0.5625rem] items-center z-[5]">
            <img src={ logoImg } alt="logo" className="h-[1.5625rem]" />
            <h3 className="font-rubik font-semibold text-3xl">TransitFlow</h3>
        </div>
    )
}

export default Logo