class Message {
    constructor(private _title: string, private _body: string) {

    }

    public get title(): string {
        return this._title
    }
    public get body(): string {
        return this._body
    }
    
}


// publisher interface
interface Publisher {
    publish(message: Message):void
}

abstract class MessagePublisher {

    public publish(message:Message):void{
        const publisher = this.createPublisher()
        return publisher.publish(message)
    }
    public abstract createPublisher():Publisher
}

// Publisher
class InstagramPublisher implements Publisher {
    publish(message: Message): void {
        console.log(`message: "${message.title}" published.`);
    }
}

// Publisher
class TwitterPublisher implements Publisher {
    publish(message: Message): void {
        console.log(`message: "${message.title}" published.`);
    }
}

// MessagePublisher
class InstagramMessagePublisher extends MessagePublisher {
    public createPublisher(): Publisher {
        return new InstagramPublisher();
    }

}

// MessagePublisher
class TwitterMessagePublisher extends MessagePublisher {
    public createPublisher(): Publisher {
        return new TwitterPublisher();
    }

}


class SocialService {
    constructor (private publisher: MessagePublisher) {
    }

    public publishPost(formRequest:any) {
        const message: Message = new Message(formRequest.title, formRequest.content)
        this.publisher.publish(message)
    }
}