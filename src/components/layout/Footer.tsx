import { FooterStyles } from '@styles/layout';

export default function Footer() {
  return (
    <footer className={FooterStyles.Footer}>
      <p>&copy; {new Date().getFullYear()} Claw. All rights reserved.</p>
    </footer>
  );
}
