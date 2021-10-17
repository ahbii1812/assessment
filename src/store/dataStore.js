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
            status: "online",
            questionsList: [
                {
                    "title": "Are your eating habits healthy enough?",
                    "options": [
                        { "id": "Yes", "label": "Yes", "value": "Yes" },
                        { "id": "No", "label": "No", "value": "No" }]
                },
                {
                    "title": "Rate your daily breakfast",
                    "options": [
                        { "id": "1", "label": "1", "value": "1" },
                        { "id": "2", "label": "2", "value": "2" },
                        { "id": "3", "label": "3", "value": "3" },
                        { "id": "4", "label": "4", "value": "4" }]
                },
                {
                    "title": "Rate your daily lunch",
                    "options": [
                        { "id": "1", "label": "1", "value": "1" },
                        { "id": "2", "label": "2", "value": "2" },
                        { "id": "3", "label": "3", "value": "3" },
                        { "id": "4", "label": "4", "value": "4" }]
                },
                {
                    "title": "Rate your daily dinner",
                    "options": [
                        { "id": "1", "label": "1", "value": "1" },
                        { "id": "2", "label": "2", "value": "2" },
                        { "id": "3", "label": "3", "value": "3" },
                        { "id": "4", "label": "4", "value": "4" }]
                },
            ]
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
            status: "online",
            questionsList: [
                {
                    "title": "Are your sleeping hours healthy enough?",
                    "options": [
                        { "id": "Yes", "label": "Yes", "value": "Yes" },
                        { "id": "No", "label": "No", "value": "No" }]
                },
                {
                    "title": "Rate your deep sleep status",
                    "options": [
                        { "id": "1", "label": "1", "value": "1" },
                        { "id": "2", "label": "2", "value": "2" },
                        { "id": "3", "label": "3", "value": "3" },
                        { "id": "4", "label": "4", "value": "4" }]
                },
                {
                    "title": "Rate your light sleep status",
                    "options": [
                        { "id": "1", "label": "1", "value": "1" },
                        { "id": "2", "label": "2", "value": "2" },
                        { "id": "3", "label": "3", "value": "3" },
                        { "id": "4", "label": "4", "value": "4" }]
                },
            ]
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
            status: "online",
            questionsList: [
                {
                    "title": "Are your working habits healthy enough?",
                    "options": [
                        { "id": "Yes", "label": "Yes", "value": "Yes" },
                        { "id": "No", "label": "No", "value": "No" }]
                }
            ]
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
            status: "online",
            questionsList: [
                {
                    "title": "Are your daily workout duration enough?",
                    "options": [
                        { "id": "Yes", "label": "Yes", "value": "Yes" },
                        { "id": "No", "label": "No", "value": "No" }]
                },
                {
                    "title": "Frequency of exercising",
                    "options": [
                        { "id": "1", "label": "1", "value": "1" },
                        { "id": "2", "label": "2", "value": "2" },
                        { "id": "3", "label": "3", "value": "3" },
                        { "id": "4", "label": "4", "value": "4" }]
                },
                {
                    "title": "Do you workout daily?",
                    "options": [
                        { "id": "Yes", "label": "Yes", "value": "Yes" },
                        { "id": "No", "label": "No", "value": "No" }]
                },
            ]
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
            status: "online",
            questionsList: [
                {
                    "title": "How you feel your own health?",
                    "options": [
                        { "id": "Good", "label": "Good", "value": "Good" },
                        { "id": "Still OK", "label": "Still OK", "value": "Still OK" },
                        { "id": "Bad", "label": "Bad", "value": "Bad" }
                    ]
                }
            ]
        },
    ]
    termsAndCondition = "A terms and conditions agreement outlines the website administrator’s rules regarding user behavior, and provides information about the actions the website administrator can and will perform.\nYour terms and conditions text is a contract between your website and its users. In the event of a legal dispute, arbitrators will look to this agreement to determine whether each party acted within their rights."

}

const datastore = new dataStore();
export default datastore;