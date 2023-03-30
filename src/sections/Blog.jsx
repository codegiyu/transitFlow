import { SectionTagLight } from "../components/SectionTag"
import { ButtonBlue } from "../components/Button"
import ErrorBoundary from "../components/ErrorBoundary"
import { NEWS } from "../data/data"
import NewsSingle from "../components/NewsSingle"
import uuid from "react-uuid"

const Blog = () => {
    const newsArr = Object.values(NEWS)

    return (
        <section className="w-full py-[6.25rem] bg-white flex justify-center">
            <div className="w-[950px] flex flex-col items-center">
                <ErrorBoundary>
                    <SectionTagLight text="Our Blog" />
                </ErrorBoundary>
                <h2 className="font-rubik font-semibold text-[2.1875rem] leading-[2.625rem] text-htext mt-[0.875rem]">
                    Our Latest News
                </h2>
                <section className="w-full py-10 grid border-collapse">
                    { newsArr.map(item => {
                        return (
                            <ErrorBoundary key={uuid()}>
                                <NewsSingle key={uuid()} newsProps={item} />
                            </ErrorBoundary>
                        )
                    }) }
                </section>
                <ErrorBoundary>
                    <ButtonBlue btnProps={{ text: "More Blog", linkTo: "#" }} />
                </ErrorBoundary>
            </div>
        </section>
    )
}

export default Blog