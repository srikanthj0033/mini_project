import { AppShell, Burger, Group, Skeleton,Grid, Title, Card, Center} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Header } from '../dashboard/header/header';
import { Nav } from '../../../components/nav/nav';

export function Dashboard() {
  const [opened, { toggle }] = useDisclosure();

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
      <AppShell.Main bg="#ffffff">
      <Grid >
          <Grid.Col span={4} >     
          <Card  withBorder p="10" my={20} h={150} ml={20}  bg="blue" style={{ color:"white" }}>
              <Center mt={25}>
                <text>
                  <h3>Input Stock : </h3>
                </text>
              </Center>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
          <Card shadow="md" withBorder p="10" my={20} h={150} ml={20} bg="blue" style={{ color:"white" }} >
              <Center mt={25}>
                <text>
                  <h3>Output Stock : </h3>
                </text>
              </Center>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
          <Card shadow="md" withBorder p="10" my={20} h={150} ml={20} bg="blue" style={{ color:"white" }} >
              <Center mt={25}>
                <text>
                  <h3>Requested Stock</h3>
                </text>
              </Center>
            </Card>
          </Grid.Col>
        </Grid>

      </AppShell.Main>
    </AppShell>
  );
}