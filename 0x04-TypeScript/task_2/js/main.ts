interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting a director tasks'
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200));
//Teacher
console.log(createEmployee(1000));
//Director
console.log(createEmployee('$500'));
//Director

//function specific to employee
function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
    return employee instanceof Director;
}

function executeWork(employee: DirectorInterface | TeacherInterface): any {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));


//string literal types
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
}

console.log(teachClass("Math"));
console.log(teachClass("History"));