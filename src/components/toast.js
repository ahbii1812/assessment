import Toast from "react-native-root-toast-updated";

export default class ShowToast {
    
    static showShortCenter(message) {
        Toast.show(message, {
            duration: Toast.durations.SHORT,
            position: Toast.positions.CENTER,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
            textColor: "white"
        })
    }
}