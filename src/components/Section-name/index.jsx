/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'
import Buttons from '../Buttons/styles'
import { SectionContainer } from './styles'

const SectionName = () => {
    return (
        <Fragment>
            <SectionContainer>
                <div className='content'>
                    <div className="name">
                        <div className="text">
                            <h2>Hello, im</h2>
                            <h1>Ryanvs</h1>
                            <p>Experiences in front-end development and web design always abreast of new developments to create interfaces following modern and advanced concepts.</p>
                            <div className="buttons">
                                <Buttons>About me</Buttons>
                                <Buttons className="projects">Projects</Buttons>
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <img src="/images/ryanvslogo.png" alt="logo" />
                    </div>
                </div>
            </SectionContainer>
        </Fragment>
    )
}

export default SectionName