import './App.css'
import banner from '../src/assets/3.png'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  // const coffees = useLoaderData();
  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className='font-rancho container mx-auto'>
      <div className='my-5'>
        <img src={banner} alt="" />
      </div>
      <h1 className='text-5xl font-bold text-center text-purple-600'>All Coffees : {coffees.length} </h1>
      <div className='grid grid-cols-2 gap-5 my-5'>
        {
          coffees.map(coffee =>
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
