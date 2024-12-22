
'use client'
import { useState, useEffect } from 'react'

import Image from "next/image";
import styles from "./page.module.css";




function scrollToNextSection(nextSectionId: string) {
  const nextSection = document.getElementById(nextSectionId);
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Home() {
  const [currentSection, setCurrentSection] = useState(1);
  function TopButtonGroup() {
    return (
      <div className={styles.topButtonGroup}>
        <Image src="/topButtonLeft.png" width={168} height={56} alt="All funds" className={styles.topButtonLeft} onClick={() => {
          alert("all funds")
        }} />
        <Image src="/topButtonRight.png" width={178} height={56} alt="Buy now" className={styles.topButtonRight} onClick={() => {
          alert("buy now")
        }} />
      </div>
    )
  }
  function FirstContent() {
    return (
      <div className={styles.firstContent}>
        <Image src="/ChaToken.png" width={369} height={80} alt="ChaToken" className={styles.topLogo} />
        <TopButtonGroup />
      </div>
    )
  }
  function MiddleContent() {
    return (<div className={styles.backgroundLineContent}>
      <div className={styles.middleContent}>
        <Image src="/middleTextTop.png" width={647} height={97} alt="MoonMeen Fund" className={styles.middleTextTop} />
        <Image src="/middleTextBottom.png" width={735} height={44} alt="The World’s First Meme Fund for Everyone." className={styles.middleTextBottom} />
        <div id='middleButton' onClick={() => {
          alert("middleButton")
        }} className={`${styles.middleButton}`}>
          Secure Your Spot
        </div>
      </div>
    </div>)
  }
  // function FirstContentButtom() {
  //   return()
  // }
  function SecondContent() {
    return (<div id='secondContent' className={styles.secondContent}>
      <div className={styles.secondContentTop}>
        <Image src="/secondTextLeftTop.png" width={522} height={318} alt='Meme Coin Marketcap' className={styles.secondTextLeftTop}></Image>
        <Image src="/secondTextRightTop.png" width={491} height={318} alt='Fundraising Progress' className={styles.secondTextRightTop}></Image>

      </div>
      <div className={styles.secondContentMiddle}>
        <Image src="/secondLeftMiddle.png" width={568} height={568} alt='Meme Coin' className={styles.secondLeftMiddle}></Image>
        <Image src="/secondTextRightMiddle.png" width={747} height={264} alt='Meme Coin' className={styles.secondTextRightMiddle}></Image>

      </div>
      <div className={styles.secondContentBottom}>
        <Image src="/secondTextLeftBottom.png" width={747} height={264} alt='Meme Coin' className={styles.secondTextLeftBottom}></Image>
        <Image src="/secondRightBottom.png" width={450} height={450} alt='Meme Coin' className={styles.secondRightBottom}></Image>

      </div>
    </div>)
  }
  function BottomDivider() {
    return (<div className={styles.bottomDivider}>

    </div>)
  }
  function ButtomContent() {
    return (<div className={styles.thirdContent}>
      <Image src="/bottomText.png" width={735} height={186} alt='MoonMeen Fund' className={styles.thirdContentText}></Image>
      <div className={styles.thirdContentButton} onClick={() => {
        alert("bottomButton")
      }}>Secure Your Spot</div>
    </div>)
  }

  //控制一下自动滚动 
  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.getElementById('middleButton');
      if (section1 && window.scrollY >= section1.offsetTop - window.innerHeight / 8 && currentSection === 1) {
        scrollToNextSection("secondContent");
        setCurrentSection(2);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <div className={styles.page} >

      <FirstContent />
      <MiddleContent />
      <SecondContent />
      <BottomDivider />
      <ButtomContent />
    </div>
  );
}
