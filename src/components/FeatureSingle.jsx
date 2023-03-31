const FeatureSingle = ({ featureProps }) => {
    const { icon, feature } = featureProps

    return (
        <div className="w-fit flex items-center gap-4">
            <div className="w-[3.625rem] h-[3.625rem] bg-gradient rounded-full grid place-items-center">
                <img src={ icon } alt="" />
            </div>
            <p className="font-rubik font-normal text-xl leading-6 text-htext">
                { feature }
            </p>
        </div>
    )
}

export default FeatureSingle