import { AppShell, Burger,Group,  Skeleton, TextInput, Title, Card, Button, Grid, Center, NativeSelect, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from '../dashboard/header/header';
import classes from './inandout.module.css'
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

export function Circulation() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [opened, { toggle }] = useDisclosure();

  const [productname, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [inOut, setInOut] = useState('');

  const [products, setproducts] = useState('');

  const [inoutstockData, setinoutstockData] = useState([]);

  

  const [showSuccess, setShowSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

 

  const handleRequest = async () => {
    try {
      const distData = {
        product_name_id:productname,
        quantity:quantity,
        price:price,
        in_out_stock:inOut, 
        
      };
  
      console.log('Data being sent:', distData);

      const response = await fetch('http://127.0.0.1:8000/api/in-out-stock/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(distData),
        
      });
  
      if (response.ok) {
        setRedirectUrl('/inandout');
        setShowSuccess(true);
        console.log('Request added successfully');
      } else {
        console.error('Failed to add Request:', response.status, response.statusText);
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
    // Fetch the list of areas from the specified endpoint
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/product/');
        const data = await response.json();
        setproducts(data);
      } catch (error) {
        console.error('Error fetching States:', error);
      }
    };

    fetchProducts();
  }, []);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/in-out-stock/');
        const data = await response.json();
        setinoutstockData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
  const rows = inoutstockData.map((element) => (
    <Table.Tr style={{ backgroundColor: '#f2f2f2', color: 'black' }} key={element.id}>
        <Table.Td>{element.in_out_stock}</Table.Td>
      <Table.Td>{element.price}</Table.Td>
      <Table.Td>{element.quantity}</Table.Td>
      <Table.Td>{element.product_name_id}</Table.Td>

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
      <NativeSelect label="Product Name" 
            value={productname}
            onChange={(event) => {
              const selectedValue = event.target.value;
              console.log('Selected product Id:', selectedValue);
              setProductName(selectedValue ? parseInt(selectedValue, 10) : null);
            }}
            data={[
              { label: 'Select the Product', value: null }, // Initial option
              ...(products && products.map((s) => ({ label: `${s.product_name}`, value: `${s.product_id}` })))
            ]} 
        styles={{
                label: {
                  color: 'black',
                },
                input: {
                  backgroundColor: 'white',
                  border: 'none',
                  color: 'black',
                  height: '40px'
                },
              }}/>
      </Grid.Col> 
      <Grid.Col span={4}>
    <TextInput
      variant="filled"
      size="md"
      radius="md"
      label="Quantity"
      placeholder=" enter the quntity"
      value={quantity}
      onChange={(event) => setQuantity(event.target.value)}styles={{
      label: {
        color: 'black',
      },
      input: {
        background: 'white',
        border: 'none',
        color: 'black',
        height: '40px'
       },
    }}
    />
    </Grid.Col>
      <Grid.Col span={4}>
      <TextInput label="Price" placeholder="enter price" 
      value={price}
      onChange={(event) => setPrice(event.target.value)}styles={{
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
      <NativeSelect label="In and Out"  value={inOut}
                onChange={(event) => {
                const selectedValue = event.target.value;
                console.log('Selected Organization Type:', selectedValue);
                setInOut(selectedValue);
                }}
                data={[
                { label: 'Select Type', value: '' },
                { label: 'InStock', value: 'InStock' },
                { label: 'OutStock', value: 'OutStock' }
                ]} styles={{
        label: {
          color: 'black',
        },
        input: {
          backgroundColor: 'white',
          border: 'none',
          color: 'black',
          height: '40px'
         },
      }}/>
      </Grid.Col> 
    </Grid>
    <Button variant="filled"  ml={20} mt={10} className={classes.save} onClick={handleRequest} >Save</Button>
    <Table >
      <Table.Thead style={{ color: 'Black', background:'white' }}>
        <Table.Tr>
        <Table.Th>IN and Out Stock</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Quantity</Table.Th>
          <Table.Th>Product</Table.Th>

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