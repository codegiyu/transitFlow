import mail from "../assets/icons/mail.svg"
import time from "../assets/icons/time.svg"
import phone from "../assets/icons/phone.svg"
import instagram from "../assets/icons/instagram-white.svg"
import facebook from "../assets/icons/facebook-white.svg"
import twitter from "../assets/icons/twitter-white.svg"
import linkedin from "../assets/icons/linkedin-white.svg"
import news1 from "../assets/images/news1.png"
import news2 from "../assets/images/news2.png"
import news3 from "../assets/images/news3.png"
import ship from "../assets/icons/ship.svg"
import plane from "../assets/icons/plane.svg"
import truck from "../assets/icons/truck.svg"
import warehouse from "../assets/icons/warehouse.svg"
import jessca from "../assets/images/jessca.png"
import kathleen from "../assets/images/kathleen.png"
import rebecca from "../assets/images/rebecca.png"
import instagramDark from "../assets/icons/instagram-black.svg"
import facebookDark from "../assets/icons/facebook-black.svg"
import twitterDark from "../assets/icons/twitter-black.svg"
import linkedinDark from "../assets/icons/linkedin-black.svg"
import studiogreen from "../assets/images/studiogreen.png"
import norto from "../assets/images/norto.png"
import pointsone from "../assets/images/pointsone.png"
import sandbox from "../assets/images/sandbox.png"
import studiogreenLogo from "../assets/images/studiogreen-logo.png"
import nortoLogo from "../assets/images/norto-logo.png"
import pointsoneLogo from "../assets/images/pointsone-logo.png"
import sandboxLogo from "../assets/images/sandbox-logo.png"
import premiumTankers from "../assets/images/premium-tankers.png"
import warehouseManagement from "../assets/images/warehouse-management.png"
import roadTransport from "../assets/images/road-transport.png"
import largeWarehouse from "../assets/images/large-warehouse.png"
import oceanTransport from "../assets/images/ocean-transport.png"
import packages from "../assets/icons/package.svg"
import global from "../assets/icons/global.svg"
import cost from "../assets/icons/cost.svg"
import pricing from "../assets/icons/pricing.svg"
import onTime from "../assets/icons/on-time.svg"
import allDay from "../assets/icons/24-7.svg"
import shipping from "../assets/icons/shipping.svg"
import martin from "../assets/images/martin.png"
import smith from "../assets/images/smith.png"

export const CONTACT_DATA = {
    mail: {
        icon: mail,
        topText: "Email",
        bottomText: "contact@logistics.com"
    },
    time: {
        icon: time,
        topText: "Mon - Sat 9:00 - 18:00",
        bottomText: "Sunday Closed"
    },
    phone: {
        icon: phone,
        topText: "Call Us",
        bottomText: "(00) 112 365 489"
    }
}

export const SOCIAL_MEDIA = {
    instagram: {
        icon: instagram,
        link: "https://www.instagram.com"
    },
    facebook: {
        icon: facebook,
        link: "https://www.facebook.com"
    },
    twitter: {
        icon: twitter,
        link: "https://www.twitter.com"
    },
    linkedin: {
        icon: linkedin,
        link: "https://www.linkedin.com"
    },
}

export const NEWS_DATA = [
    {
        image: news1,
        link: "#",
        date: {
            day: 8, 
            month: "September"
        },
        title: "Inland freight a worthy solution for your business",
        text: "We are dedicated in creating added value for our customers by implementing modern technology in our work.",
        bullets: [
            "Urgent transport solutions",
            "Reliable & experienced staffs",
            "Urgent transport solutions",
            "Reliable & experienced staffs"
        ]
    },
    {
        image: news2,
        link: "#",
        date: {
            day: 12, 
            month: "September"
        },
        title: "How technology can help redraw the supply chain map",
        text: "We are dedicated in creating added value for our customers by implementing modern technology in our work.",
        bullets: [
            "Urgent transport solutions",
            "Reliable & experienced staffs",
            "Urgent transport solutions",
            "Reliable & experienced staffs"
        ]
    },
    {
        image: news3,
        link: "#",
        date: {
            day: 25, 
            month: "September"
        },
        title: "Five things you should have ready for your broker",
        text: "We are dedicated in creating added value for our customers by implementing modern technology in our work.",
        bullets: [
            "Urgent transport solutions",
            "Reliable & experienced staffs",
            "Urgent transport solutions",
            "Reliable & experienced staffs"
        ]
    }
]

