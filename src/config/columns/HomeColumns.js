import { ListItem, UnorderedList } from '@chakra-ui/react';
import { Fragment } from 'react';
import PopupDetails from '../../components/PopupDetails';
import moment from 'moment';
import PopupBody from '../../components/PopupBody';

export const homeColumns = [
  { label: 'Name', render: (data) => data.name },
  { label: 'eKTP', render: (data) => data.eKTP },
  { label: 'Address', render: (data) => data.address },
  { label: 'Job', render: (data) => data.job },
  {
    label: 'Date of Birth',
    render: (data) => moment(new Date(data.dateOfBirth)).format('DD MMMM YYYY'),
  },
  {
    label: 'Phone Number',
    render: (data) => (
      <>
        {data.phoneNumbers.length > 1 ? (
          <UnorderedList>
            {data.phoneNumbers.map((value) => (
              <ListItem>{value.phoneNumber}</ListItem>
            ))}
          </UnorderedList>
        ) : (
          data.phoneNumbers[0].phoneNumber
        )}
      </>
    ),
  },
  {
    label: 'Family',
    render: (data) => (
      <PopupDetails
        triggerText={`Show (${data.family.length})`}
        popupHeader="Family Details"
        popupBody={<PopupBody data={data} />}
      />
    ),
  },
];
