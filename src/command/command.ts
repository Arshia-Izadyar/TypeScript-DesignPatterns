// turns request to stand-alone object that contains all info about request
// add delay or queue requests execution

interface Command {
    execute():void
}
// Receiver
interface Device {
    turnOff(): void
    turnOn(): void
}


class Tv implements Device {
    turnOff(): void {
        console.log('device turned on');
    }
    turnOn(): void {
        console.log('device turned off');
    }

    public changeChannel(): void {
        console.log('channel changed');
    }
}
class Sterio implements Device{
    turnOff(): void {
        console.log('device turned on');
    }
    turnOn(): void {
        console.log('device turned off');
    }

    public changeVol():void {
        console.log('vol changed');
    }

}
class turnOffCommand implements Command {
    constructor(private device: Device) {

    }
    execute(): void {
        this.device.turnOff()
    }
}

class TurnOnCommand implements Command {
    constructor (private device: Device) {

    }
    public execute(): void {
        this.device.turnOn()
    }
}

class changeChannelCommand implements Command {
    constructor (private tv: Tv) {

    }
    execute(): void {
        this.tv.changeChannel()
    }
}

// invoker 
class RemoteControl {
    
    private command: Command | null = null

    public setCommand(command: Command) {
        this.command = command
    }

    public pressButton() {
        if (this.command) {

            this.command.execute()
        } 
    }
}


function ClientCodeHere() {
    const tv = new Tv()
    const sterio = new Sterio()

    const turnOffTv = new turnOffCommand(tv)
    const turnOnTv = new TurnOnCommand(tv)
    const changeChannel = new changeChannelCommand(tv)

    const remote = new RemoteControl()
    remote.setCommand(turnOffTv)
    remote.pressButton()
    remote.setCommand(turnOnTv)
    remote.pressButton()

    remote.setCommand(changeChannel)
    remote.pressButton()


}

ClientCodeHere()