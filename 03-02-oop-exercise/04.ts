interface Animal {
    makeSound(): string;
}

class Dog implements Animal {
    public makeSound(): string {
        return 'Woof';
    }
}

const dog = new Dog();
console.log(dog.makeSound());
