const ClientSingle = ({ clientProps }) => {
    const { background, client } = clientProps

    return (
        <div className="w-full aspect-[1.28] relative">
            <img src={ background } alt="" className="w-full object-cover absolute top-0 left-0 z-[1]" />
            <figure className="w-full h-full grid place-items-center bg-clientGrad relative z-[2]">
                <img src={ client } alt="" className="max-w-4/5" />
            </figure>
        </div>
    )
}

export default ClientSingle