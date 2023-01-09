// material-ui
import { Typography, Input, Grid, Box, Card } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
    <MainCard title="Sample Card">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <SubCard title="뮤컬명칭">
                    예매일자 : 2020.02.20. <br />
                    예매자 : 조민혜 <br />
                    ======= 클릭 후 하단 표출 =====
                    <br />
                    금액 : 170,000
                    <br />
                    참석자 : 조민혜, 이지윤
                    <br />
                    관람일자 : 2020.02.20.
                    <br />
                    정산여부 : Y
                    <br />
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="뮤컬명칭">
                    예매일자 : 2020.02.20. <br />
                    예매자 : 조민혜 <br />
                    ======= 클릭 후 하단 표출 =====
                    <br />
                    금액 : 170,000
                    <br />
                    참석자 : 조민혜, 이지윤
                    <br />
                    관람일자 : 2020.02.20.
                    <br />
                    정산여부 : Y
                    <br />
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="뮤컬명칭">
                    예매일자 : 2020.02.20. <br />
                    예매자 : 조민혜 <br />
                    ======= 클릭 후 하단 표출 =====
                    <br />
                    금액 : 170,000
                    <br />
                    참석자 : 조민혜, 이지윤
                    <br />
                    관람일자 : 2020.02.20.
                    <br />
                    정산여부 : Y
                    <br />
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="1월">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Box style={{ border: '1px solid #5e35b1', padding: '20px', borderRadius: '5px' }}>
                                <Card sx={{ mb: 3 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            py: 4.5,
                                            bgcolor: 'secondary.light'
                                        }}
                                    >
                                        <Typography variant="subtitle1" color="inherit">
                                            뮤지컬명
                                        </Typography>
                                    </Box>
                                </Card>
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <Grid item>
                                        <Typography variant="subtitle2">관람일자</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                                            예매자명
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Box style={{ border: '1px solid #5e35b1', padding: '20px', borderRadius: '5px' }}>
                                <Card sx={{ mb: 3 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            py: 4.5,
                                            bgcolor: 'secondary.light'
                                        }}
                                    >
                                        <Typography variant="subtitle1" color="inherit">
                                            뮤지컬명
                                        </Typography>
                                    </Box>
                                </Card>
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <Grid item>
                                        <Typography variant="subtitle2">관람일자</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                                            예매자명
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Box style={{ border: '1px solid #5e35b1', padding: '20px', borderRadius: '5px' }}>
                                <Card sx={{ mb: 3 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            py: 4.5,
                                            bgcolor: 'secondary.light'
                                        }}
                                    >
                                        <Typography variant="subtitle1" color="inherit">
                                            뮤지컬명
                                        </Typography>
                                    </Box>
                                </Card>
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <Grid item>
                                        <Typography variant="subtitle2">관람일자</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                                            예매자명
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default SamplePage;
