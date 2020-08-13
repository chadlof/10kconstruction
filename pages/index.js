import React, { useState } from 'react'
import styled from 'styled-components'

const BodyWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    height: 2000px;
    background-color: #e2e2e27a;
    font-family: 'Playfair Display', serif;

    @media only screen and (min-width: 800px) {
        height: 1000px;
}
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
    return (
        <BodyWrapper>
            <CenterWrapper>
                <Title>10<Gold>K</Gold>Construction</Title>
                <Text>We are currently under development </Text>
                <Text>Check back for more updates</Text>
            </CenterWrapper>
        </BodyWrapper>
    )
}

export default PlaceHolder