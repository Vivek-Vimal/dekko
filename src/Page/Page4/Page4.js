import React, { useEffect, useState } from 'react'
import './Css.css'
import styled from 'styled-components'
import img from '../Page1/whaLe.png'
import { motion } from 'framer-motion'
import theme from 'styled-theming';
import i from './Elements.svg'
import { FcPlus } from 'react-icons/fc';
import { FaMinusCircle } from 'react-icons/fa';
import { useWallet } from 'use-wallet'
import { useDispatch, useSelector } from 'react-redux'
import { Trr } from '../Page2/Page2'

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});


const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden !important;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: radial-gradient(circle, #000000, #0d0d0d, #161617, #1d1d1e, #232526);
    @media only screen and (max-width: 768px) {
        min-height: 100vh;
        padding: 2rem 0;
        
        justify-content: space-around;
      }
`;

const Width = styled.div`
      width: 1700px;
      display: flex;
        
        align-items: center;
        justify-content: space-between;
      @media only screen and (max-width: 1900px) {
        width: 97%;
      }
    @media only screen and (max-width: 1400px) {
        width: 99%;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }

`

const Left = styled.div`
        margin-right: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 50%;
        @media only screen and (max-width: 1100px) {
          
          width: 95%;
      }
    @media only screen and (max-width: 768px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
        height: auto;
      }
`;

const Right = styled.div`
      margin-left: 2rem;
      display: flex;
      width: 50%;
      flex-direction: column;
      
    
    @media only screen and (max-width: 1100px) {
    
      width: 95%;
      justify-content: center;
  }
      @media only screen and (max-width: 768px) {
        width: 100%;
        height: auto;
        margin-left: 0;
        padding: 0 1rem;
       align-items: center;
      }
`;

const T = styled.p`
    color: #E5E5E5;
    font-weight: 500;
    font-size: 1.2rem;
    margin: 2rem 0.2rem;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
      }
`;

const Ts = styled.p`
    color: #E5E5E5;
    font-weight: 500;
    font-size: 1rem;
    margin: 2rem 0.2rem;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
      }
`;

const Tu = styled(Trr)`
      text-align: center;
      margin-bottom: 1rem;
`

const Tm = styled.p`
    color: #E5E5E5;
    font-weight: 500;
    font-size: 1.2rem;
    margin: 5rem 1rem 2rem 1rem;
    max-width: 1600px;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
      }
      @media only screen and (max-width: 600px) {
        margin: 3rem 1rem 2rem 1rem;
      }
`;

const Image = styled.div`
      width: 20rem;
       position: relative;
    display: flex;
  
    align-items: center;
    justify-content: center;
      @media only screen and (max-width: 768px) {
        width: 80%;
      }

      @media only screen and (max-width: 600px) {
        width: 85%;
      }
`
const SmBox = styled.div`
      margin: 0 2rem 0 0;
      width: 10rem;
      border-radius: 1.5rem;
      background-color: rgba(255, 255, 255, .15);  
      backdrop-filter: blur(5px);
      @media only screen and (max-width: 768px) {
        margin: 2rem 0 0 0;
       
      }
`;

const Upper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    
   
    padding: 0 0.5rem;
    height: 4rem;
    @media only screen and (max-width: 768px) {
        
      
        
      }
`;

const Button = styled(motion.button)`
      background-color: red;
      color: #E5E5E5;
      border-radius: 1.5rem;
      cursor: pointer;
      padding: 0.8rem 2rem;
      border: none;
      font-size: 1.5rem;
      max-width: 14rem;
      margin: 2rem  0 0 0;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`
const Flex = styled.div`
      display: flex;
      align-items: center;
    //   margin: 2rem 0.2rem;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`



