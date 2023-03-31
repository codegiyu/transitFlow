import { SectionTagLight } from "../components/SectionTag"
import { SectionTitleDark } from "../components/SectionTitle"
import ErrorBoundary from "../components/ErrorBoundary"
import { SERVICES_DATA } from "../data/data"
import ServiceSingle from "../components/ServiceSingle"
import uuid from "react-uuid"

const WhatWeDo = () => {
    return (
        <section className="w-full pt-[6.25rem] pb-[7.5rem] bg-white flex justify-center">
            <section className="w-[75rem] grid grid-cols-[18.375rem_1fr] gap-8">
                <div className="">
                    <ErrorBoundary>
                        <SectionTagLight text="What We Do" />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <SectionTitleDark title="Safe & Reliable Cargo Solutions" />
                    </ErrorBoundary>
                </div>
                <div className="w-full grid grid-cols-2 gap-x-[4.5rem] gap-y-[4.375rem]">
                    { SERVICES_DATA.map(item => {
                        return (
                            <ErrorBoundary key={uuid()}>
                                <ServiceSingle key={uuid()} serviceProps={item} />
                            </ErrorBoundary>
                        )
                    }) }
                </div>
            </section>
        </section>
    )
}

export default WhatWeDo