import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import * as yup from 'yup'
import './style.scss'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import api from 'api'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const CustomTextField = styled(props => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fff !important'
  }
}))

function Login(props) {
  const navigate = useNavigate()

  const account = localStorage.getItem('account')

  const [state, setState] = useState({
    account: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    account: '',
    password: ''
  })

  const handleInputChange = e => {
    const { name, value } = e.target

    setState(prev => ({ ...prev, [name]: value }))
  }

  const handleInputBlur = e => {
    const { name, value } = e.target

    setErrors(prev => ({ ...prev, [name]: !value }))
  }

  const login = async () => {
    try {
      await api.login({
        account: state.account,
        password: state.password
      })
      localStorage.setItem('account', state.account)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (account) {
      navigate('/')
    }
  }, [account])

  return (
    <>
      <div className="login-wrapper"></div>
      <div className="login text-center">
        <NavLink to="/">
          <div className="login-close"></div>
        </NavLink>
        <div className="login-top">
          <img
            className="inline-block"
            src={require('assets/images/logo-2.png')}
            alt="web-logo"
          />
        </div>
        <CustomTextField
          name="account"
          fullWidth
          size="small"
          id="account"
          label="Tài khoản"
          variant="filled"
          error={errors.account}
          helperText={errors.account ? 'Incorrect entry.' : ''}
          value={state.account}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <CustomTextField
          name="password"
          sx={{
            marginTop: '12px'
          }}
          fullWidth
          size="small"
          id="password"
          label="Mật khẩu"
          variant="filled"
          error={errors.password}
          helperText={errors.password ? 'Incorrect entry.' : ''}
          value={state.password}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <Button
          variant="contained"
          sx={{
            width: '100%',
            marginTop: '12px',
            padding: '12px'
          }}
          onClick={login}
        >
          Đăng nhập
        </Button>
        <div className="text-center mt-3">
          <a className="link" href="# ">
            Quên mật khẩu
          </a>
          <p className="m-0" align="center">
            hoặc
          </p>
        </div>
        <div>
          <button
            type="submit"
            className="btn mt-2"
            style={{
              width: '100%',
              backgroundColor: '#3B5998',
              color: 'white',
              padding: '12px',
              borderRadius: '4px'
            }}
          >
            Login with Facebook
          </button>
          <button
            type="submit"
            className="btn my-3"
            style={{
              width: '100%',
              backgroundColor: '#DD4B39',
              color: 'white',
              padding: '12px',
              borderRadius: '4px'
            }}
          >
            Login with Google
          </button>
        </div>
        <div>
          <span>Chưa có tài khoản? </span>
          <a className="link" href="# ">
            Đăng ký ngay.
          </a>
        </div>
      </div>
    </>
  )
}

export default Login
