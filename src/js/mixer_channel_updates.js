import { Carina } from "./carina.min.importable";
import alerts from "./index"

const selectChannel = (user) => {
    let url = `https://mixer.com/api/v1/channels/${user}?fields=id`;
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.responseType = "json";
    req.send();

    req.onload = () => {
        let response = req.response.id;
        channelId = response;
        test();
        console.log(channelId);
    }
}

let channelId;
const test = () => {
    const ca = new Carina({
        isBot: true,
    }).open();

    ca.subscribe(`channel:${channelId}:followed`, data => {
        alerts("_true", data.user.username, "_false", "_false", "_false", "_false", "_false", "_false", "_false");
        console.log(data);
    });
    ca.subscribe(`channel:${channelId}:hosted`, data => {
        alerts("_false", "_false", "_true", data.hoster.token, "_false", "_false", "_false", "_false", "_false");
        console.log(data);
    });
    ca.subscribe(`channel:${channelId}:subscribed`, data => {
        alerts("_false", "_false", "_false", "_false", "_true", data.user.username, "_false", "_false", "_false");
        console.log(data);
    });
    ca.subscribe(`channel:${channelId}:resubscribed`, data => {
        alerts("_false", "_false", "_false", "_false", "_false", "_false", "_true", data.user.username, "_false");
        console.log(data);
    });
    ca.subscribe(`channel:${channelId}:patronageUpdate`, data => {
        alerts("_false", "_false", "_false", "_false", "_false", "_false", "_false", "_false", "_true");
        console.log(data);
    });
}
export default selectChannel;
