class Television{
    constructor(channel,volume,status) {
        this.channel=channel;
        this.volume=volume;
        this.status=status;
    }
    changeChannel(newChannel){
        this.channel=newChannel;
    }
    changeVolume(newVolume){
        this.volume=newVolume;
    }
    turnOn(){
    this.status=true;
    }
    turnOff(){
    this.status=false;
    }
}
let bengTV=new Television(0,0,false);

let tv2=new Television(0,0,false);