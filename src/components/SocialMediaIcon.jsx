const SocialMediaIcon = (props) => {
    const { icon, link } = props.socMedProps

    return (
        <a href={ link }>
            <img src={ icon } alt="" />
        </a>
    )
}

export default SocialMediaIcon