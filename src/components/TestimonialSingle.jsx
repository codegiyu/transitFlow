import quote from "../assets/icons/quote.svg"
import ErrorBoundary from "./ErrorBoundary"
import RatingStars from "./RatingStars"

export const TestimonialSingleLight = ({ testimonialProps }) => {
    const { name, image, jobTitle, feedback, rating } = testimonialProps

    return (
        <div className="w-full px-[4.5rem] py-[3.875rem] bg-secondary">
            <div className="w-full flex justify-between items-center">
                <div className="w-fit flex items-center gap-[0.625rem]">
                    <img src={ image } alt="" className="w-[5.625rem] aspect-square rounded-full" />
                    <div>
                        <p className="font-rubik font-medium text-xl leading-6 text-blue mb-[0.125rem]">
                            { name }
                        </p>
                        <p className="font-krub font-medium text-base text-blue">
                            { jobTitle }
                        </p>
                    </div>
                </div>
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-gradientReverse grid place-items-center">
                    <img src={ quote } alt="" className="w-8" />
                </div>
            </div>
            <p className="font-krub font-medium italic text-base text-ptext mt-6 mb-8">
                { feedback }
            </p>
            <ErrorBoundary>
                <RatingStars rating={rating} />
            </ErrorBoundary>
        </div>
    )
}

export const TestimonialSingleDark = ({ testimonialProps }) => {
    const { name, image, jobTitle, feedback, rating } = testimonialProps

    return (
        <div className="w-full px-[4.5rem] py-[3.875rem] bg-blue">
            <div className="w-full flex justify-between items-center">
                <div className="w-fit flex items-center gap-[0.625rem]">
                    <img src={ image } alt="" className="w-[5.625rem] aspect-square rounded-full" />
                    <div>
                        <p className="font-rubik font-medium text-xl leading-6 text-white mb-[0.125rem]">
                            { name }
                        </p>
                        <p className="font-krub font-medium text-base text-white">
                            { jobTitle }
                        </p>
                    </div>
                </div>
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-gradientReverse grid place-items-center">
                    <img src={ quote } alt="" className="w-8" />
                </div>
            </div>
            <p className="font-krub font-medium italic text-base text-white mt-6 mb-8">
                { feedback }
            </p>
            <ErrorBoundary>
                <RatingStars rating={rating} />
            </ErrorBoundary>
        </div>
    )
}