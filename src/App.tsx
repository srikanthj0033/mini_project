import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import '../src/pages/app.css';
export default function App() {

  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
