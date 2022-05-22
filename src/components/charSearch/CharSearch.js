import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import useServices from '../../services/services';
import Error from '../../helpers/error';
import SearchResult from './SearchResult';

import './charSearch.scss';


const CharSearch = () => {
  const [ char, setChar ] = useState(null);
  const { error, loading, getCharacterByName, clearError } = useServices();

  const onCharLoaded = (char) => { setChar(char) };
  const charReq = (charName) => {
    clearError();

    getCharacterByName(charName)
      .then(onCharLoaded);
  }


  const errMessage = error ? <div className="char__search-critical-error"><Error/></div> : null;
  const result = !char ? null : <SearchResult char={ char }/>


  return (
    <div className="char__search-form">
      <Formik
        initialValues={{
          charName: ''
        }}
        validationSchema={
          yup.object({
            charName: yup.string().required('This field has to be required')
          })
        }
        onSubmit={ ({ charName }) => { charReq(charName) } }>
        <Form>
          <label htmlFor="charName" className="char__search-label">Or find a character by name:</label>
          <div className="char__search-wrapper">
            <Field
              id='charName'
              type="text"
              name='charName'
              placeholder="Enter name"/>
            <button
              className='button button__main'
              type='submit'
              disabled={ loading }>
                <div className="inner">find</div>
            </button>
          </div>
          <ErrorMessage className='char__search-error' component='div' name='charName'/>
        </Form>
      </Formik>
      { result }
      { errMessage }
    </div>
  )
};

export default CharSearch;
