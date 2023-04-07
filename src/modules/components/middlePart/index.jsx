import React from 'react';
import { Grid, Button } from '@mui/material';
import backgroundImage from '../../../assets/images/background.jpg';
import Dropdown from '../../commonComponents/select';
import details from './helper/data';
import { styled } from '@mui/material/styles';
import colors from '../../../constant/colors';

const GoButton = styled(Button)(({ theme }) => ({
    textTransform: 'capitalize',
    boxShadow: 'none',
    marginLeft: '0.5rem',
    background: colors.orange2,
    borderRadius: '1px',
    minWidth: '75px',
    fontSize: '13px',
    padding: '9px',
    '&:hover': {
        backgroundColor: colors.orange2,
    },
}));

const MiddlePart = () => {
    return (
        <Grid container spacing={4} alignItems="center" sx={{ backgroundImage: `url(${backgroundImage})`, padding: '0rem 5.5rem 6rem', mt: 0 }}>
            {details.map((item, index) => (<Grid item={true} md={2.75} sm={6} xs={12} sx={{ paddingTop: '10px !important' }}>
                <Dropdown title={item.title} img={item.img} list={item.list} />
            </Grid>))}
            <Grid item={true} md={1} sm={6} xs={12} sx={{ paddingTop: '10px !important' }}><GoButton variant="contained">Go</GoButton></Grid>
        </Grid>
    );
};

export default MiddlePart;