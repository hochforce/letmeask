import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../src/pages/Home';
import { NewRoom } from '../src/pages/NewRoom';
import { AuthContextProvider } from './contexts/authContext';
import { Room } from '../src/pages/Room';
import { AdminRoom } from '../src/pages/AdminRoom';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
