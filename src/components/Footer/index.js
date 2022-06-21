import React from 'react'
import './style.scss'

export default function Footer() {
  return (
    <div className="footer">
      <div className="container mx-auto" style={{ maxWidth: '940px' }}>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="mb-4">TIX</p>
            <a className="d-block mb-2" href="# ">
              FAQ
            </a>
            <a className="d-block mb-2" href="# ">
              Brand Guidelines
            </a>
          </div>
          <div className="flex flex-col">
            <a className="d-block mt-8 mb-2" href="# ">
              Thỏa thuận sử dụng
            </a>
            <a className="d-block mb-2" href="# ">
              Quy chế hoạt động
            </a>
            <a className="d-block mb-2" href="# ">
              Chính sách bảo mật
            </a>
            <a className="d-block mb-2" href="# ">
              Quyền lợi thành viên
            </a>
          </div>
          <div className="flex flex-col">
            <p className="mb-4">ĐỐI TÁC</p>
            <div className="text-center">
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/cgv.png')}
                  alt="partner-logo"
                />
              </div>
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/bhd.png')}
                  alt="partner-logo"
                />
              </div>
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/galaxycine.png')}
                  alt="partner-logo"
                />
              </div>
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/cinestar.png')}
                  alt="partner-logo"
                />
              </div>
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/404b8c4b80d77732e7426cdb7e24be20.png')}
                  alt="partner-logo"
                />
              </div>
            </div>
            <div className="text-center mb-3">
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/megags.png')}
                  alt="partner-logo"
                />
              </div>
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/bt.jpg')}
                  alt="partner-logo"
                />
              </div>
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/dongdacinema.png')}
                  alt="partner-logo"
                />
              </div>
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/TOUCH.png')}
                  alt="partner-logo"
                />
              </div>
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/cnx.jpg')}
                  alt="partner-logo"
                />
              </div>
            </div>
            <div className="text-center mb-3">
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/STARLIGHT.png')}
                  alt="partner-logo"
                />
              </div>
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/dcine.png')}
                  alt="partner-logo"
                />
              </div>
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/zalopay_icon.png')}
                  alt="partner-logo"
                />
              </div>
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/payoo.jpg')}
                  alt="partner-logo"
                />
              </div>
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/VCB.png')}
                  alt="partner-logo"
                />
              </div>
            </div>
            <div className="text-center mb-3">
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/AGRIBANK.png')}
                  alt="partner-logo"
                />
              </div>
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/VIETTINBANK.png')}
                  alt="partner-logo"
                />
              </div>
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/IVB.png')}
                  alt="partner-logo"
                />
              </div>
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/123go.png')}
                  alt="partner-logo"
                />
              </div>
              <div className="cursor-pointer inline-block">
                <img
                  className="partner-logo"
                  src={require('assets/images/logo/laban.png')}
                  alt="partner-logo"
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="mb-4">MOBILE APP</p>
            <div className="cursor-pointer inline-block">
              <img
                className="icon-app"
                src={require('assets/images/logo/apple-logo.png')}
                alt="icon-app"
              />
            </div>
            <div className="cursor-pointer inline-block">
              <img
                className="icon-app"
                src={require('assets/images/logo/android-logo.png')}
                alt="icon-app"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="mb-4">SOCIAL</p>
            <div className="cursor-pointer inline-block">
              <img
                className="icon-social"
                src={require('assets/images/logo/facebook-logo.png')}
                alt="icon-social"
              />
            </div>
            <div className="cursor-pointer inline-block">
              <img
                className="icon-social"
                src={require('assets/images/logo/zalo-logo.png')}
                alt="icon-social"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
