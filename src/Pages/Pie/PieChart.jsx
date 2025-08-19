import { ResponsivePie } from '@nivo/pie'
import { Box, useTheme } from '@mui/material'
import React from 'react'

const data = [
  {
    "id": "sass",
    "label": "sass",
    "value": 259,
    "color":  "hsl(55, 70%, 50%)"
  },
  {
    "id": "HTML",
    "label": "HTML",
    "value": 209,
    "color": "hsl(6, 70%, 50%)"
  },
  {
    "id": "Java Script",
    "label": "Java Script",
    "value": 434 ,
    "color": "hsl(138, 70%, 50%)"
  },
  {
    "id": "Java",
    "label": "Java",
    "value": 239,
    "color":"hsla(193, 73%, 49%, 1.00)"
  },
  {
    "id": "React",
    "label": "React",
    "value": 568,
    "color": "hsl(131, 70%, 50%)"
  }
]

export default function PieChart() {
    const theme = useTheme();
  return <>

        <Box sx={{height: "75vh"}}>
          <ResponsivePie
            data={data}
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
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.6}
            cornerRadius={2}
            activeOuterRadiusOffset={8}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={theme.palette.text.primary}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    translateY: 56,
                    itemWidth: 100,
                    itemHeight: 18,
                    symbolShape: 'circle'
                }
            ]}
        />
        </Box>
  
  
  </>
}
