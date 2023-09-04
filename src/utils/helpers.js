// This function validates an email address using a regular expression.
export function validateEmail(email) {
  // Regular expression for validating email addresses
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Convert the email to lowercase and test it against the regular expression
  return re.test(String(email).toLowerCase());
}
