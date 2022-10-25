import { RouterProvider } from 'react-router-dom';
import Header from './Components/Header.js/Header';
import Home from './Components/Home/Home';
import { routes } from './Routes/Home';

function App() {
  return (
    <div data-theme="lemonade">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
