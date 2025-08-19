import React from 'react'
import { Box, useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'


const data = [
  {
    "id": "japan",
    "data": [
      {
        "x": "plane",
        "y": 128
      },
      {
        "x": "helicopter",
        "y": 85
      },
      {
        "x": "boat",
        "y": 290
      },
      {
        "x": "train",
        "y": 201
      },
      {
        "x": "subway",
        "y": 180
      },
      {
        "x": "bus",
        "y": 28
      },
      {
        "x": "car",
        "y": 71
      },
      {
        "x": "moto",
        "y": 277
      },
      {
        "x": "bicycle",
        "y": 257
      },
      {
        "x": "horse",
        "y": 145
      },
      {
        "x": "skateboard",
        "y": 266
      },
      {
        "x": "others",
        "y": 105
      }
    ]
  },
  {
    "id": "us",
    "data": [
      {
        "x": "plane",
        "y": 259
      },
      {
        "x": "helicopter",
        "y": 276
      },
      {
        "x": "boat",
        "y": 76
      },
      {
        "x": "train",
        "y": 93
      },
      {
        "x": "subway",
        "y": 73
      },
      {
        "x": "bus",
        "y": 49
      },
      {
        "x": "car",
        "y": 44
      },
      {
        "x": "moto",
        "y": 157
      },
      {
        "x": "bicycle",
        "y": 287
      },
      {
        "x": "horse",
        "y": 222
      },
      {
        "x": "skateboard",
        "y": 205
      },
      {
        "x": "others",
        "y": 119
      }
    ]
  },
  {
    "id": "germany",
    "data": [
      {
        "x": "plane",
        "y": 168
      },
      {
        "x": "helicopter",
        "y": 4
      },
      {
        "x": "boat",
        "y": 262
      },
      {
        "x": "train",
        "y": 135
      },
      {
        "x": "subway",
        "y": 26
      },
      {
        "x": "bus",
        "y": 147
      },
      {
        "x": "car",
        "y": 278
      },
      {
        "x": "moto",
        "y": 133
      },
      {
        "x": "bicycle",
        "y": 123
      },
      {
        "x": "horse",
        "y": 107
      },
      {
        "x": "skateboard",
        "y": 30
      },
      {
        "x": "others",
        "y": 84
      }
    ]
  },
  {
    "id": "norway",
    "data": [
      {
        "x": "plane",
        "y": 30
      },
      {
        "x": "helicopter",
        "y": 18
      },
      {
        "x": "boat",
        "y": 201
      },
      {
        "x": "train",
        "y": 267
      },
      {
        "x": "subway",
        "y": 15
      },
      {
        "x": "bus",
        "y": 106
      },
      {
        "x": "car",
        "y": 91
      },
      {
        "x": "moto",
        "y": 227
      },
      {
        "x": "bicycle",
        "y": 292
      },
      {
        "x": "horse",
        "y": 53
      },
      {
        "x": "skateboard",
        "y": 256
      },
      {
        "x": "others",
        "y": 64
      }
    ]
  }
]

export default function LineChart({isDashboard=false}) {
  const theme = useTheme();
  return <>
    <Box sx={{height:isDashboard ? '280px':'75vh'}}>
          <ResponsiveLine
            data={data }
            curve="catmullRom"
            theme={
              {
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": theme.palette.text.primary
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
                            "outlineColor": theme.palette.text.primary
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
                            "outlineColor": theme.palette.text.primary
                        }
                    }
                },
                "grid": {
                    "line": {
                        "stroke": theme.palette.divider,
                        "strokeWidth": 0
                    }
                },
                "legends": {
                    "title": {
                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": theme.palette.text.primary
                        }
                    },
                    "text": {
                        "fontSize": 11,
                        "fill":theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": theme.palette.text.primary
                    },
                    "ticks": {
                        "line": {},
                        "text": {
                            "fontSize": 10,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": theme.palette.text.primary
                        }
                    }
                },
                "annotations": {
                    "text": {
                        "fontSize": 13,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 2,
                        "outlineColor": theme.palette.text.primary,
                        "outlineOpacity": 1
                    },
                    "link": {
                        "stroke": theme.palette.text.primary,
                        "strokeWidth": 1,
                        "outlineWidth": 2,
                        "outlineColor": theme.palette.text.primary,
                        "outlineOpacity": 1
                    },
                    "outline": {
                        "stroke": theme.palette.text.primary,
                        "strokeWidth": 2,
                        "outlineWidth": 2,
                        "outlineColor": theme.palette.text.primary,
                        "outlineOpacity": 1
                    },
                    "symbol": {
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 2,
                        "outlineColor": theme.palette.text.primary,
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
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            axisBottom={{ legend:isDashboard ? null : 'transportation', legendOffset: 36 }}
            axisLeft={{ legend:isDashboard ? null : 'count', legendOffset: -50 }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'seriesColor' }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 100,
                    itemWidth: 80,
                    itemHeight: 22,
                    symbolShape: 'circle'
                }
            ]}
        />
    </Box>
  </>
}
