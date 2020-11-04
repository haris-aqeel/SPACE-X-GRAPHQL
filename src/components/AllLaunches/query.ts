
import gql from 'graphql-tag';

export const QUERY_LAUNCH_LIST = gql`
  query LaunchList {
    launches {
      launch_success
      mission_name
      launch_year
      flight_number
      
    }
  }
`;