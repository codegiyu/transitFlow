import { SectionTitleDark } from "../components/SectionTitle"
import ErrorBoundary from "../components/ErrorBoundary"
import { ButtonBlue } from "../components/Button"
import { PROJECTS_DATA } from "../data/data"
import ProjectSingle from "../components/ProjectSingle"
import uuid from "react-uuid"

const Projects = () => {
    return (
        <section className="w-full bg-white flex flex-col items-center pb-[9.375rem] relative z-0">
            <section className="w-[75rem] flex flex-col items-center relative z-[2]">
                <ErrorBoundary>
                    <SectionTitleDark title="Transporting Across The World" />
                </ErrorBoundary>
            </section>
            <section className="w-[80rem] xxl:w-[90rem] flex flex-col items-center relative z-[2]">
                <div className="w-full grid grid-cols-5 gap-[1.125rem] mt-[2.25rem] mb-[4rem]">
                    { PROJECTS_DATA.map(item => {
                        return (
                            <ErrorBoundary key={uuid()}>
                                <ProjectSingle key={uuid()} projectProps={ item } />
                            </ErrorBoundary>
                        )
                    }) }
                </div>
                <ErrorBoundary>
                    <ButtonBlue btnProps={{ text: "More Work", linkTo: "#" }} />
                </ErrorBoundary>
            </section>
            <section className="w-full h-1/2 absolute bottom-0 left-0 bg-gradient z-[1]"></section>
        </section>
    )
}

export default Projects