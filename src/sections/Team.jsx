import { TEAM_DATA } from "../data/data";
import { SectionTagLight } from "../components/SectionTag";
import { SectionTitleDark } from "../components/SectionTitle";
import ErrorBoundary from "../components/ErrorBoundary";
import TeamSingle from "../components/TeamSingle";
import uuid from "react-uuid";

const Team = () => {
    return (
        <section className="w-full py-[6.25rem] bg-white flex justify-center">
            <div className="w-[75rem] flex flex-col items-center">
                <ErrorBoundary>
                    <SectionTagLight text="The Transporters" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <SectionTitleDark title="Meet Expert Team" />
                </ErrorBoundary>
                <section className="w-full pt-10 grid grid-cols-3 gap-[3.375rem]">
                    { TEAM_DATA.map(item => {
                        return (
                            <ErrorBoundary key={uuid()}>
                                <TeamSingle key={uuid()} teamProps={item} />
                            </ErrorBoundary>
                        )
                    }) }
                </section>
            </div>
        </section>
    )
}

export default Team