import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from 'react';
import Mylist from './components/imageMove/Mylist';
import Recommended from './components/Recommended';

function App() {

  const imgData = [
    {
      "title": "Futurama",
      "id": 1,
      "img": "http://cdn1.nflximg.net/webp/7621/3787621.webp"
    },
    {
      "title": "The Interview",
      "id": 2,
      "img": "http://cdn1.nflximg.net/webp/1381/11971381.webp"
    },
    {
      "title": "Gilmore Girls",
      "id": 3,
      "img": "http://cdn1.nflximg.net/webp/7451/11317451.webp"
    },
    {
      "title": "Family Guy",
      "id": 4,
      "img": "http://cdn5.nflximg.net/webp/5815/2515815.webp"
    },
    {
      "title": "The Croods",
      "id": 5,
      "img": "http://cdn3.nflximg.net/webp/2353/3862353.webp"
    },
    {
      "title": "Friends",
      "id": 6,
      "img": "http://cdn0.nflximg.net/webp/3200/9163200.webp"
    }
  
  ];
  
  const [initialData, setInitialData] = useState(imgData);
  const[addedItems, setAddedItems] =useState([]);

  const addItem = (data) => {
    // console.log(data);
    setAddedItems([...addedItems, data]);
    const values = initialData.filter(initialData => initialData.id !== data.id);
    setInitialData(values);

  }

  const removeItem = (data) => {
    setInitialData([...initialData, data]);
    const values = addedItems.filter(addeditems => addeditems.id !== data.id);
    setAddedItems(values);
  }
 
  return (
    <div className="container">
        <div className='row'>
          <div className='card'> 
            <h1>Mylist</h1>
            <div className='row'>
              {initialData.map((data, index) =>{ 
                return <Mylist key={index} data={data} addItem={addItem} />
              })}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='card'> 
            <h1>Recommended</h1>
            <div className='row'>
              {addedItems.map((data, index) =>{ 
                  return <Recommended key={index} data={data} removeItem={removeItem} />
              })}
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
