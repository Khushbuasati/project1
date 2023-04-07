import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
import { styled } from '@mui/material/styles';

import colors from '../../../constant/colors';
import logo from '../../../assets/images/logo2.png';
import playstore from '../../../assets/images/playstore2.png';

const TableHeaderCell = styled(TableCell)(() => ({
    fontSize: '11px',
    color: colors.grey1,
    padding: '6px 2px',
}));

const TableRowCell = styled(TableCell)(() => ({
    fontSize: '11px',
    color: colors.grey2,
    padding: '6px 2px',
}));

const AppCellData = styled(TableCell)(() => ({
    fontSize: '11px',
    color: colors.lightBlue2,
    padding: '6px 2px',
}));

export const InfoIcon = styled(InfoOutlinedIcon)(() => ({
    fontSize: '15px',
    marginBottom: '-3px',
    marginLeft: 3
}));

const CardTitle = styled(Typography)(() => ({
    fontSize: 20,
    color: colors.grey3,
}));

const LoadMoreBtn = styled(Button)(() => ({
    fontSize: 12,
    color: colors.grey2,
    border: `1px solid ${colors.grey2}`,
    marginTop: 8,
    textTransform: 'capitalize',
}));

export default function Card({ title, titleIcon, tableData, marginBottom }) {
    return (
        <Paper variant="outlined" square sx={{ padding: '0.9rem 1.5rem' }}>
            <CardTitle><img src={titleIcon} width="6%" style={{ marginBottom: marginBottom || '-1px' }} /> {title}<InfoIcon /></CardTitle>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>App<InfoIcon /></TableHeaderCell>
                        <TableHeaderCell align="center"><img src={logo} width="12%" style={{ marginBottom: '-1px' }} /> Usage Rank<InfoIcon /></TableHeaderCell>
                        <TableHeaderCell align="center"><img src={playstore} width="11%" style={{ marginRight: 2, marginBottom: '-3px' }} />Store Rank<InfoIcon /></TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData?.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <AppCellData component="th" scope="row">
                                <img src={row.img} width="6%" style={{ marginBottom: '-3px', marginRight: 4 }} />{row.name}
                            </AppCellData>
                            <TableRowCell align="center">{row.URank}</TableRowCell>
                            <TableRowCell align="center">{row.SRank}</TableRowCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <LoadMoreBtn variant="outlined" fullWidth={true}>Load more apps <TrendingFlatOutlinedIcon sx={{fontSize: 14, marginLeft: '5px'}} /></LoadMoreBtn>
        </Paper>
    );
}
