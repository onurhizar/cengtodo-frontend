import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';

import MyNavbar from './components/MyNavbar';
import MyTabs from './components/MyTabs';

function App() {
  return (
    <Fragment>
      <MyNavbar /> <br />
      
      <Container>
        <h1>Hoşgeldin!</h1>
        <p>İYTE Bilgisayar Mühendisliği 1. sınıf öğrencileri için todo list uygulaması.</p>

        <MyTabs />
      </Container>
    </Fragment>
  );
}

export default App;
