const AddressSingle = (props) => {
    let { icon, topText, bottomText } = props.addressProps

    return (
        <div className="w-fit flex items-center gap-4">
            <div className="w-16 aspect-square rounded-full flex items-center justify-center bg-[#111C55]
                border border-[#273270]"
            >
                <img src={ icon } alt="icon" />
            </div>
            <div className="font-krub font-medium text-sm">
                <p>{topText }</p>
                <p>{ bottomText }</p>
            </div>
        </div>
    )
}

export default AddressSingle