import React from 'react'
import { useLaunchListQuery } from '../../generated/graphql';
import Launches from './Launches';


const LaunchListContainer = () => {
    const { loading, error, data } = useLaunchListQuery();
    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error || !data) {
        return <div>ERROR</div>;
      }
    
      return <Launches data={data} />;
    };


export default LaunchListContainer;
