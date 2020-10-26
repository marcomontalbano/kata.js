export class Person {
    secrets: string[] = []
    friends: Person[] = []
    notified: Person[] = []

    constructor(public name: string) {

    }

    propagate() {
        this.notified = [];
    }

    secret(secret: string) {
        this.secrets.push(secret);
    }

    ask() {
        return this.secrets[0] || '';
    }

    addToNotified(person: Person) {
        this.notified.push(person);
    }

    addFriend(friend: Person) {
        this.friends.push(friend);
    }

    hasFriends() {
        return this.friends.length > 0;
    }
}
