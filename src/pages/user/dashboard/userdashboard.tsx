import { AppShell, Burger, Group, Skeleton,Grid, Title, Card, Center, GridCol,TextInput, Modal} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NativeSelect,Textarea,NumberInput,Button } from '@mantine/core';
import { Header } from '../header/header';
import { UserNav } from '../nav/nav';
import { useEffect, useState } from 'react';
export function UserDashboard() {
  const [opened, { toggle }] = useDisclosure();

  
  const [stdname, setStdName] = useState('');
  const [usn, setUsn] = useState('');
  const [branch, setbranch] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState('');
  const [quant, setQuant] = useState('');

  const [products, setproducts] = useState('');

  const [showSuccess, setShowSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');


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



  const handleRequest = async () => {
    try {
      const distData = {
        stdname: stdname,
        usn: usn, 
        branch:branch, 
        phone_no:phone,
        product_id:product,
        quantity:quant
        
      };
  
      console.log('Data being sent:', distData);

      const response = await fetch('http://127.0.0.1:8000/api/student-request/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(distData),
        
      });
  
      if (response.ok) {
        setRedirectUrl('/userDash');
        setShowSuccess(true);
        console.log('Request added successfully');
      } else {
        console.error('Failed to add Req:', response.status, response.statusText);
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
      <AppShell.Navbar >
      <UserNav />
       
      </AppShell.Navbar>
      <AppShell.Main bg="#ffffff">
      <Grid mt="xl">

    <Grid.Col span={4}>
    <TextInput
      variant="filled"
      size="md"
      radius="md"
      label="Student Name"
      placeholder="enter name"
      value={stdname}
      onChange={(event) => setStdName(event.target.value)}
    />

    </Grid.Col>
    <Grid.Col span={4}>
    <TextInput
      variant="filled"
      size="md"
      radius="md"
      label="USN"
      placeholder=" Enter USN"
      value={usn}
      onChange={(event) => setUsn(event.target.value)}
    />

    </Grid.Col>
    <Grid.Col span={4}>
    <TextInput
      variant="filled"
      size="md"
      radius="md"
      label="Branch"
      placeholder="Branch"
      value={branch}
      onChange={(event) => setbranch(event.target.value)}
    />

    </Grid.Col>
    <Grid.Col span={4}>
    <TextInput
      variant="filled"
      size="md"
      radius="md"
      label="Phone_No"
      placeholder=" enter the Phone_No"
      value={phone}
      onChange={(event) => setPhone(event.target.value)}
    />
    </Grid.Col>



    <Grid.Col span={4}>
          <NativeSelect
            variant="filled"
            size="md"
            label="Product"
            radius="md"
            value={product}
            onChange={(event) => {
              const selectedValue = event.target.value;
              console.log('Selected product Id:', selectedValue);
              setProduct(selectedValue ? parseInt(selectedValue, 10) : null);
            }}
            data={[
              { label: 'Select the Product', value: null }, // Initial option
              ...(products && products.map((s) => ({ label: `${s.product_name}`, value: `${s.product_id}` })))
            ]}
          />


          </Grid.Col>
          
          

          <Grid.Col span={4}>
          <TextInput
            variant="filled"
            size="md"
            radius="md"
            label="quantity"
            placeholder="enter the quantity"
            value={quant}
            onChange={(event) => setQuant(event.target.value)}
            />
        </Grid.Col>

        </Grid>
        <Group justify="left" mt="lg">
          <Button bg="transparent" variant="outline" c='green' onClick={handleRequest}>
            Submit
          </Button>
          <Button bg="transparent" variant="outline" c='red'>
            Cancel
          </Button>
        </Group>

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