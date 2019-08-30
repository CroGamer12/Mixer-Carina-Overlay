import { Carina } from './carina.min.importable';
import alerts from './index';

const selectChannel = user => {
    fetch(`https://mixer.com/api/v1/channels/${user}?fields=id`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            test(data.id);
        });
};

const test = channelId => {
    const ca = new Carina({
        isBot: true
    }).open();

    ca.subscribe(`channel:${channelId}:followed`, data => {
        console.log(data);
        alerts('_true', data.user.username, '_false', '_false', '_false', '_false', '_false', '_false', '_false');
    });
    ca.subscribe(`channel:${channelId}:hosted`, data => {
        console.log(data);
        alerts('_false', '_false', '_true', data.hoster.token, '_false', '_false', '_false', '_false', '_false');
    });
    ca.subscribe(`channel:${channelId}:subscribed`, data => {
        console.log(data);
        alerts('_false', '_false', '_false', '_false', '_true', data.user.username, '_false', '_false', '_false');
    });
    ca.subscribe(`channel:${channelId}:resubscribed`, data => {
        console.log(data);
        alerts('_false', '_false', '_false', '_false', '_false', '_false', '_true', data.user.username, '_false');
    });
    ca.subscribe(`channel:${channelId}:patronageUpdate`, () => {
        alerts('_false', '_false', '_false', '_false', '_false', '_false', '_false', '_false', '_true');
    });
};
export default selectChannel;
