import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import Loading from '../../helpers/loading';

const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/singleComic/SingleComicPage'));
const SingleCharacterPage = lazy(() => import('../pages/singleCharacter/SingleCharacterPage'));
const Page404 = lazy(() => import('../pages/Page404'));

const App = () => {

  return (
    <Router>
      <div className='app'>
        <AppHeader/>
        <main>
          <Suspense fallback={ <Loading/> }>
            <Routes>

              <Route path='/' element={ <MainPage/> }/>
              <Route path='/comics' element={ <ComicsPage/> }/>
              <Route path='/comics/:comicId' element={ <SingleComicPage/> }/>
              <Route path='/characters/:charId' element={ <SingleCharacterPage/> }/>
              <Route path='*' element={ <Page404/> }/>

            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
