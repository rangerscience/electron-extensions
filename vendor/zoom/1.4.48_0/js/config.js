const runEnvIndex = 5;
const runEnvArr = [
    ["dev-integration.", "dev"],
    ["devep.", "dev"],
    ["", "dev"],
    ["go.", ""],
    ["us04web.", ""],
    ["", ""],
    ["devcolo.", "dev"],
    ["deva.", "dev"]
];
export default {
    extVersion: "1.4.48",
    get runEnv() {
        let e = runEnvArr[runEnvIndex];
        return e === undefined ? runEnvArr[5] : e
    },
    get envIndex() {
        return runEnvIndex
    },
    errors: ["No matching domain found.", "zoom_data is not an Object:", "Invalid email address or password.", "Network error, please try again!", "Request timeout, please try again!", "Schedule meeting failed. Please try again.", "Login failed. Please try again.", "Update settings failed!", "Unknown error, please refresh page and try again.", "Port not exist, please refresh page and try again.", "Enter valid domains. Separate multiple domains by semicolon", "can't parse the event duration correctly", "eid_meeting_map is not an Array:", "set eidMeetingMap value is not an Object:", "get eidMeetingMap value is not an Object or null:", "get eidMeetingMap value is not an Object:", "this eid is missing in eidMeetingMap:", "Please save or cancel the result of the domians edit before continue."],
    tips: ["Enter valid email addresses. Separate multiple domains by semicolon", "The setting is locked and cannot be changed. All of your meetings will use this setting.", "You are permanently deleting this Zoom meeting. This action cannot be undone.", "You have added two Zoom meetings. One of your meetings will be deleted. \n\nA new meeting is automatically created when you add a guest or a room. If you are manually adding a Zoom meeting, you only need to click “Make it a Zoom Meeting” or “Add Conferencing”.", "Record the meeting automatically on the local computer", "Record the meeting automatically in the cloud", "Please enter a meeting password", 'If you want to make changes for your personal meeting, <a href="">change PMI settings</a> here.', "If you change the settings and schedule this meeting, all previously scheduled PMI meetings will use the latest settings.", "If no domains specified, any signed-in users can join", "You have signed out from Zoom. Please sign in again to use Zoom service.", "You have logged in successfully!", "Sign in to Zoom with the following specified domains", '"Internal domain restriction" has been removed from the list, after saving this meeting, you cannot select this option again.']
};