export function formatText(org: string) {
  return org.slice(0, 10).split('-');
}

export function formatName(name: string) {
  return name.replace(/[._\d]/g, ' ').trim();
}

export function formatEmail(email: string) {
  return email.replace(/@|_|(?=\d)|(?=[A-Z])/g, ' ');
}

export function formatPhoneNumber(phone: string) {
  return phone
    .replace(/[ \-x().]/g, '')
    .substring(phone.length <= 10 ? 7 : 8, -1)
    .padStart(11, '070');
}

export function formatDate(date: string) {
  return new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function formatAmount() {}

// length<=10?4:5
