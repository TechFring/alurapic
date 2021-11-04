import { FormGroup } from "@angular/forms";

export function userNamePasswordValidator(formGroup: FormGroup): Object | null {
  const userName = formGroup.get("userName").value;
  const password =  formGroup.get("password").value;

  if (userName.trim() + password.trim()) {
    if (userName == password ) {
      return { usernamepassword: true };
    }
  }

  return null;
}
