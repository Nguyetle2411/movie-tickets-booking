import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    success: {
      main: '#7ed321'
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '40px',
          color: '#fff'
        }
      }
    }
  }
})

function CircularProgressWithLabel(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant="determinate"
          {...props}
          value={props.value * 10}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography variant="caption" component="div">
            {props.value}
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default CircularProgressWithLabel
