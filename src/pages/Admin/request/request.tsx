import { AppShell, Burger,Group,  Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from '../dashboard/header/header';
import { Nav } from '../../../components/nav/nav';
import { Table } from '@mantine/core';
import { useEffect, useState } from 'react';


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

  const [requestData, setrRequestData]= useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/studentrequ/ ');
        const data = await response.json();
        setrRequestData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const rows = requestData.map((element) => (
    <Table.Tr style={{ backgroundColor: '#f2f2f2', color: 'black' }} key={element.id}>
        <Table.Td>{element.stdname}</Table.Td>
      <Table.Td>{element.usn}</Table.Td>
      <Table.Td>{element.branch}</Table.Td>
      <Table.Td>{element.phone_no}</Table.Td>
      <Table.Td>{element.quantity}</Table.Td>
      <Table.Td>{element.product_id}</Table.Td>  
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
          <Table.Th>USN</Table.Th>
          <Table.Th>Branch</Table.Th>
          <Table.Th>Phone No</Table.Th>
          <Table.Th>Qunatity</Table.Th>
          <Table.Th>Product</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
      </AppShell.Main>
    </AppShell>
  );
}