import React, { useContext, useState } from 'react';
import { ProductsContext } from './context/ProductContext';

const CustomPackBuilder = () => {
  const { product } = useContext(ProductsContext);
  const [selectedChocolates, setSelectedChocolates] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCounts, setItemCounts] = useState({});

  const handleChocolateSelection = (chocolate) => {
    const updatedSelection = [...selectedChocolates, chocolate];
    const updatedPrice = updatedSelection.reduce((sum, chocolate) => sum + chocolate.price, 0);

    if (updatedSelection.length <= 8) {
      setSelectedChocolates(updatedSelection);
      setTotalPrice(updatedPrice);
      updateItemCounts(updatedSelection);
      
  
    }
   
  };

  const handleRemoveChocolate = (chocolateId) => {
    const updatedSelection = selectedChocolates.filter(chocolate => chocolate.id !== chocolateId);
    const updatedPrice = updatedSelection.reduce((sum, chocolate) => sum + chocolate.price, 0);

    setSelectedChocolates(updatedSelection);
    setTotalPrice(updatedPrice);
    updateItemCounts(updatedSelection);
  };

  const updateItemCounts = (chocolates) => {
    const counts = chocolates.reduce((counts, chocolate) => {
      counts[chocolate.type] = (counts[chocolate.type] || 0) + 1;
      return counts;
    }, {});

    setItemCounts(counts);
  };

  console.log(selectedChocolates);
  console.log(itemCounts);

  return (
    <div className='flex'>

      <div className=''>
        <h3>Selected Chocolates</h3>
        {selectedChocolates.length === 0 ? (
          <p>No chocolates selected.</p>
        ) : (
          <ul>
            {selectedChocolates.map(chocolate => (
              <li key={chocolate.id}>
              </li>
            ))}
          </ul>
        )}
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <div>
          <h3>Item Counts</h3>
          <ul>
            {Object.entries(itemCounts).map(([type, count]) => (
              <li key={type}>
                {type}: {count}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=' md:flex  '>
        <h3>Available Chocolates</h3>
        <ul className=' flex flex-wrap  '>
          {product.map(chocolate => (
            <div key={chocolate.id} className='flex w-[15rem] h-[18rem] flex-col'>
              <li>
                <img className='w-[14rem] h-[12rem]' src={chocolate.imageName} alt="" />
                {chocolate.type} - ${chocolate.price.toFixed(2)}
                <div>
                  <button onClick={() => handleChocolateSelection(chocolate)}>+Add</button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomPackBuilder;
