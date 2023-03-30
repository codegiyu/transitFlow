import heroImg from "../assets/images/hero.png"
import { SectionTagDark } from "../components/SectionTag"
import { ButtonGold } from "../components/Button"
import ErrorBoundary from "../components/ErrorBoundary"

const Hero = () => {
    return (
        <section className="w-full px-20 aspect-[2.194] relative flex items-center justify-center">
            <img src={ heroImg } alt="hero" className="w-full object-cover absolute top-0 left-0 z-[-1]" />
            <div className="w-[1200px]">
                <div className="w-[570px] text-white">
                    <ErrorBoundary>
                        <SectionTagDark text="Logistics & Supply Chain Solutions" />
                    </ErrorBoundary>
                    <h1 className="font-rubik font-bold text-[3.75rem] leading-[4.5rem] mb-2">
                        Your Gateway to any Destination in the World
                    </h1>
                    <p className="font-krub font-medium text-base mb-6">
                        In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus.
                    </p>
                    <ErrorBoundary>
                        <ButtonGold btnProps={{ text: "Explore More" }} />
                    </ErrorBoundary>
                </div>
            </div>
        </section>
    )
}

export default Hero