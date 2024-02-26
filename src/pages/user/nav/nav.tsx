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
  IconTruckDelivery
} from '@tabler/icons-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import classes from './nav.module.css';

const data = [
  { link: '/userDash', label: 'Order', icon: IconTruckDelivery },

];

export function UserNav() {
  const [active, setActive] = useState('Dashboard');

  const links = data.map((item) => (
    <Link
      to={item.link}
      className={classes.link}
      data-active={item.label === active || undefined}
      key={item.label}
      onClick={() => setActive(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5}  />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
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
