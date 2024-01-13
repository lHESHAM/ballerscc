import React  from 'react'
import Amro  from '../images/coachAmro.png'
import Ahmad from '../images/coachAhmad.png'
import { IoArrowForwardOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import './team.css'

 function Coach()  {
  const { t } = useTranslation();

    const Member = {
      backgroundImage: `url(${[ Amro , Ahmad ].join(", ")})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '200px',
      borderRadius: '50%',
      border: "3px solid #BDE4F4",
      };
      
    return (
      <div className='Mangement'>

      <h2> {t('BallersT-Title')}  </h2>
      <p> {t('BallersT-Desc')}  </p>

      <div className='container-mang'> 


    <div className='member'>

        <img src={Amro} alt='Member' style={Member}  className='image-member'/>
        <h4>  {t('BallersT-coach1')}  </h4>
        <h6> (  {t('BallersT-coach1-desc')}  ) </h6>
        <a href='./Amro' style={{borderBottom : "1px dotted red" , fontSize : "14px"}}> {t('BallersT-team-more')} <IoArrowForwardOutline /> </a>
    </div>

    <div className='member'>

        <img src={Ahmad} alt='Member' style={Member}  className='image-member'/>
        <h4> {t('BallersT-coach2')} </h4>
        <h6> ( {t('BallersT-coach2-desc')} ) </h6>
        <a href='./Ahmad' style={{borderBottom : "1px dotted red" , fontSize : "14px"}}> {t('BallersT-team-more')}        <IoArrowForwardOutline /> </a>

    </div>






      </div>
        
      </div>

    )
}
export default Coach

// <div className='icons-person'><a href='./join'> <IoLogoFacebook  />  </a> <a href='./join'> <IoLogoInstagram   />  </a> <a href='./join'> <IoLogoLinkedin  />  </a> </div>
