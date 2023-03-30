export const SectionTagDark = ({ text }) => {
    return (
        <div className="w-fit flex">
            <div className="w-[4px] h-[24px] bg-gradient"></div>
            <div className="w-fit px-[8px] py-[3px] bg-[#041C3750]">
                <p className="font-rubik text-[14px] leading-[18px] text-white">
                    { text }
                </p>
            </div>
        </div>
    )
}

export const SectionTagLight = ({ text }) => {
    return (
        <div className="w-fit flex">
            <div className="w-[4px] h-[24px] bg-gradient"></div>
            <div className="w-fit px-[8px] py-[3px] bg-[#E8E8E850]">
                <p className="font-rubik text-[14px] leading-[18px] text-htext">
                    { text }
                </p>
            </div>
        </div>
    )
}