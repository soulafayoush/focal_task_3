import React from 'react';
import Featured from '../../components/Featured/Featured';
import BestDeal from '../../components/BestDeal/BestDeal';


const PropertiesDetails = () => {
  return (
    <>
      <div className="properties-details">
         <div className="background-image">
            <div className="overlay">
               <div className="header-box">
                  <h4>Home / <span>Properties Deatails</span></h4>
                 </div>
                  <h1>Properties Deatails</h1>
         </div>
     </div>
     <Featured />
      <BestDeal />
    
    </div>
    </>
  );
};

export default PropertiesDetails;
