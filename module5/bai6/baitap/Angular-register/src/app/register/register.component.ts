import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return v.password === v.cPassword ? null : { passwordnotmatch: true };
}

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  rfForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.rfForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      // password: ['',[Validators.required], Validators.minLength(6) ],
      // confirmPassword:['',[Validators.required,Validators.minLength(6)]],
      country: ["", [Validators.required]],
      age: ["", [Validators.required], Validators.min(18)],
      gender: ["", [Validators.required]],
      phone: [
        "",
        [Validators.required],
        Validators.pattern("^\\+84\\d{9,10}$"),
      ],
      pwGroup: this._formBuilder.group(
        {
          password: ["", [Validators.required, Validators.minLength(6)]],
          cPassword: ["", [Validators.required]],
        },
        {
          validator: comparePassword,
        }
      ),
    });
  }

  onSubmit() {}
}
