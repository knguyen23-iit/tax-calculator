import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'
import LanguageIcon from '@mui/icons-material/Language';

function NavBar() {
  return (
    <div>
      <div className='navbar-container'>
        <div className='main-logo-container'>
          <Link to='/'>
            <img src="/logo-1.png" />
          </Link>
        </div>

        <div className='links-container'>
          <Link to='/'>
            <div className='button-a-container'>
              <button className='button-a'>Trang Chủ</button>
              <img src="star-1.png" className='icon-button-a' />
            </div>
          </Link>
          <Link to='/luat-thue'>
            <div className="button-b-container">
              <button className='button-b'>Luật Thuế kinh doanh</button>
              <img src="star-1.png" className='icon-button-b' />
            </div>
          </Link>
          <Link to='/ve-chung-toi'>
            <div className="button-c-container">
              <button className='button-c'>Về Chúng tôi</button>
              <img src="star-1.png" className='icon-button-c' />
            </div>
          </Link>
        </div>

        <div className='log-lang-container'>
          <div className="login-button-container">
            <button className='login-button'>Đăng nhập</button>
            <img src="star-1.png" className='top-star' />
            <img src="star-1.png" className='bottom-star' />
          </div>
          <LanguageIcon style={{ fontSize: "28px", marginBottom: "5.5px", marginTop: "5.5px", cursor: "pointer" }} />
        </div>
      </div>
      <hr className='navbar-line' />
    </div>

  )
}

export default NavBar
