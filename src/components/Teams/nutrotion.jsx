import React  from 'react'
import Rania from '../images/Rania.jpg'
import { useTranslation } from 'react-i18next';
import { IoArrowForwardOutline } from 'react-icons/io5';


import './team.css'
function Nutrotion() {
  const { t } = useTranslation();

    const Member = {
        backgroundImage: `url(${[Rania].join(", ")})`,
    backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '200px',
        borderRadius: '50%',
        border: "3px solid #BDE4F4"
      };
  return (
    <div className='Mangement'>

      <h2> {t('BallersT-Title2')} </h2>
      <p> {t('BallersT-Desc2')}  </p>

      <div className='container-mang'> 
        <div className='member'>
            <img src={Rania} alt='Member' style={Member}  className='image-member'/>
            <h4> {t('BallersT-nut1')} </h4>
            <h6> ( {t('BallersT-nut1-desc')} ) </h6>
            <a href='/Rania' style={{borderBottom : "1px dotted red" , fontSize : "14px"}}> {t('BallersT-team-more')}        <IoArrowForwardOutline /> </a>

        </div>
      </div>
      
    </div>
  )
}
export default Nutrotion