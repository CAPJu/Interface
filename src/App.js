import './styles.js';
import SideBar from './components/SideBar';
import Login from './pages/Login';
import ShowProcess from 'pages/ShowProcess/index.js';
import Processes from 'pages/Processes/index.js';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Container, Content } from './styles';
import RegisterProcess from './pages/RegisterProcess/index.js';
import GlobalStyle from './globalStyles';
import { Toaster } from 'react-hot-toast';
import React, { useContext, useEffect, useState } from 'react';
import Stages from 'pages/Stages/index.js';
import Flows from 'pages/Flows/index.js';
import { AuthContext } from 'context/AuthContext';
import Recovery from 'pages/Recovery/index.js';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  console.log(location.pathname);

  useEffect(() => {
    if (
      !localStorage.getItem('user') &&
      location.pathname != '/Login' &&
      !location.pathname.startsWith('/recovery/')
    ) {
      navigate('Login');
    }

    if (!user) {
      setUser(localStorage.getItem('user'));
    }
  });

  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right"></Toaster>
      <Container>
        <AuthContext.Provider value={{ user, setUser }}>
          <SideBar />
          <Content>
            <Routes>
              <Route path="/" element={<Flows />} />
              <Route path="login" element={<Login />} />
              <Route path="recovery">
                <Route path=":hash" element={<Recovery />} />
              </Route>
              <Route path="stages" element={<Stages />} />
              <Route path="processes" element={<Processes />} />
              <Route
                path="processes/registerProcess"
                element={<RegisterProcess />}
              />
              <Route path="processes/showProcess" element={<ShowProcess />} />
            </Routes>
          </Content>
        </AuthContext.Provider>
      </Container>
    </>
  );
}

export default App;
