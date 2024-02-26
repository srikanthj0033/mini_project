import React from 'react';
import {
  Grid, Tabs, TextInput, PasswordInput, Anchor, Checkbox, Button, Group, Avatar, Divider, Fieldset, Text
} from '@mantine/core';
import { IconBrandGoogleFilled, IconBrandWindows, IconBrandFacebookFilled } from '@tabler/icons-react';
import classes from './login.module.css';
import { Link } from 'react-router-dom';

const AdminTab = () => (
  <Fieldset variant="unstyled">
    <Text size='lg' ta={"center"} >Welcome Back Admin</Text>
    <TextInput placeholder="email/phone num" />
    <PasswordInput placeholder="Password" mt={"md"} />
    <Anchor href="#" underline="hover">
      <Text ta={"right"}>forgot password?</Text>
    </Anchor>
    <Checkbox defaultChecked label="Remember me" size="xs" />
   <Link to="/">
    <Button fullWidth mt={"md"} color="black">Login</Button></Link>
    <Group style={{ alignContent: "center", justifyContent: "center", marginTop: "10px" ,marginRight:"20px", padding:""}}>
    <Link to="/landing">
    <Button style={{alignContent: "center", justifyContent: "center", marginTop: "10px" ,marginRight:"20px", marginLeft:"40px"}} color="black">back</Button>
    </Link>
    </Group>
  </Fieldset>
);

const UserTab = () => (
    <Fieldset variant="unstyled">
    <Text size='lg' ta={"center"} >Welcome Back User</Text>
    <TextInput placeholder="email/phone num" />
    <PasswordInput placeholder="Password" mt={"md"} />
    <Anchor href="#" underline="hover">
      <Text ta={"right"}>forgot password?</Text>
    </Anchor>
    <Checkbox defaultChecked label="Remember me" size="xs" />
   <Link to="/">
    <Button fullWidth mt={"md"} color="black">Login</Button></Link>
    <Group style={{ alignContent: "center", justifyContent: "center", marginTop: "10px" ,marginRight:"20px"}}>
    <Link to="/landing">
    <Button style={{alignContent: "center", justifyContent: "center", marginTop: "10px" ,marginRight:"20px", marginLeft:"40px"}} color="black">back</Button>
    </Link>
    </Group>
  </Fieldset>
);

export function Login() {
  return (
    
    <Grid className={classes.grid}>

      <Grid.Col span={6} offset={6} className={classes.col} >

        <Tabs  variant="outline" radius="lg" defaultValue="gallery" className={classes.tabs} >
          <Tabs.List className={classes.tabslist}>
            <Tabs.Tab value="gallery" className={classes.tab}>Admin</Tabs.Tab>
            <Tabs.Tab value="messages" className={classes.tab}>User</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" className={classes.panel}>
            <AdminTab />
          </Tabs.Panel>

          <Tabs.Panel value="messages" className={classes.panel}>
            <UserTab />
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
     
    </Grid>
    
  );
}
