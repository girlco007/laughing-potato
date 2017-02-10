import React from 'react';
import ReactDOM from 'react-dom';
import WineApp from './WineApp';


// const wine = {
//   "id": "chevrol-bel-air",
//   "name": "Château Chevrol Bel Air",
//   "type": "Red",
//   "appellation": {
//     "name": "Lalande-de-Pomerol",
//     "region": "Bordeaux"
//   },
//   "grapes": [
//     "Cabernet Sauvignon",
//     "Merlot",
//     "Cabernet Franc"
//   ]
// };

ReactDOM.render(
  <WineApp />,
  document.getElementById('root')
);
