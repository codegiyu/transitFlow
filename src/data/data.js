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

export const NEWS = {
    1: {
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
    2: {
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
    3: {
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
}