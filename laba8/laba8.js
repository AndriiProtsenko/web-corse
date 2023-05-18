class Employee {
    constructor(firstName, secondName, baseSalary, experienceInYears) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.baseSalary = baseSalary;
        this.experienceInYears = experienceInYears;
    }

    CalculateSalary() {
        let countedSalary = 0;

        if (this.experienceInYears < 2) {
            countedSalary = this.baseSalary;
        } else if (this.experienceInYears < 5) {
            countedSalary = this.baseSalary + 200;
        } else {
            countedSalary = this.baseSalary * 1.2 + 500;
        }

        return countedSalary;
    }
}

class Developer extends Employee {}

class Designer extends Employee {
    constructor(firstName, secondName, baseSalary, experienceInYears, efficiencyСoefficient) {
        super(firstName, secondName, baseSalary, experienceInYears);
        this.efficiencyСoefficient = Math.max(0, Math.min(1, efficiencyСoefficient));
    }

    CalculateSalary() {
        return super.CalculateSalary() * this.efficiencyСoefficient;
    }
}

class Manager extends Employee {
    constructor(firstName, secondName, baseSalary, experienceInYears, employees) {
        super(firstName, secondName, baseSalary, experienceInYears);
        this.employees = employees;
    }

    CalculateSalary() {
        let countedSalary = super.CalculateSalary();

        if (this.employees.length > 10) {
            countedSalary += 300;
        } else if (this.employees.length > 5) {
            countedSalary += 200;
        }

        const counter = this.employees.filter(employee => employee instanceof Developer).length;
        const coefficient = counter / this.employees.length;

        if (coefficient > 0.5) {
            countedSalary += countedSalary * 0.1;
        }

        return countedSalary;
    }
}

class Department {
    constructor(managers) {
        this.managers = managers;
    }

    giveSalary() {
        if (!this.managers) {
            return;
        }

        for (const manager of this.managers) {
            this.logEmployeeInfo(manager);

            for (const employee of manager.employees) {
                this.logEmployeeInfo(employee);
            }
        }
    }

    logEmployeeInfo(employee) {
        console.log(`${employee.firstName} ${employee.secondName} отримав ${employee.CalculateSalary()} шекелей\n`);
    }
}

const SeniorDeveloper = new Developer("Дмитро", "Вікторович", 400, 6);
const MiddleDeveloper = new Developer("Артем", "Іванович", 300, 3);
const MiddleDeveloper2 = new Developer("Руслан", "Олегович", 350, 2);
const SeniorDesigner = new Designer("Ігор", "Васильович", 400, 4, 0.77);
const JuniorDesigner = new Designer("Андрій", "Олександрович", 100, 1, 0.39);

const FirstManagerTeam = [MiddleDeveloper2, SeniorDesigner,];

const FirstManager = new Manager("Герман", "Генадійович(manager1)", 900, 5, FirstManagerTeam);

const SecondManagerTeam = [SeniorDeveloper, MiddleDeveloper, JuniorDesigner,];

const SecondManager = new Manager("Олександр", "Олексійович(manager2)", 900, 5, SecondManagerTeam);

const managers = [FirstManager, SecondManager,];

const Company = new Department(managers);

Company.giveSalary();
