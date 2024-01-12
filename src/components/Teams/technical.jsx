import React from 'react'
import Hussien from '../images/hussienTech.png'
import Shahed from '../images/shahdTech.png'
import Amro from '../images/Amro.png'
import Laith from '../images/laithTech.png'
import { useTranslation } from 'react-i18next';
import './team.css'

function Technical() {
    const { t } = useTranslation();


    const Member = {
        backgroundImage: `url(${[Amro, Hussien , Shahed , Laith].join(", ")})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '200px',
        borderRadius: '50%',
        border: "3px solid #BDE4F4",
      };
    return (
        <div className='Mangement'>

        <h2> {t('BallersT-Title1')} </h2>
        <p> {t('BallersT-Desc1')}  </p>
  
        <div className='container-mang'> 
  
  
  <div className='member'>
  
      <img src={Amro} alt='Member' style={Member}  className='image-member'/>
      <h4> {t('BallersT-tech1')} </h4>
      <h6>( {t('BallersT-tech1-desc')} )</h6>
  </div>
  

  <div className='member'>
  
      <img src={Hussien} alt='Member' style={Member}  className='image-member'/>
      <h4> {t('BallersT-tech2')} </h4>
      <h6>( {t('BallersT-tech2-desc')} )</h6>
  </div>
  <div className='member'>
  
      <img src={Shahed} alt='Member' style={Member}  className='image-member'/>
      <h4> {t('BallersT-tech3')} </h4>
      <h6>( {t('BallersT-tech3-desc')} )</h6>
  </div>
  <div className='member'>
  
      <img src={Laith} alt='Member' style={Member}  className='image-member'/>
      <h4> {t('BallersT-tech4')} </h4>
      <h6>( {t('BallersT-tech4-desc')} )</h6>
  </div>
  
  
  
        </div>
          
        </div>
    )

}
export default Technical