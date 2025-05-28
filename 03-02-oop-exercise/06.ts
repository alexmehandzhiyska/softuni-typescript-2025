class Employee {
    public name: string;
    protected position: string;
    private salary: number;

    constructor(name: string, position: string, salary: number) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    public getDetails(): string {
        return `Name: ${this.name}, Position: ${this.position}`;
    }

    public showSalary(): string {
        return `Salary: $${this.salary}`;
    }
}

const emp = new Employee("Alice", "Manager", 5000);
console.log(emp.getDetails());
console.log(emp.showSalary());
console.log(emp.name);
