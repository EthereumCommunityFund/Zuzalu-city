import * as React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import OverviewButton from './OverviewButton';
import { Event } from '@/types';

interface PropTypes {
  event?: Event
}

const OverviewHeader = ({event}: PropTypes) => {
  return (
    event ? <Stack direction="column" spacing={3} marginBottom={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" color="white">
          {event.title}
        </Typography>
        <Stack direction="row">
          <Typography variant="body1" color="white">
            Today&apos;s Date:&nbsp;
          </Typography>
          <Typography variant="body1" color="white" sx={{ opacity: 0.7 }}>
            {
              new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
            }
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={2}>
        <OverviewButton type={0} />
        <OverviewButton type={1} />
      </Stack>
    </Stack> : <></>
  );
};

export default OverviewHeader;
