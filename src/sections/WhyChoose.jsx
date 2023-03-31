import plane from "../assets/images/carrier-plane.png"
import carrier from "../assets/icons/carrier.svg"
import ErrorBoundary from "../components/ErrorBoundary"
import { SectionTagLight } from "../components/SectionTag"
import { SectionTitleDark } from "../components/SectionTitle"
import { FEATURES_DATA } from "../data/data"
import FeatureSingle from "../components/FeatureSingle"
import uuid from "react-uuid"

const WhyChoose = () => {
    const { delivery, ship, global, allDay, onTime, pricing } = FEATURES_DATA
    const featuresArr = [delivery, ship, global, allDay, onTime, pricing]

    return (
        <section className="w-full grid grid-cols-2 items-stretch">
            <section className="w-full h-full py-[9rem] px-4 bg-blue">
                <figure className="w-full aspect-[1.523] flex items-end justify-center relative translate-x-[5vw]
                    xl:translate-x-[6vw] xxl:translate-x-[6.5vw]"
                >
                    <img src={ plane } alt="plane" 
                        className="w-full object-cover absolute top-0 left-0 z-[1]"
                    />
                    <div className="w-[26.125rem] py-[1.25rem] pl-[2.25rem] bg-gradient overflow-hidden z-[2] relative">
                        <div className="flex gap-5 items-center relative z-[4]">
                            <img src={ carrier } alt="" className="w-[4.065rem]" />
                            <p className="font-rubik font-normal text-[1.2rem] leading-[1.875rem] text-htext">
                                Moving your products across borders
                            </p>
                        </div>
                        <div className="w-full aspect-square absolute bottom-0 right-[-40%] bg-[#FFFFFF20]
                            rotate-[-35deg] z-[3] "
                        >
                        </div>
                    </div>
                </figure>
            </section>
            <section className="w-full h-full flex items-center justify-center py-[9rem] bg-secondary">
                <div className="w-[34rem]">
                    <ErrorBoundary>
                        <SectionTagLight text="Why Choose" />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <SectionTitleDark title="We create opportunity to reach potential" />
                    </ErrorBoundary>
                    <p className="font-krub font-medium text-base text-ptext mt-[1.125rem] mb-[3.75rem]">
                        {`Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative 
                        thinking to further the overall value proposition.`}
                    </p>
                    <div className="w-full grid grid-cols-2 gap-y-5">
                        { featuresArr.map(item => {
                            return (
                                <ErrorBoundary key={uuid()}>
                                    <FeatureSingle key={uuid()} featureProps={ item } />
                                </ErrorBoundary>
                            )
                        }) }
                    </div>
                </div>
            </section>
        </section>
    )
}

export default WhyChoose