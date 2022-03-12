export class Customer{
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public GetAge(){
        console.log(`${this.firstName} ${this.lastName}'s age is ${this.age}`)
    }

    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }

}
