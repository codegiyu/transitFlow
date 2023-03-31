import containers from "../assets/images/containers.png"
import plane from "../assets/images/travel-cost.png"
import girl from "../assets/images/delivery.png"
import ErrorBoundary from "../components/ErrorBoundary"
import { SectionTagLight } from "../components/SectionTag"
import { SectionTitleDark } from "../components/SectionTitle"
import { FEATURES_DATA } from "../data/data"
import FeatureSingle from "../components/FeatureSingle"
import uuid from "react-uuid"

const WhyUs = () => {
    const { delivery, cost } = FEATURES_DATA
    const featuresArr = [delivery, cost]

    return (
        <section className="w-full pt-[16rem] bg-white flex justify-center relative z-0">
            <img src={ containers } alt="containers" className="w-full aspect-[3.812] absolute top-0 left-0 z-[1]" />
            <section className="w-[75rem] flex flex-col items-center px-[5.5rem] py-[5.625rem] bg-white 
                relative z-[2]"
            >
                <section className="w-full grid grid-cols-2 gap-[5.5rem] items-stretch mb-[8.5rem]">
                    <div className="w-full flex flex-col">
                        <ErrorBoundary>
                            <SectionTagLight text="Why Us" />
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <SectionTitleDark title="We provide full range global logistics solution" />
                        </ErrorBoundary>
                        <p className="font-krub font-medium text-base text-ptext mt-3">
                            {"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative \
                            thinking to further the overall value proposition."}
                        </p>
                        <p className="font-krub font-medium text-base text-ptext mt-6 mb-[1.5625rem]">
                            Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        </p>
                        <div className="w-full grid gap-[1.375rem]">
                            { featuresArr.map(item => {
                                return (
                                    <ErrorBoundary key={uuid()}>
                                        <FeatureSingle key={uuid()} featureProps={ item } />
                                    </ErrorBoundary>
                                )
                            }) }
                        </div>
                    </div>
                    <div className="w-full h-full relative">
                        <figure className="w-full h-full">
                            <img src={ plane } alt="plane" className="w-full object-cover" />
                            <figure className="w-[65.5%] aspect-[1.342] absolute left-[-22.5%] bottom-[-11.33%]
                                bg-white pt-[1.875rem] pr-[1.875rem]"
                            >
                                <img src={ girl } alt="girl" className="w-full object-cover" />
                            </figure>
                        </figure>
                    </div>
                </section>
                <section className="w-full border-y border-[#D4D4D4] grid grid-cols-2">
                    <div className="w-full border-r pt-[2.875rem] pb-[2.375rem] flex items-center justify-center gap-4">
                        <h2 className="font-rubik font-semibold text-[3.125rem] leading-[3.75rem] text-htext">
                            1294
                        </h2>
                        <span className="w-4 h-4 bg-gradient"></span>
                        <p className="font-spartan font-normal text-xl leading-5 text-htext">
                            Delivered Packages
                        </p>
                    </div>
                    <div className="w-full border-r pt-[2.875rem] pb-[2.375rem] flex items-center justify-center gap-4">
                        <h2 className="font-rubik font-semibold text-[3.125rem] leading-[3.75rem] text-htext">
                            3594
                        </h2>
                        <span className="w-4 h-4 bg-gradient"></span>
                        <p className="font-spartan font-normal text-xl leading-5 text-htext">
                            Satisfied Clients
                        </p>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default WhyUs