import { AppShell, Burger,Group,  Skeleton, TextInput, Title, Card, Button, Grid, Center, NativeSelect } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from '../dashboard/header/header';

import classes from './products.module.css'
import { Nav } from '../../../components/nav/nav';
import { Breadcrumbs, Anchor, Table } from '@mantine/core';


const elements = [
  { product:'', price: '' ,specification: ''},
  {  price:'' ,specification: '' },
  {  price: '' ,specification: '' },
  { price: '' ,specification: '' },
  { price: '' ,specification: '' },
  {  price: '' ,specification: '' },
];

export function Products() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [opened, { toggle }] = useDisclosure();
  const rows = elements.map((element) => (
    <Table.Tr style={{ backgroundColor: '#f2f2f2', color: 'black' }} key={element.product}>
        <Table.Td>{element.product}</Table.Td>
      <Table.Td>{element.price}</Table.Td>
      <Table.Td>{element.specification}</Table.Td>
    </Table.Tr>
  ));
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
      <Header />
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
        
      </AppShell.Header>
      <AppShell.Navbar style={{ marginTop: '20px' }}>
      <Nav />
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
          
      </AppShell.Navbar>
      <AppShell.Main  style={{ backgroundColor: "#f2f2f2"}}>
      <Grid p={20}>
      <Grid.Col span={4}>
      <TextInput label="Product Name" placeholder="enter product name" styles={{
        label: {
          color: 'black',
        },
        input: {
          background: 'white',
          border: 'none',
          color: 'black',
          height: '40px'
         },
      }}/>
      </Grid.Col>
      <Grid.Col span={4}>
      <TextInput label="Price" placeholder="enter price" styles={{
        label: {
          color: 'black',
        },
        input: {
          background: 'white',
          border: 'none',
          color: 'black',
          height: '40px'
         },
      }}/>
      </Grid.Col>
      <Grid.Col span={4}>
      <TextInput label="Specification" placeholder="enter specification" styles={{
        label: {
          color: 'black',
        },
        input: {
          background: 'white',
          border: 'none',
          color: 'black',
          height: '40px'
         },
      }}/>
      </Grid.Col>
    </Grid>
    <Button variant="filled"  ml={20} mt={10} className={classes.save} >Save</Button>
    <Table >
      <Table.Thead style={{ color: 'Black', background:'white' }}>
        <Table.Tr>
        <Table.Th>Product Name</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Specification</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
      </AppShell.Main>
    </AppShell>
  );
}