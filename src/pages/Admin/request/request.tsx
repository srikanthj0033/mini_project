import { AppShell, Burger, Button, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from '../dashboard/header/header';
import { Nav } from '../../../components/nav/nav';
import { Table } from '@mantine/core';
import { useEffect, useState } from 'react';
import { IconTrash } from '@tabler/icons-react';

export function Request() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [opened, { toggle }] = useDisclosure();

  const [requestData, setRequestData] = useState([]);
  const [products, setProducts] = useState([]); // Add state for products

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/product/');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching Products:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/student-request/');
      const data = await response.json();
      setRequestData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchProducts(); // Fetch products along with student requests
  }, []);

  const handleDeleteRequest = async (id) => {

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/student-request/${id}/`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('IaMarks deleted successfully');
        fetchData(); // Fetch updated data after deleting a IaMarks
      } else {
        console.error('Failed to delete IaMarks:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
      }
    }


    // ... (your existing delete logic)
  };

  const rows = requestData.map((element) => {
    // Find the product name corresponding to the product ID
    const productName =
      products.find((product) => product.product_id === element.product_id)?.product_name || '';

    return (
      <Table.Tr style={{ backgroundColor: '#f2f2f2', color: 'black' }} key={element.id}>
        <Table.Td>{element.stdname}</Table.Td>
        <Table.Td>{element.usn}</Table.Td>
        <Table.Td>{element.branch}</Table.Td>
        <Table.Td>{element.phone_no}</Table.Td>
        <Table.Td>{element.quantity}</Table.Td>
        <Table.Td>{productName}</Table.Td>
        <Table.Td>
          <Button
            bg="transparent"
            c="black"
            size="xs"
            onClick={() => handleDeleteRequest(element.id)}
          >
            <IconTrash />
          </Button>
        </Table.Td>
      </Table.Tr>
    );
  });

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
      <AppShell.Main style={{ backgroundColor: '#f2f2f2' }}>
        <Table>
          <Table.Thead style={{ color: 'Black', background: 'white' }}>
            <Table.Tr>
              <Table.Th>Student Name</Table.Th>
              <Table.Th>USN</Table.Th>
              <Table.Th>Branch</Table.Th>
              <Table.Th>Phone No</Table.Th>
              <Table.Th>Quantity</Table.Th>
              <Table.Th>Product</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </AppShell.Main>
    </AppShell>
  );
}
