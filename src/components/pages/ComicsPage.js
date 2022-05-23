import { Helmet } from 'react-helmet';

import AppBanner from '../appBanner/AppBanner';
import ComicsList from '../comicsList/ComicsList';

const ComicsPage = () => {
  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='List of marvel comics'
        />
        <title>Comics</title>
      </Helmet>
      <Helmet>
        <meta
          name='description'
          content='List of marvel comics'
        />
        <title>Comics</title>
      </Helmet>

      <AppBanner/>
      <ComicsList/>
    </>
  )
}

export default ComicsPage;
