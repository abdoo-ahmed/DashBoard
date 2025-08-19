import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { Box, useTheme } from '@mui/material';
const data = [
  {
    year: 2021,
    Spain: 1100,
    France: 1600,
    Germany: 1900,
  },
  {
    year: 2022,
    Spain: 1200,
    France: 1700,
    Germany: 2000,
  },
  {
    year: 2023,
    Spain: 1300,
    France: 1800,
    Germany: 2100,
  },
  {
    year: 2024,
    Spain: 1400,
    France: 1900,
    Germany: 2200,
  },
  {
    year: 2025,
    Spain: 1500,
    France: 2000,
    Germany: 2300,
  },
];

export default function BarChar() {
    const theme = useTheme();
  return <>
  <Box sx={{height: "75vh"}}>
         <ResponsiveBar
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
            }
          }
         }
          data={data}
          indexBy="year"
          keys={[
            'Spain',
            'France',
            'Germany'
          ]}
          labelSkipWidth={12}
          labelSkipHeight={12}
          colors={{ scheme: 'paired' }}
          legends={[
              {
                  dataFrom: 'keys',
                  anchor: 'bottom-right',
                  direction: 'column',
                  translateX: 120,
                  itemsSpacing: 3,
                  itemWidth: 100,
                  itemHeight: 16
              }
          ]}
          axisBottom={{ legend: 'Year', legendOffset: 32 }}
          axisLeft={{ legend: 'Salary/Month', legendOffset: -50 }}
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      />
      </Box>
  </>
}
