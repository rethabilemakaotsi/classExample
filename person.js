class Person{
    static count = 0
    constructor(){
        this.firstName = "please provide your first name"
        this.lastName = "please provide your last name"
        this.age = 0
        Person.count  += 1
    }
    set  FirstName(value){
        this.firstName = value
    }
    get FirstName(){
        return this.firstName
    }
    set LastName(value){
        this.lastName = value
    }
    get LastName(){
        return this.lastName
    }
    set Age(value){
        this.age = value
    }
    get Age(){
        return this.age
    }
    // Display method
    Display(){
        console.log(`
        ======Person ID: ${Person.count}======
        First Name: ${this.firstName}
        Last Name: ${this.lastName}
        Age: ${this.age}
        =====================================
        `);
    
}}

export {
    Person
}
