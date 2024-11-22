class Student{
  constructor(firstName, LastName, idNumber, ClassRoom){
    this.firstName = firstName;
    this.LastName = LastName;
    this.idNumber = idNumber;
    this.ClassRoom = ClassRoom;
  }

}

class Commonds{}
const handleFormSubmit = (e) =>{
    e.preventDefault()
    const firstName =  document.getElementById("firstName").value
    const lastName =  document.getElementById("Lastname").value
    const idNumber =  document.getElementById("idNumber").value
    const ClassRoom =  document.getElementById("ClassRoom").value

    console.log(firstName,lastName,idNumber,ClassRoom);
    
}

// event listeners
document.getElementById("book-form").addEventListener('submit',handleFormSubmit)
