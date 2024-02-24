import { AppShell, Avatar, Group ,Text,UnstyledButton,Title} from '@mantine/core';
import classes from './Header.module.css'

import { Link } from 'react-router-dom';
export function Header() {
  return (
    <AppShell header={{ height: { base: 50, sm: 50, lg: 60 } }}>
      <AppShell.Header p="1" bg="#676F9D">
        <Group>
        </Group>
        <Group justify="space-between">
        <Title pt="xs" order={4}>Rymec Society</Title>
          <Group justify="right">
          <Link to="/about"><UnstyledButton className={classes.control}>About Us</UnstyledButton></Link>
          <Link to="/login"><UnstyledButton className={classes.control}>Login</UnstyledButton></Link>
          </Group>
        </Group>
      </AppShell.Header>
    </AppShell>
  );
}
