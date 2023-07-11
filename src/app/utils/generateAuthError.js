export function generateAuthError(message) {
  switch (message) {
    case "INVALID_PASSWORD":
      return "Email или пароль введены некорректно";
    case "EMAIL_EXISTS":
      return "Пользователь с таким Email уже существует";
    case "EMAIL_NOT_FOUND":
      return "Пользователь с таким Email не существует";
    default:
      return "Слишком много попыток входа. Попробуйте позже";
  }
}
