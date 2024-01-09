import { useSelector, useDispatch } from 'react-redux'; 
import { useEffect } from 'react';
import { getCatsFetch } from './catState';
import './App.css';

function App() {
  const cats = useSelector(state => state.cats.cats);
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(getCatsFetch());
  }, [dispatch])

  console.log(cats);
  return (
    <div className="App">
      <h1>CAT GALLERY</h1>
      <p>Images of cat for your viewing pleasure</p>
      <hr/>
      <div className='Gallery'>
          {
            cats.map( cat =>
              <div key={cat.id} className='row'>
                <div className='column column-left'>
                <img
                    src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                    alt={cat.name}
                    width={200}
                    height={200}
                />
                </div>
                <div className='column column-right'>
                  <h2>{cat.name}</h2>
                  <h5>{cat.temperament}</h5>
                  <p>{cat.description}</p>
                </div>
              </div>
            )
          }
      </div>
    </div>
  );
}

export default App;
