import { Route, Switch } from 'react-router-dom';

import MainNavigation from './components/layout/MainNavigation';
import AllMeetupPage from './pages/AllMeetup';
import FavoritePage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact={true}>
          <AllMeetupPage />
        </Route>
        <Route path='/newMeetUp'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
