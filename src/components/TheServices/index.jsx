/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'
import { TheServicesComponent } from './styles'

const TheServices = () => {
  return (
    <Fragment>
        <TheServicesComponent>
            <h1>The services i offer:</h1>
            <div className='services'>
              <div>
                <img src="/images/iconUI.svg" alt="iconUI" />
                <h1 className='services-title-white'>UI / UX DESIGNING</h1>
                <p>I design beautiful web iterfaces with Figma and Adove XD</p>
              </div>
              <div className='box-white'>
                <img src="/images/code.svg" alt="iconCode" />
                <h1 className='services-title-white'>WEB DEVELOPMENT</h1>
                <p>I create beautiful iterfaces with simple HTML, CSS, e JavaScript and also frameworks like Angular and ReactJS</p>
              </div>
              <div>
                <img src="/images/android.svg" alt="iconPython" />
                <h1 className='services-title-white'>MOBILE DEVELOPMENT</h1>
                <p>I am an expert mobile developer. I have experience using Flutter and React Native.</p>
              </div>
            </div>

            <div className='services two'>
              <div className='box-white'>
                <img src="/images/iconUI.svg" alt="iconUI" />
                <h1 className='services-title-white'>UI / UX DESIGNING</h1>
                <p>I design beautiful web iterfaces with Figma and Adove XD</p>
              </div>
              <div>
                <img src="/images/code.svg" alt="iconCode" />
                <h1 className='services-title-white'>WEB DEVELOPMENT</h1>
                <p>I create beautiful iterfaces with simple HTML, CSS, e JavaScript and also frameworks like Angular and ReactJS</p>
              </div>
              <div className='box-white'>
                <img src="/images/android.svg" alt="iconPython" />
                <h1 className='services-title-white'>MOBILE DEVELOPMENT</h1>
                <p>I am an expert mobile developer. I have experience using Flutter and React Native.</p>
              </div>
            </div>
          </TheServicesComponent>
    </Fragment>
  )
}

export default TheServices
