import { SectionTagLight } from "../components/SectionTag"
import { ButtonBlue } from "../components/Button"
import ErrorBoundary from "../components/ErrorBoundary"
import { NEWS_DATA } from "../data/data"
import NewsSingle from "../components/NewsSingle"
import uuid from "react-uuid"
import { SectionTitleDark } from "../components/SectionTitle"

const Blog = () => {
    return (
        <section className="w-full py-[6.25rem] bg-white flex justify-center">
            <div className="w-[59.375rem] flex flex-col items-center">
                <ErrorBoundary>
                    <SectionTagLight text="Our Blog" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <SectionTitleDark title="Our Latest News" />
                </ErrorBoundary>
                <section className="w-full py-10 grid border-collapse">
                    { NEWS_DATA.map(item => {
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