import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import Header_Login from './Components/Header/Header_Login';

function App() {
  return (
      <BrowserRouter>
          <Routes>

            <Route path="/" element={
              <div className="text-[#1d4d85] app min-w-[280px] min-h-screen bg-background">
              <Header />
              <Main />
              <Footer />
              </div>
            } />

            <Route path="/login" element={
              <div className="text-[#1d4d85] app min-w-[280px] min-h-screen bg-background">
              <Header_Login />
              <Login />
              <div className='mb-auto mt-[450px]'>
                <Footer />
              </div>
              </div>
            } />

          </Routes>
      </BrowserRouter>
  );
}

export default App;
