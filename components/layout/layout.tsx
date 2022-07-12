import { FC, Fragment, ReactElement, ReactNode } from 'react';
import MainNavigation from './main-navigation';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = (props): ReactElement => {
  return (
    <Fragment>
      <MainNavigation />
      {/* props.children is every page component that will be render through this*/}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