const Page4 = () => {

  const [priceForNft, setpriceForNft] = useState(0);
  const [value, setvalue] = useState(0);

  const [noOfNFT, setNoOfNFT] = useState(null);


  const wallet = useWallet()
  const darkThemeEnabled = useSelector((state) => state.darkThemeEnabled);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const contract = useSelector(state => state.contract);
  const [noOfToken, setnoOfToken] = useState(0);
  const [price1, setprice1] = useState("");

  const [price, setprice] = useState(0);
  const handleMint = async () => {
    setloading(true);
    if (noOfNFT == 0) {
      alert("No. of token can not be zero");
      setloading(false);
    } else {
      const tx = await contract.methods.mint(noOfNFT).send({
        from: wallet.account,
        value: noOfNFT * price1 * 10 ** 18
      })
      console.log(tx);
      if (tx.status) {
        setloading(false);
        alert("Transaction Successfull");
      } else {
        setloading(false);
        alert("Transaction Failed")
      }
    }
  }


  const showButtonTop = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 600) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }




  const getPrice = async (number) => {
    if (contract) {
      if (true) {
        let price = await contract.methods.alistPrice().call();
        // return price;
        setprice1(price / 10 ** 18)
      }

    }
  }


  useEffect(() => {
    showButtonTop()
    // adding the event when scroll change background
    window.addEventListener("scroll", showButtonTop)
  })

  useEffect(() => {
    getPrice();
    // getPrice(2);
    // getPrice(3);
    // getPrice(4);
    // getPrice(5);

  }, [darkThemeEnabled, contract])

  useEffect(() => {
    console.log(darkThemeEnabled, "theme");
  }, [darkThemeEnabled])


  const handleInput = (e) => {
    if (e.target.value != "") { setnoOfToken(e.target.value); } else {
      setnoOfToken(e.target.value)
    }
  }

  const calculatePriceToken = async (token) => {
    if (token !== 0) {
      const priceForToken = await contract.methods.calculatePrice(token).call();
      setprice(priceForToken);
      console.log(priceForToken);
    } else {
      alert("Token amount cant be zero")
    }
  }

  const renderButton = () => {
    if (wallet.status == "connected") {
      if (loading) {
        return (
          <Button
            type="button"
          >
            Loading ...
          </Button>
        )
      } else {
        return (
          <div style={{ textAlign: "center" }}>
            {/* <div>
              <div style={{ display: "flex" }}>
                <input type="number" value={noOfToken} style={{ padding: "20px", borderRadius: "20px", fontSize: "22px", marginBottom: "20px" }} onChange={(e) => {
                  handleInput(e)
                }} />
              </div>
            </div> */}
            {/* {
              price !== 0 && <div style={{ marginBottom: "10px" }}>
                You have to pay {price / 10 ** 18}
              </div>
            } */}
            <Button
              whileHover={{ scale: 1.1, boxShadow: "0 0 25px 	#000" }}
              whileTap={{ scale: 0.7 }}
              type="button"
              onClick={() => { handleMint() }}
            >
              MINT NOW
            </Button>
          </div>

        )
      }
    } else {
      return (

        <Button
          onClick={() => { wallet.connect() }}
          type="button"
          whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgb(250, 0, 117)" }}
          whileTap={{ scale: 0.7 }}
        >
          CONNECT
        </Button >
      )
    }
  }


  return (
    <Sec>
      <Width>
        <Left
          initial={{ x: 0, y: 0 }}
          animate={{ x: 25, y: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", }}
        >
          <img src={i} alt="" style={{ width: "100%", height: "100%" }} />
        </Left>
        <Right
          data-aos="fade-left"
        >
          <Image>
            <img src={i} alt="" style={{ width: "100%", height: "100%" }} />
          </Image>
          <T>
            Buying a Dekko Hero costs 0.07 ETH. Once sold out on our website, you can purchase a Dekko Hero from Opensea.

          </T>
          <Flex>
            <SmBox>
              <Upper>
                <FaMinusCircle className="iconL" onClick={() => {
                  if (noOfNFT > 0) {
                    setNoOfNFT(noOfNFT - 1)
                  }
                }} />

                <input placeholder="0" value={noOfNFT} style={{ width: "70%", height: "60%", border: "none", fontSize: "1.5rem", textAlign: "center", backgroundColor: "transparent", color: "#E5E5E5" }} onChange={(e) => {
                  setpriceForNft(parseInt(e.target.value) * price1 || 0);
                  setNoOfNFT(parseInt(e.target.value))
                  setvalue(e.target.value)
                }} type="number" />

                <FcPlus className="iconR" onClick={() => {
                  if (noOfNFT < 7) {
                    setNoOfNFT(noOfNFT + 1)
                  }
                }}
                />
              </Upper>
            </SmBox>
            <Ts>Enter the amount of Dekko you would like to buy(7 max)</Ts>
          </Flex>
          {renderButton()}
          {/* <Button
          type="button"
          whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgb(250, 0, 117)" }}
          whileTap={{ scale: 0.7 }}
        >
          Mint Now
        </Button> */}
        </Right>
      </Width>
      <Tm>
        Note: 500 Dekkos are being withheld from the sale. These will be used as rewards for our amazing staff who will fuel our community, giveaways to drive traffic toward the project and as random acts of love for our amazing Dekko Hero Members in the future.
      </Tm>
    </Sec>
  )
}

export default Page4
