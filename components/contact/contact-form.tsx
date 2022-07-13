import classes from '../../styles/components/contact/contact-form.module.css';
import { FC, FormEvent, ReactElement, useEffect, useState } from 'react';
import Notification from '../ui/notification';
import { sendContactData } from '../../lib/contact-utils';

type RequestStatus = 'pending' | 'success' | 'error' | null;

const ContactForm: FC = (): ReactElement => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState<RequestStatus>(null);
  const [requestError, setRequestError] = useState('');

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timerId = setTimeout(() => {
        setRequestStatus(null);
        setRequestError('');
      }, 3000);

      return () => clearTimeout(timerId);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRequestStatus('pending');

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus('success');
      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');
    } catch (err: any) {
      setRequestError(err.message);
      setRequestStatus('error');
    }
  };

  let notificationData: {
    status: string;
    title: string;
    message: string;
  } | null = null;

  if (requestStatus === 'pending') {
    notificationData = {
      status: 'pending',
      title: 'Sending message',
      message: 'Your message is own its way',
    };
  }
  if (requestStatus === 'success') {
    notificationData = {
      status: 'success',
      title: 'Success',
      message: 'Message sent successfully',
    };
  }
  if (requestStatus === 'error') {
    notificationData = {
      status: 'error',
      title: 'Error',
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can i help you</h1>;
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={e => setEnteredEmail(e.target.value)}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={e => setEnteredName(e.target.value)}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            value={enteredMessage}
            onChange={e => setEnteredMessage(e.target.value)}
          />
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notificationData && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
