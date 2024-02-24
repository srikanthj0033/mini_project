import { AppShell, Avatar, Group ,Text,UnstyledButton,Title} from '@mantine/core';
import classes from '../header/Header.module.css';
// Height is an object with breakpoints:
// - height is 48 when viewport width is < theme.breakpoints.sm
// - height is 60 when viewport width is >= theme.breakpoints.sm and < theme.breakpoints.lg
// - height is 76 when viewport width is >= theme.breakpoints.lg
import { Link } from 'react-router-dom';
export function MobNav() {
  return (
    <AppShell header={{ height: { base: 50, sm: 50, lg: 60 } }}>
      <AppShell.Navbar py="md" px={4} bg="#676F9D" c="white">
       <Link to="#"> <UnstyledButton className={classes.control}>Home</UnstyledButton></Link>
       <Link to="#"> <UnstyledButton className={classes.control}>About Us</UnstyledButton></Link>
       <Link to="#"> <UnstyledButton className={classes.control}>Students</UnstyledButton></Link>
       <Link to="#"> <UnstyledButton className={classes.control}>Faculty</UnstyledButton></Link>
       <Link to="#"> <UnstyledButton className={classes.control}>HR</UnstyledButton></Link>
      </AppShell.Navbar>
    </AppShell>
  );
}
