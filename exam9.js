function Student(id,firstName,lastName,age,email,action,major){
  this.id =id;
  this.firstName=firstName;
  this.lastName=lastName;
  this.age=age;
  this.email = email || `${firstName.toLowerCase()}@example.com`;
  this.action=action;
  this.major=major;

 
   this.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
   };
}


const students=[
  new Student  (1,'Alla','Gevorgyan',19),
  new Student  (2,'Garik','Karapetyan',20),
  new Student  (3,'Susanna','Grigoryan',18),
  new Student  (4,'Marieta','Hambarcumyan',21),
  new Student  (5,'Armen','Movsisyan',22),
  new Student  (6,'Alen','Martirosyan',23),
  new Student  (7,'Hayk','Gabrielyan',21),
  new Student  (8,'Anna','Martirosyan',20),
  new Student  (9,'Garik','Beglaryan',18),
  new Student  (10,'Mrgarita','Vardapetyan',19)
    
];


function displayStudents(){
    const tbody =document.getElementById('studentsBody');
    tbody.innerHTML = ' ';

    students.forEach(student=>{
        const row =tbody.insertRow();
        row.innerHTML = `
                <td >${student.id}</td>
                <td >${student.firstName}</td>
                <td >${student.lastName}</td>
                <td> ${student.age}</td>
                <td >${student.email}</td>
                <button  class="button" onclick="openEditModal(${student.id})">
                    Edit
                </button>
                <button  class="button onclick="openDeleteModal(${student.id})">
                 Delete
                </button>
            </td>`;
    });
   
}
displayStudents();



function openEditModal(studentId) {
    const student = students.find(s => s.id === studentId);
    
    if (student) {
        document.getElementById("editId").value = student.id;
        document.getElementById("editFirstName").value = student.firstName;
        document.getElementById("editLastName").value = student.lastName;
        document.getElementById("editCourse").value = student.course;
        document.getElementById("editStudentIndex").value = studentId;

        document.getElementById("editModal").style.display = 'block';
    }
}

function closeEditModal() {
    document.getElementById("editModal").style.display = 'none';
}


function updateStudent() {
    const originalId = parseInt(document.getElementById("editStudentIndex").value);
   
    const newId = parseInt(document.getElementById("editId").value);
    const newFName = document.getElementById("editFirstName").value;
    const newLName = document.getElementById("editLastName").value;
    const newCourse = parseInt(document.getElementById("editCourse").value);

    
    const index = students.findIndex(s => s.id === originalId);

    if (index !== -1 && newFName && newLName && newCourse) {
        
        students[index].id = newId;
        students[index].firstName = newFName;
        students[index].lastName = newLName;
        students[index].course = newCourse;

       
        displayStudents();
        
        
        closeEditModal();
        
        alert("Տվյալները հաջողությամբ թարմացվեցին:");
    } else {
        alert("Խնդրում ենք լրացնել բոլոր դաշտերը ճիշտ:");
    }
}







function openDeleteModal(id) {
    document.getElementById("studentIdToDelete").value = id;
    document.getElementById("deleteModal").style.display = 'block';
}

function closeDeleteModal() {
    document.getElementById("deleteModal").style.display = 'none';
}
function confirmDelete() {
    
    const idToDelete = parseInt(document.getElementById("studentIdToDelete").value);
    const index = students.findIndex(student => student.id === idToDelete);
    
    if (index !== -1) {
        students.splice(index, 1); 
        
        displayStudents();
        closeDeleteModal(); 
    }
}




const modal = document.getElementById("modal");
function add() {
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
    clearInputs();
}
function clearInputs() {
    document.getElementById("userIdadd").value = "";
    document.getElementById("firstNameadd").value = "";
    document.getElementById("lastNameadd").value = "";
    document.getElementById("courseadd").value = "";
}


function saveData() {
    const id = document.getElementById("userIdadd").value;
    const firstName = document.getElementById("firstNameadd").value;
    const lastName = document.getElementById("lastNameadd").value;
    const course = document.getElementById("courseadd").value;

  
    if (id && firstName && lastName && course) {
       
        const newStudent = new Student(parseInt(id), firstName, lastName, parseInt(course), "General");
        
        
        students.push(newStudent);
        
        displayStudents();
        
        closeModal();
        
        alert("Student added successfully!");
    } else {
        alert("Please fill all fields!");
    }
}