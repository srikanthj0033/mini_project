import { AppShell, Burger, Group, Skeleton, Grid, Title, Card, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from '../dashboard/header/header';
import { Nav } from '../../../components/nav/nav';
import { useEffect, useState } from 'react';

export function Dashboard() {
  const [opened, { toggle }] = useDisclosure();
  const [requestCount, setCount] = useState(null);
  const [stockCount, setstockCount] = useState(null);




 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/student-request/count/      ');
      const data = await response.json();
      setCount(data.count);
    } catch (error) {
      console.error('Error fetching count:', error);
    }
  };

  fetchData();
}, []);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/in-out-stock/count/     ');
      const data = await response.json();
      setstockCount(data.count);
    } catch (error) {
      console.error('Error fetching count:', error);
    }
  };

  fetchData();
}, []);




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
      
      </AppShell.Navbar>
      <AppShell.Main bg="#ffffff">
        <Grid>
          
          <Grid.Col span={4}>
            <Card shadow="md" withBorder p="10" my={20} h={150} ml={20} bg="blue" style={{ color: 'white' }}>
              <Center mt={25}>
                <text>
                  <h3>In Stock : {stockCount}</h3>
                </text>
              </Center>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card shadow="md" withBorder p="10" my={20} h={150} ml={20} bg="blue" style={{ color: 'white' }}>
              <Center mt={25}>
                <text>
                  <h3>Requested Stock {requestCount}</h3>
                </text>
              </Center>
            </Card>
          </Grid.Col>
        </Grid>

      
      </AppShell.Main>
    </AppShell>
  );
}
