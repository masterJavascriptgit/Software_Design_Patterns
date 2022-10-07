interface MemberInterface {
  send: (message: string, toMember: any) => void;
  recive: (message: string, toMember: any) => void;
}

class Member implements MemberInterface {
  public chatroom: any;

  constructor(public name: string) {
    this.name = name;
    this.chatroom = null;
  }

  send(message: string, toMember: any) {
    this.chatroom.send(message, this, toMember);
  }

  recive(message: string, fromMember: any) {
    console.log(`${fromMember.name} to ${this.name} : ${message}`);
  }
}

class Chatroom {
  members: any;

  constructor() {
    this.members = {};
  }

  addMember(member: any) {
    this.members[member.name] = member;
    member.chatroom = this;
  }

  send(message: string, fromMember: any, toMember: any) {
    toMember.recive(message, fromMember);
  }
}

const chatroom = new Chatroom();

const john = new Member("John");
const amir = new Member("amir");
const sara = new Member("Sara");

chatroom.addMember(john);
chatroom.addMember(amir);
chatroom.addMember(sara);

amir.send("Hey what's up ?", sara);
sara.send("Im good .", amir);
john.send("Hey Sara", sara);

/**
 *  amir to Sara : Hey what's up ?
    Sara to amir : Im good .
    John to Sara : Hey Sara
 */
