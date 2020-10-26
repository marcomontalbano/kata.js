export class Person {
    secrets: string[] = []
    friends: Person[] = []

    constructor(public name: string) {

    }

    secret(secret: string) {
        this.secrets.push(secret);
    }

    ask() {
        return this.secrets[0];
    }

    addFriend(friend: Person) {
        this.friends.push(friend);
    }

    hasFriends() {
        return this.friends.length > 0;
    }
}
