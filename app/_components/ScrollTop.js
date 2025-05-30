"use client"
import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollTop() {
    const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
        if (anchor) anchor.scrollIntoView({ block: 'center', behavior: 'smooth' });
    };
    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: `999` }}
            >
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon color="second" fontSize="large" />
                </Fab>
            </Box>
        </Fade>
    );
}
