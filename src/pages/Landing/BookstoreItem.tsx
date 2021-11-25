import { BookstoreData } from '@api/useBookstores';
import Box from '@components/Box';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getBookstoreLogo from '@utils/assets/getBookstoreLogo';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--gray-4);
  border-radius: 50%;
  overflow: hidden;
`;

const StyledBoostoreLink = styled.a`
  margin: 0 0.5rem;
  font-weight: 300;
  color: var(--gray-7);
`;

const BookstoreItem: FunctionComponent<BookstoreData> = ({
  id,
  displayName,
  website,
  isOnline,
}) => {
  return (
    <Box display="flex" alignItems="center">
      <StyledLogo src={getBookstoreLogo(id)} />
      <StyledBoostoreLink href={website} target="_blank" rel="noreferrer">
        {displayName}
      </StyledBoostoreLink>
      {isOnline ? (
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#52c41a' }} />
      ) : (
        <FontAwesomeIcon icon={faTimesCircle} style={{ color: '#f5222d' }} />
      )}
    </Box>
  );
};

export default BookstoreItem;
