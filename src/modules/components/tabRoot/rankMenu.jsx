import React from 'react';
import { Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { styled } from '@mui/material/styles';
import playstoreIcon from '../../../assets/images/playstore1.png';

const MenuButton = styled(Button)(() => ({
    fontSize: '11px',
    textTransform: 'capitalize',
    boxShadow: 'none',
    marginLeft: '0.5rem',
    color: 'rgb(43 49 82 / 39%)',
    padding: 3,
    border: '1px solid rgb(43 49 82 / 39%)',
    borderRadius: '1rem',
}));

export default function RankMenu() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <>
            <MenuButton
                ref={anchorRef}
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <img src={playstoreIcon} width="7%" style={{ marginRight: '0.5rem' }} />  Google Play Rank {open ? <KeyboardArrowUpOutlinedIcon fontSize="small" sx={{ ml: 4, color: '#6b6a6a' }} /> : <KeyboardArrowDownOutlinedIcon fontSize="small" sx={{ ml: 4, color: '#6b6a6a' }} />}
            </MenuButton>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {['Item1', 'Item2', 'Item3'].map((item) => (
                                        <MenuItem onClick={handleClose}>{item}</MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
}
