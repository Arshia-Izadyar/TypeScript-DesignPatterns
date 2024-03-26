import type Mailer from './IMailer'
import type ITemplate from './ItemplateEngin'
import type Translator from './ITranslator'
import type User from './User'
import Message from './Message'

// export default class ConfirmationMailMailer {
//   private readonly templateEngin: ITemplate
//   private readonly translator: Translator
//   private readonly mailer: Mailer

//   constructor (templateEngin: ITemplate, translator: Translator, mailer: Mailer) {
//     this.templateEngin = templateEngin
//     this.mailer = mailer
//     this.translator = translator
//   }

//   public sendTo (user: User): void {
//     const message: Message = this.createMessageFor(user)
//     this.sendMessage(message)
//   }

//   private sendMessage (message: Message): void {
//     this.mailer.mail()
//   }

//   private createMessageFor (user: User): Message {
//     const sub = this.translator.translate('hi')
//     const body = this.templateEngin.template()

//     return new Message(sub + body)
//   }
// }

export default class ConfirmationMailMailer {
  constructor (private readonly mailer: Mailer, private readonly mailFactory: MailFactory) {

  }

  public sendTo (user: User): void {
    const msg = this.mailFactory.createMessageFor(user)
    this.mailer.mail(msg)
  }
}

// collaborator class
class MailFactory {
  constructor (
    private readonly templateEngin: ITemplate,
    private readonly translator: Translator
  ) {

  }

  public createMessageFor (user: User): Message {
    const sub = this.translator.translate('hi')
    const body = this.templateEngin.template()

    return new Message(sub + body)
  }
}
