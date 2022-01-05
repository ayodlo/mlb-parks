import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem/ListItem';
import { httpGet } from '../../_utils/utils';

//Styles for List
const ListStyles = styled.div`
  margin: 2em auto;
  width: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow-y: auto;
`;

const List = () => {
  const endpoint = `http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order='name_asc'&season='2021'`;

  const [status, setStatus] = React.useState('idle');
  const [teams, setTeams] = React.useState(null);
  const [error, setError] = React.useState(null);

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  React.useEffect(() => {
    setStatus('loading');
    httpGet(endpoint).then(
      (responseData) => {
        console.log(responseData);
        setTeams(responseData.team_all_season.queryResults.row);
        setStatus('success');
      },
      (errorData) => {
        setError(errorData);
        setStatus('Error');
      }
    );
  }, [endpoint]);

  return (
    <ListStyles>
      {teams
        ? teams.map((team) => {
            return (
              <ListItem
                teamName={`${team.mlb_org}`}
                venueName={`${team.venue_name}`}
                city={`${team.city}`}
              ></ListItem>
            );
          })
        : null}
    </ListStyles>
  );
};

export default List;
