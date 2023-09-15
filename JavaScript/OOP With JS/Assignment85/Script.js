const student = {
  // data property
  firstName: "Monica",
  // accessor property(getter)
  get getName() {
    return this.firstName;
  },
  set changeName(newName) {
    this.firstName = newName;
  },
};
console.log(student);

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

//setting new value
student.changeName = "Saraha";
console.log(student.firstName); // Saraha
