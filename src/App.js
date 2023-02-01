import logo from './logo.svg';
import './App.css';
import Item from './components/item';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {

  const [data,setData] = useState();
  // const newData = [
  //   {
  //     brandName: 'Adidas',
  //     count: 2,
  //   },
  //   {
  //     brandName: 'Nike',
  //     count: 3,
  //   }
  // ]
  useEffect(() => {
    axios.get('https://ship2myid-admin.onrender.com/app/allNotifications').then((res) => {
    let newData = [];
    res.data.map((item) => {
      const i = newData.findIndex(e => e.brandName === item.brandName);
      if (i > -1) {
        newData[i].count++
      }
      else
      {
        newData.push({brandName: item.brandName, count: 1})
      }
    })  
    setData(newData)});
  }, [])
  return (
    <div className="App">
      <h2>Offer Notifications</h2>
      {
        data.map((item,key) => {
          return <Item brand={item.brandName} count={item.count} />
        })
      }
    </div>
  );
}

export default App;
