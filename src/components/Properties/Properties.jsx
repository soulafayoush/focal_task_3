import React, { useState } from 'react';
import './Properties.css';
import Card from '../Card/Card';
import { cardData } from '../../data/data'; 

const Properties = () => {
  // حالة لتخزين نوع الفلتر المختار
  const [filter, setFilter] = useState('all');
  
  // دالة لتصفية البيانات حسب النوع
  const filteredData = filter === 'all' ? cardData : cardData.filter(card => card.type.toLowerCase() === filter.toLowerCase());

  return (
    <section className="Properties" id="Properties">
      <div className="text-container">
        <span>Properties</span>
        <h3>We Provide The Best Property You Like</h3>
      </div>
      
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>Show All</button>
        <button onClick={() => setFilter('Apartment')}>Apartment</button>
        <button onClick={() => setFilter('Villa House')}>Villa House</button>
        <button onClick={() => setFilter('Penthouse')}>Penthouse</button>
      </div>
      
      <div className="card-container">
        {filteredData.map((card) => (
          <Card 
            key={card.id}
            {...card} 
          />
        ))}
      </div>
    </section>
  );
};

export default Properties;
