class  Employee
{
    constructor(name,designation, year_of_experiance){
        this.name = name;
        this.designation = designation;
        this.year_of_experiance = year_of_experiance;
    }
}
function displayEmployee(name,designation,year_of_experiance){
    var employee = createEmployee(name,designation,year_of_experiance);
    if(ValidateObject(employee)){
        var dt = new Date();
        var yoj = (dt.getFullYear()-(employee.year_of_experiance+1));
        var op = employee.name +" is serving the position of "+employee.designation+" since "+yoj;
        return op
    }
}
function createEmployee(name,designation,year_of_experiance){
        var emp = new Employee(name, designation, year_of_experiance);
        return emp;

}
function ValidateObject(employee){
    if(employee instanceof Employee) {
        return true;
    }
    else {
        return false;
    }
}
console.log(displayEmployee("jashu","manager",5));