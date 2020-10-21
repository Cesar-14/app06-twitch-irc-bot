import tmi, { Client } from 'tmi.js';

const opts = {
    identity: {
        username: "delitofederal09",
        password: "oauth:ucfk0ft0cceo6t25im7ltvlxodwxie",
    },
    channels: [
        'Im_Stingray'
    ]
}

const client = new tmi.client(opts);

client.on('connected', (address, port)=>{
    client.say(opts.channels[0], 'Wassap guys');
    console.log(`Bot listening at: ${address}:${port}`);
});

client.on('message', (target, ctx, msg, self) =>{
    if(msg === 'ping'){
        client.say(target, 'pong');
    }
});

client.connect();