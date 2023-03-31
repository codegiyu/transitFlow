const ServiceSingle = ({ serviceProps }) => {
    const { image, name, title, text } = serviceProps

    return (
        <figure className="w-full grid grid-cols-[6rem_1fr] items-stretch gap-4">
            <figure className="w-full h-full border-r border-[#D8D8D8]">
                <img src={ image } alt={ name } />
            </figure>
            <figcaption className="w-full pl-[1rem]">
                <h6 className="font-rubik text-[1.5rem] leading-[1.875rem] text-htext">
                    { title }
                </h6>
                <p className="font-krub font-medium text-base text-ptext mt-[0.8125rem]">
                    { text }
                </p>
            </figcaption>
        </figure>
    )
}

export default ServiceSingle