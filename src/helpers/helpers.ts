export function formatPhoneNumber(phoneNumber: string): string | null {
  if (!phoneNumber) return null;
  return `${phoneNumber.substring(0, 3)} ${phoneNumber.substring(3)}`;
}

export function capitalize(text: string): string | null {
  if (!text) return null;
  return text.charAt(0).toUpperCase() + text.slice(1);
}
