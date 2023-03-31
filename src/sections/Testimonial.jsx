import ErrorBoundary from "../components/ErrorBoundary"
import { SectionTagLight } from "../components/SectionTag"
import { SectionTitleDark } from "../components/SectionTitle"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"

const Testimonial = () => {
    return (
        <section className="w-full py-[6.25rem] bg-white flex justify-center">
            <section className="w-[75rem] flex flex-col gap-10">
                <section className="w-full flex justify-between items-end">
                    <div>
                        <ErrorBoundary>
                            <SectionTagLight text="Testimonial" />
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <SectionTitleDark title="What Our Customers Say" />
                        </ErrorBoundary>
                    </div>
                    <div className="w-fit flex gap-[0.625rem]">
                        <button className="w-[2.75rem] h-[2.75rem] rounded-full bg-gradientReverse
                            grid place-items-center border-none outline-none hover:scale-[1.1] transition-all
                            duration-300 ease-in"
                        >
                            <BsArrowLeftShort className="text-blue text-[1.75rem]" />
                        </button>
                        <button className="w-[2.75rem] h-[2.75rem] rounded-full bg-blue 
                            grid place-items-center border-none outline-none hover:scale-[1.1] transition-all
                            duration-300 ease-in"
                        >
                            <BsArrowRightShort className="text-white text-[1.75rem]" />
                        </button>
                    </div>
                </section>
                <section>

                </section>
            </section>
        </section>
    )
}

export default Testimonial