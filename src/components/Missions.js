import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMissions } from '../redux/missions/missionsSlice';

function Missions() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/missions')
      .then((response) => response.json())
      .then((data) => dispatch(setMissions(data)));
  }, [dispatch]);

  return (
    <div>
      <h1>Missions</h1>
      <p>This is the Missions page.</p>
    </div>
  );
}

export default Missions;
