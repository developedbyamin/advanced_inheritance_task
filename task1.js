class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person{
    constructor(name, age, grade){
        super(name,age);
        this.grade = grade;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    study(hours){
        return `${this.name} has studied for ${hours} hours.`;
    }

}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    teach(hours) {
        return `${this.name} has taught for ${hours} hours.`;
    }
}