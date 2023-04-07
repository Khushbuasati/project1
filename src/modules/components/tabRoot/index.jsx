import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography, Grid, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import TabletMacOutlinedIcon from '@mui/icons-material/TabletMacOutlined';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import RankMenu from './rankMenu';
import Card, { InfoIcon } from './card';
import colors from '../../../constant/colors';
import card1Logo from '../../../assets/images/card1.png';
import card2Logo from '../../../assets/images/card2.png';

import { card1Data, card2Data } from './helper/data';

const Title = styled(Typography)(() => ({
    fontSize: '14px',
    color: 'rgb(43 49 82 / 72%)',
}));

const UpdateTitle = styled(Typography)(() => ({
    fontSize: '12px',
    color: 'rgb(43 49 82 / 72%)',
    display: "flex",
    alignItems: "center"
}));

const ShareButton = styled(Button)(() => ({
    padding: '1px 4px',
    fontSize: '9px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
}));

const TweetButton = styled(Button)(() => ({
    padding: '1px 4px',
    fontSize: '9px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    borderRadius: '1rem',
    background: colors.lightBlue
}));

const CardTitle = styled(Tab)(({ theme, selectedTab, currentValue }) => ({
    fontSize: 20,
    color: `${colors.grey3} !important`,
    textTransform: 'capitalize',
    minHeight: '53px',
    background: selectedTab === currentValue ? 'white' : colors.grey4,
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    padding: '12px 60px 12px 12px'
}));

function TabPanel1(props) {
    const { value, index } = props;
    return (
        <Grid
            sx={{ padding: { xs: '0rem 1rem', sm: '0rem 3rem', md: '0rem 6rem', lg: '0rem 6rem' }, display: value !== index ? 'none' : '' }}
        >
            <Grid spacing={1} container={true}>
                <Grid item={true} md={6} sm={12}>
                    <Card title="Trending Up" titleIcon={card1Logo} tableData={card1Data} />
                </Grid>
                <Grid item={true} md={6} sm={12}>
                    <Card title="New in Top 100 List" titleIcon={card2Logo} tableData={card2Data} marginBottom="-4px" />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default function TabsRoot() {
    const [value, setValue] = useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ padding: { xs: '0rem 1rem', sm: '0rem 6rem', md: '0rem 6rem', lg: '0rem 6rem' }, marginTop: '-3.25rem' }}>
                <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ sx: { backgroundColor: 'white' } }}>
                    <CardTitle selectedTab={value} currentValue={0} icon={<EmojiEventsIcon sx={{ fontSize: '20px' }} />} iconPosition="start" label={<>Leader Board <InfoIcon /></>} value={0} ><InfoIcon /></CardTitle>
                    <CardTitle selectedTab={value} currentValue={1} icon={<TabletMacOutlinedIcon sx={{ fontSize: '14px' }} />} iconPosition="start" label={<>App Trends <InfoIcon /></>} value={1} />
                </Tabs>
            </Box>
            <Grid container={true} display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '1.5rem 0rem', padding: '0rem 6rem' }}>
                <Stack direction="row">
                    <Title>Sort by:</Title>
                    <RankMenu />
                </Stack>
                <Stack direction="row" spacing={1} sx={{ marginTop: { xs: '0.5rem' } }}>
                    <UpdateTitle><ScheduleOutlinedIcon sx={{ fontSize: '14px', mr: 0.3 }} /> Last updated: March 20, 2023</UpdateTitle>
                    <ShareButton variant="contained" size="small" startIcon={<FacebookOutlinedIcon sx={{ fontSize: '12px !important' }} />}>Share</ShareButton>
                    <TweetButton variant="contained" size="small" startIcon={<TwitterIcon sx={{ fontSize: '12px !important' }} />}>Tweet</TweetButton>
                </Stack>
            </Grid>
            <TabPanel1 value={value} index={0} />
            <TabPanel1 value={value} index={1} />
        </>
    );
}
