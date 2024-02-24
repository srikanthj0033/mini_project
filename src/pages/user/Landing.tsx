import { AppShell, Burger, Group, UnstyledButton,Text,Center,Box,Title,TypographyStylesProvider,Container} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './home.module.css'
import { Header } from '@/components/header/Header';
import Carrousel from '@/components/Carrousel/carousel';
import { Link } from 'react-router-dom';
import {slides} from '../carrsouel.json';
import { MobNav } from '@/components/MobNav/MobNav';

export function Landing() {
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
      padding="xl"
      bg="#c1bcac"
    >
      <AppShell.Header bg="#676F9D">
        <Group h="100%" c="white">
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
      <AppShell.Main bg="#2D3250">
     <Carrousel data={slides}/>
     <Container fluid p={50} ta='center' c="WHITE">
     <Title order={3} >ABOUT RYMEC</Title>
     <Text>
     Sri. Rao Bahadur Y. Mahabaleswarappa was born on 3rd June 1906 at Yemmiganur, Ballari (Tq. & Dist). He was the son of Sri Changallappa and Smt. Sugamma. He completed primary and school education at Wardlaw College, Ballari. He Strongly carried froward the message "VIDYA GNENESHA SHOBATHE".
      </Text>
    </Container>
     
      </AppShell.Main>
    </AppShell>
  );
}