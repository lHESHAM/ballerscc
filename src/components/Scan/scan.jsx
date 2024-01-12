import React from 'react'
import Facebook from '../images/Facbook.png'
import Whatsapp from '../images/Whatsap.png'
import Instagram from '../images/Instagram.png'
import { useTranslation } from 'react-i18next';
import './scan.css'

function Scan() {
  const { t } = useTranslation();

  return (
    <div className='container-scan'>
      <h1 className='speacial-heading'>{t('SCAN.TITLE')}</h1>

        <div className='sacns'>
            <img
            src={Facebook}
            alt="Barcode"
            style={{ width: "300px", 
            height: "300px",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10%',
            border: "5px solid #587693" ,
            padding : "10px"

            }}
        />
            <img
            src={Instagram}
            alt="Barcode"
            style={{ width: "300px", 
            height: "300px",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10%',
            border: "5px solid #6E467C" ,
            padding : "10px" 
            }}
        />
            <img
            src={Whatsapp}
            alt="Barcode"
            style={{ width: "300px", 
            height: "300px",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10%',
            border: "5px solid #3E7E6A" ,
            padding : "10px" 
            }}
        />

        </div>


    </div>
  )
}
export default Scan