import {Component} from "@angular/core";
import {Employee} from "./employee";

@Component({
   selector:"employee",
   templateUrl:"./employee.component.html"
})
export class EmployeeComponent{
    public employee:Employee
    public employees:Array<Employee>

    constructor(){
        this.employees=[
            new Employee(1,"Julio Cesar","juliocesar@gmail.com","11/07/1990","Lima","999999999",5000,"Soluciones Tecnológicas",""),
            new Employee(2,"Cinthya Alejandra","cinthya@gmail.com","20/08/1990","Lima","999999999",5000,"Soluciones Tecnológicas",""),
            new Employee(3,"Flavia Ramos","flavia@gmail.com","4/07/1992","Lima","999999999",5000,"Soluciones Tecnológicas",""),
            new Employee(4,"Juan Ramirez","juanramirez@gmail.com","9/07/1995","Lima","999999999",5000,"Soluciones Tecnológicas",""),
            new Employee(5,"Simón Bolivar","simonvolivar@gmail.com","1/07/1999","Lima","999999999",5000,"Soluciones Tecnológicas","")
        ]
    }
}