export const SERVICES_DATA = [
    {
        image: ship,
        name: "ship",
        title: "Sea Transport Services",
        text: "Following the quality of our service thus having gained trust of our many clients."
    },
    {
        image: warehouse,
        name: "warehouse",
        title: "Warehousing Services",
        text: "Following the quality of our service thus having gained trust of our many clients."
    },
    {
        image: plane,
        name: "plane",
        title: "Air Freight Services",
        text: "Following the quality of our service thus having gained trust of our many clients."
    },
    {
        image: truck,
        name: "truck",
        title: "Local Shipping Services",
        text: "Following the quality of our service thus having gained trust of our many clients."
    },
]

export const TEAM_DATA = [
    {
        image: jessca,
        name: "Jessca Arow",
        jobTitle: "Designer",
        socialMedia: [
            {
                link: "https://www.twitter.com",
                icon: twitterDark
            },
            {
                link: "https://www.facebook.com",
                icon: facebookDark
            },
            {
                link: "https://www.instagram.com",
                icon: instagramDark
            },
        ]
    },
    {
        image: kathleen,
        name: "Kathleen Smith",
        jobTitle: "Designer",
        socialMedia: [
            {
                link: "https://www.linkedin.com",
                icon: linkedinDark
            },
            {
                link: "https://www.twitter.com",
                icon: twitterDark
            },
            {
                link: "https://www.facebook.com",
                icon: facebookDark
            },
            {
                link: "https://www.instagram.com",
                icon: instagramDark
            },
        ]
    },
    {
        image: rebecca,
        name: "Rebecca Tylor",
        jobTitle: "Designer",
        socialMedia: [
            {
                link: "https://www.facebook.com",
                icon: facebookDark
            },
            {
                link: "https://www.instagram.com",
                icon: instagramDark
            },
        ]
    },
]

export const CLIENTS_DATA = [
    {
        background: studiogreen,
        client: studiogreenLogo
    },
    {
        background: norto,
        client: nortoLogo
    },
    {
        background: pointsone,
        client: pointsoneLogo
    },
    {
        background: sandbox,
        client: sandboxLogo
    },
]

export const PROJECTS_DATA = [
    {
        image: premiumTankers,
        project: "Liquid Transportation",
        division: "Premium Tankers"
    },
    {
        image: warehouseManagement,
        project: "Packaging Solutions",
        division: "Warehouse Management"
    },
    {
        image: roadTransport,
        project: "Contract Logistics",
        division: "Road Transportation"
    },
    {
        image: largeWarehouse,
        project: "Warehouse & Distribution",
        division: "Large Warehouse"
    },
    {
        image: oceanTransport,
        project: "Specialized Transport",
        division: "Ocean Transports"
    },
]

export const FEATURES_DATA = {
    delivery: {
        icon: packages,
        feature: "Delivery on Time"
    },
    cost: {
        icon: cost,
        feature: "Optimised Travel Cost"
    },
    safe: {
        icon: packages,
        feature: "Safe Package"
    },
    global: {
        icon: global,
        feature: "Global Tracking"
    },
    onTime: {
        icon: onTime,
        feature: "In Time Delivery"
    },
    ship: {
        icon: shipping,
        feature: "Ship Everywhere"
    },
    allDay: {
        icon: allDay,
        feature: "24/7 Support"
    },
    pricing: {
        icon: pricing,
        feature: "Transparent Pricing"
    },
}

export const TESTIMONIAL_DATA = [
    {
        name: "Kathleen Smith",
        image: smith,
        jobTitle: "Fuel Company",
        feedback: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        rating: "5.0"
    },
    {
        name: "John Martin",
        image: martin,
        jobTitle: "Restration Company",
        feedback: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        rating: "5.0"
    }
]