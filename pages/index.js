import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'



const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  height: ${props => props.displayHeight}px;
  background-color: #ffffff;
  font-family: 'Playfair Display', serif;
`
const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  color: #6b6b6b;
`
const Text = styled.div`
  display: flex;
  font-size: 1vw;
  max-width: 60%;
  margin: 10px;
`
const LogoWrapper = styled.div `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  max-width: 60%;
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
                <script
                    dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'UA-96904801-2');
                        `,
                    }}
                />
            </Head>
            <CenterWrapper>
                <LogoWrapper>
                  <Image src='/static/10kLogo.png' width='350px' height='auto' alt='10K logo'/>
                </LogoWrapper>
                <Text> 10K Construction is a full service general contracting company eager to help you with any of your home's needs. We specialize in everything from exterior storm damage insurance claims to full home remodels and everything in between. We service the entire state of Minnesota from your home in the cities to your cabin in northern MN. Residential, Multi-family, or Commercial we have you covered. Our team of experts are trained and certified to provide excellent service with a quick turnaround time due to our industry leading tradesmen in the field. Our length of experience and time in the industry will help guarantee that you will be glad you picked 10K Construction as your general contractor. </Text>
                <Text> We strive to make sure our customers have the smoothest experience possible as our partner throughout the entire process. By doing so, we know that following through is an important quality. That’s why, when we say we’re going to do something, we do it! Not when we have time or when it's convenient for us but when you need it done. Equally important is that we will not sacrifice any quality along the way. At 10K Construction, we'll turn your dream project into reality.</Text>
                <Text> We offer free, no obligation inspections as well as the opportunity to give you a detailed estimate based on the needs of your project at our initial consultation. We will educate you to help you better understand the fine details of the project prior to making a commitment.</Text>
                <Text> We pride ourselves on our customer service and building lasting relationships as we don't view this as a transaction but as a partnership and a relationship for the future. You can rely on us for any construction project you need. We depend heavily on referrals and the best referral comes from someone who has already experienced this first hand and has worked with us. We look forward to hearing from you and about your construction needs. </Text>
                <Text> We are currently under development </Text>
                <Text> Check back for more updates</Text>
            </CenterWrapper>
        </BodyWrapper>
    )
}

export default PlaceHolder



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Image from 'next/image'


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           {/* <Typography variant="h6" className={classes.title}> */}
//           <Button color="inherit">Login</Button>
//           <Image
//             src="/../static/10kLogo.png"
//             alt="10 K construction logo"
//             width={70}
//             height={50}
//           />
//           {/* </Typography> */}
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
