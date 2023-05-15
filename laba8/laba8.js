
//Developer, Designer & Manager.
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
        } else if (this.experienceInYears >= 5) {
            countedSalary = this.baseSalary * 1.2 + 500;
        }

        return countedSalary;
    }
}
class Developer extends Employee {
    constructor(firstName, secondName, baseSalary, experienceInYears) {
        super(firstName, secondName, baseSalary, experienceInYears);
    }
}
class Designer extends Employee {
    constructor(firstName, secondName, baseSalary, experienceInYears, efficiencyСoefficient) {
        super(firstName, secondName, baseSalary, experienceInYears);

        if (efficiencyСoefficient < 0) {
            this.efficiencyСoefficient = 0;
        } else if (efficiencyСoefficient > 1) {
            this.efficiencyСoefficient = 1;
        } else {
            this.efficiencyСoefficient = efficiencyСoefficient;
        }
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

        let counter = 0;
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].constructor.name === "Developer") {
                counter++;
            }
        }
        let coefficient = counter / this.employees.length;

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
        if (this.managers === null || this.managers === undefined) {
            return;
        }

        for (let i = 0; i < managers.length; i++) {
            this.logEmployeeInfo(managers[i]);
            for (let j = 0; j < managers[i].employees.length; j++) {
                this.logEmployeeInfo(managers[i].employees[j]);
            }
        }
    }
    logEmployeeInfo(employee) {
        console.log(employee.firstName + " " + employee.secondName + " отримав " + employee.CalculateSalary() +
            " лимонів з АТв у якості заробітньої плати\n");
    }
}

let SeniorPomidorDeveloper = new Developer("Хацкер", "Хацкеровий", 500, 6);
let MiddleDeveloper = new Developer("Рустем", "Жукович", 300, 3);
let SeniorDesigner = new Designer("Джуді", "Кавуновна", 400, 4, 0.78);
let JuniorDesigner = new Designer("Вольф", "Шукузе", 100, 1, 0.86);

let topManagerTeam = [];
topManagerTeam.push(SeniorPomidorDeveloper);
topManagerTeam.push(MiddleDeveloper);
topManagerTeam.push(SeniorDesigner);

let TopManager = new Manager("Йохан", "Райнович", 900, 5, topManagerTeam);

let justManagerTeam = [];
justManagerTeam.push(JuniorDesigner);

let JustManager = new Manager("Мія", "Жакевич", 400, 3, justManagerTeam);

let managers = [];
managers.push(TopManager);
managers.push(JustManager);

let Apple = new Department(managers);

Apple.giveSalary();

