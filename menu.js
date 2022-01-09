class Associate {    
    constructor(name, position){
        this.name = name;
        this.position = position;
    }

    describe() {
        return `${this.name} works ${this.position}.`;
    }
}

class Department {  ///Department
    constructor(name) {
        this.name = name;
        this.associates = [];
    }

    addPlayer(associate) {
        if (associate instanceof Associate) {
            this.associates.push(associate);
        
        } else {
            throw new Error(`You can only add an instance of Associate. Argument is not an associate: ${associate}`);
        }
    }
    describe() {
        return `${this.name} has ${this.associates.length} this.associates.`;
    }
}

class Menu {
    constructor() {
        this.departments = [];
        this.selectedDepartment = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection){
                case `1`:
                this.createDepartment();
                    break;
                case `2`:
                this.viewDepartment();
                    break;
                case `3`:
                this.deleteDepartment();
                    break;

                case `4`:
                this.displayDepartment();
                break;
                defeault: 
                selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
        } 

        showMainMenuOptions(){
            return prompt(`
            0) exit
            1) create department
            2) view department
            3) delete department
            4) display all departments
            `);
        }

        showTeamMenuOptions(departmentInfo) {
            return prompt(`
            0) back
            1) create associate
            2) delete associate
            _ _ _ _ _ _ _ _ _

            ${departmentInfo}

            ` );
        }

        displayDepartments() {
            let departmentString = '';
            for (let i = 0; i < this.departments.length; i++) {
                departmentString += i + ') ' + this.departments[i].name + '\n';
            }
            alert(departmentString);
     
        }
        createDepartment() {
        let name = prompt('Enter name for new department:');
        this.departments.push(new Department(name));
}
viewDepartment() {
    let index = prompt('Enter the index of the department you wish to view');
    if (index > -1 && index < this.departments.length){
        this.selectedDepartment = this.departments[index];
        let description = 'Department Name: ' + this.selectedDepartment.name + '\n';
        

        for (let i = 0; i < this.selectedDepartment.players.length; i++){
        description += i + ') ' + this.selectedDepartment.players[i].name + ' - ' + this.selectedDepartment.associate[i].position + '\n';

    }
    let selection = this.showTeamMenuOptions(description);
    switch (selection) {
        case '1':
            this.createAssociate();
            break;
            case '2':
                this.deleteAssociate();
    }
}

}

deleteDepartment(){
    let index = prompt('Enter the index of the department you wish to delete');
    if (index > -1 && index < this.departments.length){
        this.departments.splice(index,1);
    }
}

createAssociate() {

    let name = prompt('Enter name for new associate');
    let position = prompt('Enter position for associate player:');
    this.selectedDepartment.associates.push(new Associate(name, position));



}

deleteAssociate() {
    let index = prompt('Enter the index of the associate you wish to delete:');
    if (index > -1 && index < this.selectedAssociate.associates.length){
        this.selectedDepartment.associates.splice(index, 1);
    }
}
}


let menu = new Menu();
menu.start();