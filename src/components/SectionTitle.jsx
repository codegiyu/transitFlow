export const SectionTitleDark = ({ title }) => {
    return (
        <h2 className="font-rubik font-semibold text-[2.1875rem] leading-[2.625rem] text-htext mt-[0.875rem]">
            { title }
        </h2>
    )
}

export const SectionTitleLight = ({ title }) => {
    return (
        <h2 className="font-rubik font-semibold text-[2.1875rem] leading-[2.625rem] text-white mt-[0.875rem]">
            { title }
        </h2>
    )
}