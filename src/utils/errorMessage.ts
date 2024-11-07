export function getErrorMessage(fieldName: string, errorType?: string) {
  switch (errorType) {
    case "required":
      return `${fieldName} is required`;
    case "pattern":
      return `Invalid format for ${fieldName}`;
    case "minLength":
      return `${fieldName} is too short`;
    case "maxLength":
      return `${fieldName} is too long`;
    case "min":
      return `${fieldName} is too short`;
    case "max":
      return `${fieldName} is too long`;
    default:
      return "";
  }
}
