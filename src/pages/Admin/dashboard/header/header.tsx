import {

  Box,
  Center,
  Text
 
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';

import classes from './header.module.css';



export function Header() {
  return (
    <Text className={classes.name}>
      <h2><b>Society Management System</b></h2>
    </Text>
  );
}