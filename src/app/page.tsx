import NavItem from '@/components/shared/NavItem';
import Theme from '@/components/shared/Theme';
import { Dashboard } from '@components/page';

export default function Landing() {
  return (
    <Dashboard
      navItems={
        <>
          <NavItem
            name='Landing'
            href='/'
            active
          />
          <NavItem
            name='Work'
            href='/'
          />
          <NavItem
            name='Pricing'
            href='/'
          />
          <NavItem
            name='Account'
            href='/'
            button
          />
        </>
      }
      modalItems={
        <>
          <Theme />
        </>
      }
    />
  );
}
