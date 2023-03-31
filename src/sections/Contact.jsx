import { SectionTagDark } from "../components/SectionTag"
import { SectionTitleLight } from "../components/SectionTitle"
import ErrorBoundary from "../components/ErrorBoundary"
import AddressSingle from "../components/AddressSingle"
import ContactForm from "../components/ContactForm"
import { CONTACT_DATA, CLIENTS_DATA } from "../data/data"
import uuid from "react-uuid"
import ClientSingle from "../components/ClientSingle"

const Contact = () => {
    const { mail, phone, time } = CONTACT_DATA
    const contactsArr = [mail, phone, time]

    return (
        <section className="w-full py-[8.75rem] bg-blue flex justify-center">
            <section className="w-[75rem] grid gap-[4.375rem]">
                <section className="w-full grid grid-cols-[22.125rem_1fr] gap-[5.5rem]">
                    <div className="w-full text-white">
                        <ErrorBoundary>
                            <SectionTagDark text="Contact" />
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <SectionTitleLight title="Get in touch with us" />
                        </ErrorBoundary>
                        <p className="font-krub font-medium text-base mt-1 mb-8">
                            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.
                        </p>
                        <div className="w-full grid gap-[1.875rem]">
                            { contactsArr.map(item => {
                                return (
                                    <ErrorBoundary key={uuid()}>
                                        <AddressSingle key={uuid()} addressProps={item} />
                                    </ErrorBoundary>
                                )
                            }) }
                        </div>
                    </div>
                    <div className="w-full pt-[2.625rem]">
                        <ErrorBoundary>
                            <ContactForm />
                        </ErrorBoundary>
                    </div>
                </section>
                <section className="w-full grid grid-cols-4">
                    { CLIENTS_DATA.map(item => {
                        return (
                            <ErrorBoundary key={uuid()}>
                                <ClientSingle key={uuid()} clientProps={ item } />
                            </ErrorBoundary>
                        )
                    }) }
                </section>
            </section>
        </section>
    )
}

export default Contact