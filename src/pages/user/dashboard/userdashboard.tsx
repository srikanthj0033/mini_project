import { AppShell, Burger, Group, Skeleton,Grid, Title, Card, Center, GridCol} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NativeSelect,Textarea,NumberInput,Button } from '@mantine/core';
import { Header } from '../header/header';
import { UserNav } from '../nav/nav';

export function UserDashboard() {
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
      <UserNav />
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
          
      </AppShell.Navbar>
      <AppShell.Main bg="#ffffff">
      <Grid >

      <Grid.Col span={3} mt={30} ml={20} >
      <NativeSelect variant="filled" size="lg" w={350} radius="md" label="Product Name:" data={['Assignment', 'Observation', 'Record']} />
      </Grid.Col>
            
      <Grid.Col span={3} mt={30} ml={80}  >
      <NumberInput
      variant="filled"
      size="lg"
      radius="md"
      w={350}
      label="Quantity:" 
    />
    </Grid.Col>

    <Grid.Col span={3} mt={30} ml={90} >
      <Textarea
      variant="filled"
      radius="md"
      size="sm"
      w={350}
      label="Usn:"
    />
    </Grid.Col>

    <Grid.Col span={3} ml={20} mt={20} >
      <Textarea
      variant="filled"
      radius="md"
      size="sm"
      w={350}
      label="Name:"
    />
    </Grid.Col>

    <Grid.Col span={3} ml={80} mt={20}>
    <NumberInput
      variant="filled"
      size="lg"
      radius="md"
      w={350}
      label="Mobile Number:" 
    />
    </Grid.Col>

    <Grid.Col ml={20} mt={20}>
    <Button variant="filled" size="md" radius="md">Order</Button> 
    <Button variant="filled" color="red" ml={20} size="md" radius="md">Cancel</Button>

    </Grid.Col>

        </Grid>

      </AppShell.Main>
    </AppShell>
  );
}