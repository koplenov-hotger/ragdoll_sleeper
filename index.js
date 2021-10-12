// Sends event to client
vkBridge.send('VKWebAppInit');

// Subscribes to event, sended by client
vkBridge.subscribe(e => console.log(e));

var bridge = vkBridge;
bridge.send("VKWebAppShowInviteBox", {})
    .then(data => console.log(data.success))
    .catch(error => console.log(error));
