class Student{
  constructor(firstName, LastName, idNumber, ClassRoom){
    this.firstName = firstName;
    this.LastName = LastName;
    this.idNumber = idNumber;
    this.ClassRoom = ClassRoom;
  }

}

class Commond{
    registerNewStudent(student){
        const allStudent = document.getElementById("all-students")
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.idNumber}</td>
        <td><${student.ClassRoom}</td>
        <td><a href= "#" class="remove-student>❌</td>
        `;
        allStudent.appendChild(row);
    }
    clearAllInputs(){
        document.getElementById('firstName').value = "";
        document.getElementById('lastName').value = "";
        document.getElementById('idNumber').value = "";
        document.getElementById('ClassRoom').value = "";
    }

    displayAlert(message, className){
        const div = document.createElement("div")
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container")
        const form = document.getElementById("student-form")

        container.insertBefore(div, form)
        setTimeout(() =>{
            document.querySelector('.alert').remove()
        }, 2000);
    }
}
const handleFormSubmit = (e) =>
    e.preventDefault()
    const firstName =  document.getElementById("firstName").value
    const lastName =  document.getElementById("Lastname").value
    const idNumber =  document.getElementById("idNumber").value
    const ClassRoom =  document.getElementById("ClassRoom").value

    const student = new Student(firstName,lastName,idNumber,ClassRoom) 

    // register new Student
    const command = new Commond()
    if(firstName === "" || lastName === "" || idNumber === ""){
        command.displayAlert("Please fill out all the input", "alert-warning")
    }else{
        command.registerNewStudent(student);
        command.clearAllInputs();
    }

// event listeners
document.getElementById("student-form").addEventListener('submit',handleFormSubmit)
