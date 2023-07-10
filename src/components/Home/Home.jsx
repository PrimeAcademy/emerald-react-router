import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  // History is a record of everywhere we've been
  // The last entry in the array is where we are now
  const history = useHistory();

  const handleClick = () => {
    // change location! Push '/animals' onto the end of the history array
    history.push('/animals');
  }

  return (
    <div>
      <h1>HOME</h1>
      <img src="https://pixy.org/download/4718707/" width={500}/>
      <button onClick={handleClick}>Go to animals</button>
    </div>
  );
}

export default Home;
