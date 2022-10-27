import { RouterProvider } from 'react-router-dom';
import Header from './Components/Header.js/Header';
import Home from './Components/Home/Home';
import { routes } from './Routes/Home';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      < RouterProvider router={routes} ></RouterProvider >
      <Toaster></Toaster>
    </div >
  );
}

export default App;
