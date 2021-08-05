import { Route, Switch, useHistory } from 'react-router-dom';

import Home from './pages/home/Home';
import BaseLayout from './BaseLayout';
import CategoriesBar from "./pages/home/CategoriesBar"
import TitleBar from "./pages/home/TitleBar"

function App() {
  const history = useHistory();

  const handleClickLogo = () => {
    history.push('/')
  }

  const handleClickBookmarkList = () => {
    history.push('/bookmark')
  }

  return (
    <BaseLayout>
      <TitleBar onClickLogo={handleClickLogo} onClickBookmarkList={handleClickBookmarkList} />
      <CategoriesBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BaseLayout>
  );
}

export default App;