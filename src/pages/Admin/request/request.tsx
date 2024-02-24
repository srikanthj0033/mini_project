import { AppShell, Burger,Group,  Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from '../dashboard/header/header';
import { Nav } from '../../../components/nav/nav';
import { Table } from '@mantine/core';


const elements = [
  { product:'hjhjc', price: 'jhuhhwc' ,specification: 'hhhgw'},
  { product:'hjhjc', price:'uhuhuw' ,specification: 'uhyuhue' },
  { product:'hjhjc', price: 'huhwuch' ,specification: 'gyggw' },
  {product:'hjhjc', price: 'uhuhwf' ,specification: 'hbhec' },
  { product:'hjhjc',price: 'bhbfhe' ,specification: 'nnbejn' },
  { product:'hjhjc', price: 'bbej' ,specification: 'bjbjbce' },
];

export function Request() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [opened, { toggle }] = useDisclosure();
  const rows = elements.map((element) => (
    <Table.Tr style={{ backgroundColor: '#f2f2f2', color: 'black' }} key={element.product}>
        <Table.Td>{element.product}</Table.Td>
      <Table.Td>{element.price}</Table.Td>
      <Table.Td>{element.specification}</Table.Td>
      <Table.Td>{element.specification}</Table.Td>
      <Table.Td>{element.specification}</Table.Td>
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
      
    <Table >
      <Table.Thead style={{ color: 'Black', background:'white' }}>
        <Table.Tr>
        <Table.Th>Student Name</Table.Th>
          <Table.Th>Trans Id</Table.Th>
          <Table.Th>Product</Table.Th>
          <Table.Th>Quantity</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
      </AppShell.Main>
    </AppShell>
  );
}