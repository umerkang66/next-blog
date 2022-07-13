interface ContactData {
  email: string;
  name: string;
  message: string;
}

export async function sendContactData({ email, name, message }: ContactData) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({ email, name, message }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // we don't need any data, it is just for error
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
}
