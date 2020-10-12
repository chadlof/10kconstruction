import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Head from 'next/head'


const BodyWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    height: ${props => props.displayHeight}px;
    background-color: #e2e2e27a;
    font-family: 'Playfair Display', serif;


`
const CenterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    color: #6b6b6b;
`
const Title = styled.div`
    display: flex;
    font-size: 8vw;
    padding-bottom: 20px;
    align-items: baseline;

`
const Gold = styled.div`
    font-size: 10vw;
    color: #D4AF37;
    position: relative;
	text-transform: uppercase;	
	font-weight: 400;

`
const Text = styled.div`
    display: flex;
    font-size: 4vw;
`
    

const PlaceHolder = () => {
    const [windowHeight, setWindowHeight] = useState(2000)
    useEffect(() => {
            setWindowHeight(window.innerHeight)
      })
        const displayHeight = windowHeight + 200
    return (
        <BodyWrapper displayHeight={displayHeight}>
            <Head>
                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-96904801-2"></script>
                <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-96904801-2');
                </script>
            </Head>
            <CenterWrapper>
                <Title>10<Gold>K</Gold>Construction</Title>
                <Text>We are currently under development </Text>
                <Text>Check back for more updates</Text>
            </CenterWrapper>
        </BodyWrapper>
    )
}

export default PlaceHolder