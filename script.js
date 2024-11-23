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
}
const handleFormSubmit = (e) =>{
    e.preventDefault()
    const firstName =  document.getElementById("firstName").value
    const lastName =  document.getElementById("Lastname").value
    const idNumber =  document.getElementById("idNumber").value
    const ClassRoom =  document.getElementById("ClassRoom").value

    const student = new Student(firstName,lastName,idNumber,ClassRoom) 

    // register new Student
    const command = new Commond()
    command.registerNewStudent(student);
    clearAllInputs();
}
// event listeners
document.getElementById("book-form").addEventListener('submit',handleFormSubmit)
