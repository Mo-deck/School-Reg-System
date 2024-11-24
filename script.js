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

    deleteStudent(element){
        if(element.className === 'remove-student'){
            element.parentElement.parentElement.remove()
        }
    }
}
const handleFormSubmit = (e) =>
    e.preventDefault()
    const firstName = document.querySelector('#firstName').value
    const lastName = document.querySelector('#Lastname').value
    const idNumber = document.querySelector('#idNumber').value
    const ClassRoom = document.querySelector('#ClassRoom').value

    const student = new Student(firstName,lastName,idNumber,ClassRoom) 

    // register new Student
    const command = new Commond()
    if(firstName === "" || lastName === "" || idNumber === ""){
        command.displayAlert("Please fill out all the input", "alert-warning")
    }else{
        command.registerNewStudent(student);
        command.displayAlert("New Student Added to the list", "alert-success")
        command.clearAllInputs();
    }

// event listeners
document.getElementById("student-form").addEventListener('submit',handleFormSubmit)

document.getElementById("all-student").addEventListener('click', function(e){
    const command = new Commond()
    command.deleteStudent(e.target)

    command.displayAlert('Student deleted Successfully', "alert-success")
    e.preventDefault()
})
