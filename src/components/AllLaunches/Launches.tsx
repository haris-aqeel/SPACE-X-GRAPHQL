import React from 'react'
import { LaunchListQuery } from '../../generated/graphql';
import {useHistory} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import './styles.css'

interface Props {
    data: LaunchListQuery;
  }




const Launches: React.FC<Props> = ({data}) => {

    const history = useHistory();

    const handleDetails = (id: any) => {
        history.push({
            pathname:'/details',
            state: id
        })
    }
    
    return (
        <div className='launches'>
        <h1>SPACE X LAUNCHES</h1>
            <div>
          {!!data.launches &&
            data.launches.map(
              (launch, i) =>
                !!launch && (
                <Paper elevation={3}
                  className={launch.launch_success === true ? 'launch launch_success': 'launch launch_failed'}
                  style={{ width: "80%" , height: '150px', margin: '20px auto', boxSizing: "border-box", padding: "0 80px"}}
                  key={i}
                  onClick={() => handleDetails(launch.flight_number)}
                  >
                      <h2>{launch.mission_name}</h2>
                      <h3>{launch.launch_year}</h3>
                    
                  
                </Paper>
                ),
            )}
            </div>
    
      </div>
    )
}

export default Launches
