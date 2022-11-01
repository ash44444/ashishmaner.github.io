import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Gitub from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: '100%' }} />
      <div className="f-content">
        <span>coderashishmaner@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={'3rem'} />
          <Facebook color="white" size={'3rem'} />

          <a href="https://github.com/ash44444">
            {' '}
            <Gitub color="white" size={'3rem'} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
