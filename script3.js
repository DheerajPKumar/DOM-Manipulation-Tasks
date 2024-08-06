const formDetails = [
    {
      type: "text",
      id: "full_name",
      name: "full_name",
      maxLength: "25",
      minLength: "3",
      pattern: "",
      placeholder: "Enter Your Full Name",
      required: "true",
      value: "",
      label: "Full Name: ",
    },
    {
      type: "email",
      id: "email",
      name: "email",
      maxLength: "30",
      minLength: "10",
      pattern: "",
      placeholder: "Enter Your Email Address",
      required: "true",
      value: "",
      label: "Email: ",
    },
    { type: "checkbox", id: "accept", name: "accept", required: "true", checked: "", value: "", label: "Accept Terms: " },
    {
      type: "password",
      id: "password",
      name: "password",
      maxLength: "25",
      minLength: "8",
      pattern: "",
      placeholder: "",
      required: "true",
      value: "",
      label: "Password: ",
    },
    { type: "date", id: "date", name: "dob", max: "", min: "", placeholder: "", required: "true", value: "", label: "Enter Date of Birth: " },
    { type: "number", id: "marks", name: "marks", min: "10", max: "15", placeholder: "+91-0123456789", required: "true", value: "", label: "Enter Mobile No.: " },
    { type: "radio", id: "", name: "gender", required: "true", checked: "", value: "Male", label: "Male" },
    { type: "radio", id: "", name: "gender", required: "true", checked: "", value: "Female", label: "Female" },
    {
      type: "select",
      id: "state",
      name: "state",
      required: "true",
      value: "delhi",
      label: "Enter Your City: ",
      options: [
        { label: "Select" },
        { label: "Delhi", value: "delhi" },
        { label: "Mumbai", value: "mumbai" },
        { label: "UP", value: "Up" },
      ],
    },
];

const formContainer = document.getElementsByClassName('formContainer')[0];
const generateBtn = document.getElementsByClassName('generateBtn')[0];

function createForm(formDetails) {
    const formEl = document.createElement('form');
    
    formDetails.forEach(detail => {
        if (detail.label) {
            const label = document.createElement('label');
            label.setAttribute('for', detail.id || detail.name);
            label.textContent = detail.label;
            formEl.appendChild(label);
        }
    });

    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = 'Submit';
    formEl.appendChild(submitBtn);

    formContainer.innerHTML = '';
    formContainer.appendChild(formEl);
    generateBtn.style.display = 'none';
}

generateBtn.addEventListener('click', function() {
    createForm(formDetails);
});
