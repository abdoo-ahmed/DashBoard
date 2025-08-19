import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'
import React from 'react'

export default function Cart({icon ,title , supTitle  ,increase , data , scheme}) {
    const theme = useTheme();
    
  return <>
            <Paper sx={{minWidth : "330px" , flexGrow:1, padding : 1.5 , display : 'flex' , justifyContent : 'space-between'}}>
                <Stack direction={'column'}>
                    {icon}
                    <Typography variant='body2'>
                        {title}
                    </Typography>
                    <Typography variant='body2'>
                        {supTitle}
                    </Typography>
                </Stack>
                <Stack alignItems={'center'}>
                    <Box sx={{height:"100px" ,width:"100px"}}>
                          <ResponsivePie
                                            theme={
              {
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "#ffffff"
                },
                "axis": {
                    "domain": {
                        "line": {
                            "stroke":theme.palette.divider ,
                            "strokeWidth": 1
                        }
                    },
                    "legend": {
                        "text": {
                            "fontSize": 12,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "#ffffff"
                        }
                    },
                    "ticks": {
                        "line": {
                            "stroke": theme.palette.divider,
                            "strokeWidth": 1
                        },
                        "text": {
                            "fontSize": 11,
                            "fill":theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "#ffffff"
                        }
                    }
                },
                "grid": {
                    "line": {
                        "stroke": theme.palette.divider,
                        "strokeWidth": 1
                    }
                },
                "legends": {
                    "title": {
                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "#ffffff"
                        }
                    },
                    "text": {
                        "fontSize": 11,
                        "fill":theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "#ffffff"
                    },
                    "ticks": {
                        "line": {},
                        "text": {
                            "fontSize": 10,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "#ffffff"
                        }
                    }
                },
                "annotations": {
                    "text": {
                        "fontSize": 13,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "link": {
                        "stroke": "#000000",
                        "strokeWidth": 1,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "outline": {
                        "stroke": "#000000",
                        "strokeWidth": 2,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "symbol": {
                        "fill": "#000000",
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    }
                },
                "tooltip": {
                    "wrapper": {},
                    "container": {
                        "background": theme.palette.background.default,
                        "color": theme.palette.text.primary,
                        "fontSize": 12
                    },
                    "basic": {},
                    "chip": {},
                    "table": {},
                    "tableCell": {},
                    "tableCellValue": {}
                }}}
                                data={data}
                                margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
                                innerRadius={0.6}
                                padAngle={0.6}
                                colors={{ scheme: scheme }}
                                enableArcLinkLabels={false}
                                cornerRadius={2}
                                activeOuterRadiusOffset={8}

                               
                            />
                    </Box>
                    <Typography variant='body2'>
                        {increase}
                    </Typography>
                </Stack>
            </Paper>
  </>
}
