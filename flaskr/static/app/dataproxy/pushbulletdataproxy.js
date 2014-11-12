function PushBulletDataproxy(http) {
    this.http = http;
}

PushBulletDataproxy.prototype.StartAsync = function(callBack) {
    if (typeof(callBack) == 'function')
    {
        this.wsOnMessageCallback = callBack;
        this.socket = new WebSocket('wss://stream.pushbullet.com/websocket/7UWttjpkNMFBewIjglvbAfh2njgWk31R');
        this.socket.onmessage = function(e){
            if (JSON.parse(e.data).type != 'nop')
                callBack(e.data);
        };
    }
};
