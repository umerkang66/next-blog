import ReactDOM from 'react-dom';
import { FC, ReactElement } from 'react';
import classes from '../../styles/components/ui/notification.module.css';

interface NotificationProps {
  title: string;
  message: string;
  status: string;
}

const Notification: FC<NotificationProps> = (props): ReactElement => {
  const { title, message, status } = props;
  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }
  if (status === 'error') {
    statusClasses = classes.error;
  }
  const cssClasses = `${classes.notification} ${statusClasses}`;

  // This is where this component will be portaled in the dom tree, we have provided this notificationsId in document.js file
  // From wherever we use it (in the complex react nested components, this notification will be in the notificationsId)
  const notificationId = document.getElementById(
    'notifications'
  ) as HTMLElement;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    notificationId
  );
};

export default Notification;
