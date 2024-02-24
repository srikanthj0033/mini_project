import { useState } from 'react';
import { Group, Code } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import classes from './nav.module.css';

const data = [
  { link: '/', label: 'Dashboard', icon: IconBellRinging },
  { link: '/products', label: 'Products', icon: IconReceipt2 },
  { link: '/inandout', label: 'In and Out', icon: IconFingerprint },
  { link: '/request', label: 'Requested', icon: IconReceipt2 },
];

export function Nav() {
  const [active, setActive] = useState('Dashboard');

  const links = data.map((item) => (
    <Link
      to={item.link}
      className={classes.link}
      data-active={item.label === active || undefined}
      key={item.label}
      onClick={() => setActive(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          {/* Add any header content here */}
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <Link to="/profile" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Profile</span>
        </Link>

        <Link to="/logout" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <Link to="/login"><span>Logout</span></Link>
        </Link>
      </div>
    </nav>
  );
}
