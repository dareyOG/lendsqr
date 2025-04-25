export const randomAlphaNumeric = (length: number) => {
  let s = '';
  Array.from({ length }).some(() => {
    s += Math.random().toString(36).slice(2);
    return s.length >= length;
  });
  return s.slice(0, length);
};

export function getStatus() {
  let status: unknown;
  const statusArr = ['active', 'inactive', 'pending', 'blacklisted'];

  const statusIndex = Math.floor(Math.random() * statusArr.length);

  statusArr.forEach((stat, index) => {
    if (statusIndex === index) status = stat;
  });

  return status;
}

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
    ?.replace(/[ \-x().]/g, '')
    ?.substring(phone.length <= 10 ? 7 : 8, -1)
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

export function formatNumber(value: string) {
  return new Intl.NumberFormat().format(+value);
}
