import { AppShell, Burger, Group, UnstyledButton,Text,Center,Box,Title,TypographyStylesProvider,Card, Divider,List, ThemeIcon, rem,Container} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../Landing/home.module.css'
import { Header } from '@/components/header/Header';
import Carrousel from '@/components/Carrousel/carousel';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';

import { MobNav } from '@/components/MobNav/MobNav';


export function About() {
  const [opened, { toggle }] = useDisclosure();
  const images = [
    'https://imgs.search.brave.com/lIy71SXwyZ7lX9RndCQIzNuGC3GyzH6kug4h4eyzjHo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c3RhdGljLWNvbnRl/bnRzLnlvdXRoNHdv/cmsuY29tL3VuaXZl/cnNpdHkvRG9jdW1l/bnRzL0NvbGxlZ2Vz/L25ld3NFdmVudC8w/YTRjYTIxOS00MThi/LTRlY2MtYmFiYS05/MjgzMThiYjY0OWQu/anBn',
    'https://imgs.search.brave.com/nxnmazg84i_LUCkDvnHLveXPMwbxDy3R2UOHFHRD08k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFyZ2V0YWRtaXNz/aW9uLmNvbS9pbWcv/Y29sbGVnZXMvb3B0/aW1pemVkLzYwMC9J/TUctMS05NjA1NzQ5/LmpwZw'
    // Add more image URLs as needed
  ];
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      bg="#c1bcac"
    >
      <AppShell.Header bg="#676F9D">
        <Group h="100%" c="white" >
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"  />
          <Group justify="space-between" style={{ flex: 1 }}  >
          <Title order={4}>RYMEC PMS</Title>  
            <Group ml="xl" gap={0} visibleFrom="sm">
            <Header/>
            
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4} bg="#676F9D" c="white">
      <MobNav/>
      </AppShell.Navbar>
      <AppShell.Main bg="#2D3250" >

      <Container fluid  mx={200} py={20}>
      <Card bg="#676F9D" w="100%" h="100%"  ta="center" radius={10} c="white" >

            <Title order={2}>About Society</Title>
            <Divider/>
            <Title c="teal.4" my={10} order={4}>"Welcome to the Academic Resource Hub at RYMEC College"</Title>
            <Text mx={100} my={10} fz="xl">
            Dive into the world of academia with the Academic Resource Hub! We're your one-stop destination for all study materials, including assignments, observations, and records. Join us to make your academic journey at RYMEC College more seamless and resourceful.            </Text>
            <Title ta="left" mx={100} order={4} c="teal.4" my={20}>Our Academic Mission:</Title>
            <List
                spacing="xs"
                size="sm"
                ta="left"
                mx={100}
                fz="lg"
                icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
        </ThemeIcon>
      }
    >
      <List.Item>The Academic Resource Hub is on a mission to provide students with easy access to essential study materials. </List.Item>
      <List.Item> From assignments to observations and records, we aim to support your academic success and make learning a more enjoyable experience..</List.Item>
      {/* <List.Item>Invite Industry and prospective employers to organize campus interviews.</List.Item>
      <List.Item>Provide fruitful industry-institute interaction.</List.Item> */}
   
    </List>
    {/* <Title order={4} my={30} c="teal.4">OBJECTIVES</Title>
    <List type="ordered" ta="left" ml="100"fz="lg">
      <List.Item>To impart training in skill development, personal grooming and total personality development of students.</List.Item>
      <List.Item>To organize campus recruitments for maximum placements of students.</List.Item>
      <List.Item>To arrange different training programs, Such as mock written test, mock group discussion, mock interviews, personality development courses etc.</List.Item>
      <List.Item>To counsel students in choosing appropriate jobs and institutions for higher education.</List.Item>
      <List.Item>To conduct personality training programs outside the curricula to provide better placements.</List.Item>
      <List.Item>To generate and handle the database of industries and students.</List.Item>
      <List.Item>To provide better industry institute interaction.</List.Item>
    </List> 
    <Box> 
      <Title order={4} c="teal.4">TRAINING & PLACEMENT TEAM</Title>
      <Text>Placement Director:Gururaj K K</Text>
      <Text>Asst.Placement Officer: Shivananda K B</Text>
      </Box> */}
      </Card>
    </Container>
         
      </AppShell.Main>
    </AppShell>
  );
}