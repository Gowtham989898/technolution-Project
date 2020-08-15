import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admissionform',
  templateUrl: './admissionform.component.html',
  styleUrls: ['./admissionform.component.css']
})
export class AdmissionformComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')]],
        lastName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]],
        section: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]+$")]],
        yop: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1990),Validators.max(2020)]],
        percentage: ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.min(0), Validators.max(100)]],
    });
}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}
