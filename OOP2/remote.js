class Remote {
    constructor(code,television) {
        this.code = code;
        this.television=television;
    }
    setTelevision(television){
        this.television=television;
    }
    changeChannel(newChannel){
    this.television.changeChannel(newChannel);
    }
    changeVolume(newVolume){
        this.television.changeVolume(newVolume);
    }
    turnOn(){
        this.television.turnOn();
    }
    turnOff(){
        this.television.turnOff();
    }
}

let bengRemote=new Remote(1,bengTV);
