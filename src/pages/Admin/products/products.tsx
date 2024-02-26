import { AppShell, Burger,Group,  Skeleton, TextInput, Title, Card, Button, Grid, Center, NativeSelect, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from '../dashboard/header/header';

import classes from './products.module.css'
import { Nav } from '../../../components/nav/nav';
import { Breadcrumbs, Anchor, Table } from '@mantine/core';
import { useEffect, useState } from 'react';


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

// new

  const [product_name, setProduct_name] = useState(''); 
  const [product_price, setProduct_price] = useState('');
  const [specification, setSpecification] = useState('');

  const [productData, setproductData] = useState([]);//table data variable


  const [showSuccess, setShowSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleAddProduct = async () => {
    try {
      const productData = {
        product_name: product_name,
        product_price: product_price,   
        specification: specification,   
      };
  
      console.log('Data being sent:', productData);

      const response = await fetch('http://127.0.0.1:8000/api/product/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
        
      });
  
      if (response.ok) {
        setRedirectUrl('/products');
        setShowSuccess(true);
        console.log('Plan added successfully');
      } else {
        console.error('Failed to add Plan:', response.status, response.statusText);
      }
  
    } catch (error) {
      console.error('Error:', error);
  
      if (error instanceof Error) {
        console.error('Error message:', error.message);
      }
    }
  };
  

  const handleModalClose = () => {
    setShowSuccess(false);

    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/product/');
        const data = await response.json();
        setproductData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
 
  const rows = productData.map((element) => (
    <Table.Tr style={{ backgroundColor: '#f2f2f2', color: 'black' }} key={element.product_id}>
      <Table.Td>{element.product_name}</Table.Td>
      <Table.Td>{element.specification}</Table.Td>

      <Table.Td>{element.product_price}</Table.Td>
      
    </Table.Tr>
  ));

//end
  // const rows = elements.map((element) => (
  //   <Table.Tr style={{ backgroundColor: '#f2f2f2', color: 'black' }} key={element.product}>
  //       <Table.Td>{element.product}</Table.Td>
  //     <Table.Td>{element.price}</Table.Td>
  //     <Table.Td>{element.specification}</Table.Td>
  //   </Table.Tr>
  // ));
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
      <TextInput label="Product Name" placeholder="enter product name"
        value={product_name}
        onChange={(event) => setProduct_name(event.target.value)} 
        styles={{
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
      <TextInput label="Price" placeholder="enter price"
      value={product_price}
      onChange={(event) => setProduct_price(event.target.value)} 
      
      styles={{
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
      <TextInput label="Specification" placeholder="enter specification" 
       value={specification}
       onChange={(event) => setSpecification(event.target.value)} 
      
      
      styles={{
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
    <Button variant="filled"  ml={20} mt={10} className={classes.save}  onClick={handleAddProduct}>Save</Button>
    <Table >
      <Table.Thead style={{ color: 'Black', background:'white' }}>
        <Table.Tr>
        <Table.Th>Product Name</Table.Th>
        <Table.Th>Specification</Table.Th>

          <Table.Th>Price</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
 



     <Modal
          title="Success"
          opened={showSuccess}
          onClose={handleModalClose}
          withCloseButton
          >
          Data added successfully!
        </Modal>
  


      </AppShell.Main>
    </AppShell>
  );
}