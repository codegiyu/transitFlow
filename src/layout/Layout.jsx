import Header from "../sections/Header"
import Footer from "../sections/Footer"
import ErrorBoundary from "../components/ErrorBoundary"

const Layout = (props) => {
    return (
        <>
            <ErrorBoundary>
                <Header />
            </ErrorBoundary>
            <main>
                { props.children }
            </main>
            <ErrorBoundary>
                <Footer />
            </ErrorBoundary>
        </>
    )
}

export default Layout