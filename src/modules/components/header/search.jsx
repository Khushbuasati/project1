import React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import colors from '../../../constant/colors';

const Search = styled('div')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: colors.grey5,
    '&:hover': {
        backgroundColor: colors.grey5,
    },
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1.5),
    height: '100%',
    pointerEvents: 'none',
    marginTop: '0.5rem',
    color: '#aeaeae',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#aeaeae',
    '& .MuiInputBase-input': {
        paddingLeft: `calc(1em + ${theme.spacing(0.4)})`,
        transition: theme.transitions.create('width'),
        minWidth: '100%',
    }
}));

const SearchBar = () => {
    return (
        <Search sx={{padding: {xs: '0.5rem 2rem', sm: '0.5rem 4rem', md: '0.5rem 6rem', lg: '0.5rem 8rem'}}}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Analyze any website or app"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    );
}

export default SearchBar;