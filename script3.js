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
    { type: "radio", id: "gender1", name: "gender", required: "true", checked: "", value: "Male", label: "Male" },
    { type: "radio", id: "gender2", name: "gender", required: "true", checked: "", value: "Female", label: "Female" },
    {
      type: "select",
      id: "state",
      name: "state",
      required: "true",
      value: "delhi",
      label: "Enter Your City: ",
      options: [
        { label: "Select City" },
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
            const labelEl = document.createElement('label');
            labelEl.setAttribute('for', detail.id || detail.name);
            labelEl.textContent = detail.label;
            formEl.appendChild(labelEl);
        }

        let inputEl;
        inputEl = document.createElement('input');
        inputEl.setAttribute('type', detail.type);
        inputEl.setAttribute('id', detail.id);
        inputEl.setAttribute('name', detail.name);
        if(detail.maxLength){
            inputEl.setAttribute('maxlength', detail.maxLength);
        }
        if(detail.minLength){
            inputEl.setAttribute('minlength', detail.minLength);
        }
        if(detail.pattern){
            inputEl.setAttribute('pattern', detail.pattern);
        }
        if(detail.placeholder){
            inputEl.setAttribute('placeholder', detail.placeholder);
        }
        if(detail.required === "true"){
            inputEl.setAttribute('required', '');
        }
        inputEl.setAttribute('value', detail.value);

        formEl.appendChild(inputEl);
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
