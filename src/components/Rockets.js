import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRockets } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/rockets')
      .then((response) => response.json())
      .then((data) => dispatch(setRockets(data)));
  }, [dispatch]);

  return (
    <div>
      <h1>Rockets</h1>
      <p>This is the Rockets page.</p>
    </div>
  );
}

export default Rockets;
