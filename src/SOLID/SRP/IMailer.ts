import type Message from './Message'

export default interface Mailer {
  mail: (msg: Message) => void
}
