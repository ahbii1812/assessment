class dataStore {
    cardDetails = [
        {
            title: "How well are you eating?",
            icon: require("../icon/facebookIcon.png"),
            maxPoints: 1000,
            desc: "Tell us your eating habits and we will let you know if you're making good choices.",
            getPoints: 500,
            retakeDate: "15/10/2021",
            timeToSpend: 5,
            status: "online"
        },
        {
            title: "How well are you sleeping?",
            icon: require("../icon/instaIcon.png"),
            maxPoints: 2000,
            desc: "Tell us your sleeping status and we will help you to improve your sleeping quality.",
            getPoints: 500,
            retakeDate: "29/09/2021",
            timeToSpend: 4,
            status: "offline"
        },
        {
            title: "How well are you working?",
            icon: require("../icon/playstoreIcon.png"),
            maxPoints: 3000,
            desc: "Tell us your working habits and we will let you know if you're making good choices.",
            getPoints: 500,
            retakeDate: "29/10/2021",
            timeToSpend: 9,
            status: "online"
        },
        {
            title: "How well are you exercising?",
            icon: require("../icon/whatsappIcon.png"),
            maxPoints: 4000,
            desc: "Tell us your exercises habits and we will let you know if you're making good choices.",
            getPoints: 300,
            retakeDate: "25/12/2021",
            timeToSpend: 10,
            status: "online"
        },
        {
            title: "How was your health?",
            icon: require("../icon/youtubeIcon.png"),
            maxPoints: 5000,
            desc: "Tell us your current health status and we will let you know your healthly rate.",
            getPoints: 800,
            retakeDate: "8/11/2021",
            timeToSpend: 11,
            status: "online"
        },
    ]

}

const datastore = new dataStore();
export default datastore;