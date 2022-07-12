import classes from '../../styles/components/layout/main-navigation.module.css';
import Link from 'next/link';
import { FC, ReactElement } from 'react';
import Logo from './logo';

const MainNavigation: FC = (): ReactElement => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
