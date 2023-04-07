import React from 'react';
import { Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { styled } from '@mui/material/styles';

const MenuButton = styled(Button)(({ theme }) => ({
    fontSize: '12px',
    textTransform: 'capitalize',
    boxShadow: 'none',
    marginLeft: '0.5rem',
    color: 'rgb(43 49 82 / 72%)',
    padding: 0
}));

export default function MenuListRoot({ details }) {
    const { title, list } = details;
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
                {title} {open ? <KeyboardArrowUpOutlinedIcon sx={{ fontSize: '14px', ml: 1 }} /> : <KeyboardArrowDownOutlinedIcon sx={{ fontSize: '14px', ml: 1 }} />}
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
                                    {list.map((item) => (
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
