import React from 'react'
import { useLaunchDetailsQuery } from '../../generated/graphql';
import LaunchDetails from './launchdetails'
import {useLocation} from 'react-router-dom'

const LaunchDetailContainer = () => {
  const location = useLocation();
  const ids = (location.state).toString()
  const { data, loading, error } = useLaunchDetailsQuery({variables: {id: ids}});
    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>ERROR</div>;
      }
    
      if (!data) {
        return <div>Select a flight from the panel</div>;
      }
    
      return <LaunchDetails data={data} />;
    };


export default LaunchDetailContainer
