/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'
import {CardsComponent} from './styles'

const Cards = () => {
  return (
    <Fragment>
        <CardsComponent>
              <div className='Primary'>
                <img src="/images/iconUI.svg" alt="iconUI" />
                <h1>UI / UX</h1>
                <h2>DESIGNING</h2>
              </div>
              <div>
                <img src="/images/code.svg" alt="iconCode" />
                <h1>WEB <br /> DEVELOPMENT</h1>
              </div>
              <div>
                <img src="/images/android.svg" alt="iconAndroid" />
                <h1>MOBILE <br /> DEVELOPMENT</h1>
              </div>
              <div>
                <img src="/images/python.svg" alt="iconPython" />
                <h1>WEB SCRAPING <br /> WITH PYTHON</h1>
              </div>
        </CardsComponent>
    </Fragment> 
  )
}

export default Cards