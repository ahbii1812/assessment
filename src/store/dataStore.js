class dataStore {
    cardDetails = [
        {
            id: "A1",
            title: "How well are you eating?",
            icon: require("../icon/healthyfood.png"),
            maxPoints: 1000,
            desc: "Tell us your eating habits and we will let you know if you're making good choices.",
            getPoints: 500,
            retakeDate: "15/10/2021",
            timeToSpend: 5,
            status: "online"
        },
        {
            id: "A2",
            title: "How well are you sleeping?",
            icon: require("../icon/sleep.png"),
            maxPoints: 2000,
            desc: "Tell us your sleeping status and we will help you to improve your sleeping quality.",
            getPoints: 500,
            retakeDate: "29/09/2021",
            timeToSpend: 4,
            status: "offline"
        },
        {
            id: "A3",
            title: "How well are you working?",
            icon: require("../icon/working.png"),
            maxPoints: 3000,
            desc: "Tell us your working habits and we will let you know if you're making good choices.",
            getPoints: 500,
            retakeDate: "29/10/2021",
            timeToSpend: 9,
            status: "online"
        },
        {
            id: "A4",
            title: "How well are you exercising?",
            icon: require("../icon/exercise.png"),
            maxPoints: 4000,
            desc: "Tell us your exercises habits and we will let you know if you're making good choices.",
            getPoints: 300,
            retakeDate: "25/12/2021",
            timeToSpend: 10,
            status: "online"
        },
        {
            id: "A5",
            title: "Check your heath status?",
            icon: require("../icon/health.png"),
            maxPoints: 5000,
            desc: "Tell us your current health status and we will let you know your healthly rate.",
            getPoints: 800,
            retakeDate: "8/11/2021",
            timeToSpend: 11,
            status: "online"
        },
    ]
    termsAndCondition = "A terms and conditions agreement outlines the website administrator’s rules regarding user behavior, and provides information about the actions the website administrator can and will perform.\nYour terms and conditions text is a contract between your website and its users. In the event of a legal dispute, arbitrators will look to this agreement to determine whether each party acted within their rights."

}

const datastore = new dataStore();
export default datastore;