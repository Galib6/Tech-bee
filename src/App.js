import { RouterProvider } from 'react-router-dom';

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
