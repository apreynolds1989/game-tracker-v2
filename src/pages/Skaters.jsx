import React from 'react';
import {
    palette,
    playersSx,
    tableContainer,
    bannerSkaterBackground,
} from '../assets/theme';
import { Container } from '@mui/system';
import { Banner } from '../components/Banner';
import { Typography } from '@mui/material';
import { DoubleSortTable } from '../components/customComponents/DoubleSortTable';

const headerColumns = [
    { columnName: 'First Column' },
    { columnName: 'Second Column' },
    { columnName: 'Third Column' },
];

const rowData = [
    [{ data: 'Row 1 Col 1' }, { data: 'Row 1 Col 2' }, { data: 'Row 1 Col 3' }],
    [{ data: 'Row 2 Col 1' }, { data: 'Row 2 Col 2' }, { data: 'Row 2 Col 3' }],
    [{ data: 'Row 3 Col 1' }, { data: 'Row 3 Col 2' }, { data: 'Row 3 Col 3' }],
];

export const Skaters = () => {
    return (
        <>
            <Banner background={bannerSkaterBackground} title='SKATERS' />
            <Container
                disableGutters
                sx={{
                    marginX: 0,
                    display: 'flex',
                    flexDirection: 'row',
                    ...tableContainer,
                }}
            >
                <Container
                    sx={{
                        minWidth: '1000px',
                        border: '2px solid red',
                    }}
                >
                    <DoubleSortTable
                        columnConfig={headerColumns}
                        rowConfig={rowData}
                        headerTextColor={palette.gtRed}
                        headerArrowColor={palette.gtRed}
                        dataTextColor={palette.gtBlue}
                    />
                </Container>
                <Container sx={playersSx.skatersPopContainer}>
                    <Typography variant='h6'>Placeholder</Typography>
                </Container>
            </Container>
        </>
    );
};

// PLAYER IMAGES:

// http://nhl.bamcontent.com/images/headshots/current/168x168/{player_id}.jpg
