import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import { Box, useTheme } from '@mui/material'
import { geo } from './world_countries'
import { data } from './data'
export default function GeographyChart() {
  const theme = useTheme();
  return <>
    
    <Box sx={{height:'75vh' , borderRadius:5 , border: `1px solid ${theme.palette.text.primary}`}}>
          <ResponsiveChoropleth
          projectionScale={150}
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
            data={data}
            features= {geo.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="spectral"
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            enableGraticule={false}
            graticuleLineColor="#dddddd"
            borderWidth={0.5}
            borderColor="#152538"
            legends={[
          {
              anchor: 'bottom-left',
              direction: 'column',
              justify: true,
              translateX: 20,
              translateY: -30,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: 'left-to-right',
              itemTextColor: theme.palette.text.primary,
              itemOpacity: 0.85,
              symbolSize: 18
          }
            ]}
    
        />
        </Box>
  
  </>
}
