
const alex = {
    firstName: "Alex",
    lastName: "Miller",
    age: 25
};

class Student{
    constructor(fN, lN, age){
        this.firstName = fN;
        this.lastName = lN;
        this.age = age;
    }

    printInfo = () => {
        console.log(this.firstName, this.lastName, this.age);
    }
}

class PhDStudent extends Student{
    constructor(fN, lN, age, specialization){
        super(fN, lN, age); // Triggers the constructor of the parent class
        this.specialization = specialization;
    }
}

const martha = new Student("Martha", "Smith", 23);
const roger = new Student("Roger", "Anderson", 28);
const michael = new PhDStudent("Michael", "Smith", 29, "Advanced databases");

michael.printInfo();
martha.printInfo();
roger.printInfo();