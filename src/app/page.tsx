
'use client'
import { useState, useEffect } from 'react'

import Image from "next/image";
import styles from "./page.module.css";
import { sendGAEvent } from '../../components/GoogleAnalytics';




function scrollToNextSection(nextSectionId: string) {
  const nextSection = document.getElementById(nextSectionId);
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Home() {
  const [currentSection, setCurrentSection] = useState(1);
  /**
   * 
   * @returns 顶部右侧按钮组
   */
  function TopButtonGroup() {
    return (
      <div className={styles.topButtonGroup}>
        <Image src="/topButtonLeft.png" width={168} height={56} alt="All funds" className={styles.topButtonLeft} onClick={() => {
          sendGAEvent("test1", {
            "title1": "hellow",
            "title2": "success",
            "value": 1
          })
          alert("all funds")
        }} />
        <Image src="/topButtonRight.png" width={178} height={56} alt="Buy now" className={styles.topButtonRight} onClick={() => {
          alert("buy now")
        }} />
      </div>
    )
  }
  /**
   * 
   * @returns 第一页面容器
   */
  function FirstContent() {
    return (
      <div className={styles.firstContent}>
        <Image src="/ChaToken.png" width={369} height={80} alt="ChaToken" className={styles.topLogo} />
        <TopButtonGroup />
      </div>
    )
  }
  /**
   * 
   * @returns 第一页面中部容器
   */
  function MiddleContent() {
    return (<div className={styles.backgroundLineContent}>
      <div className={styles.middleContent}>
        <div className={styles.middleTextTopContent}>
          <div className={styles.middleTextTopLeft}>
            MoonMeen
          </div>
          <div className={styles.middleTextTopRight}>
            Fund
          </div>
        </div>
        <div className={styles.middleTextBottomContent}>
          <div className={styles.middleTextBottom}>
            The World’s First Meme Fund for Everyone.
          </div>
        </div>
        <div id='middleButton' onClick={() => {
          alert("middleButton")
        }} className={`${styles.middleButton}`}>
          Secure Your Spot
        </div>
      </div>
    </div>)
  }
  /**
   * 
   * @returns 第一页面底部跑马灯
   */
  function FirstContentButtom() {
    return (
      <div>
        <gecko-coin-price-marquee-widget locale="en" dark-mode="true" coin-ids="limitus,pudgy-penguins,hyperliquid,odos" initial-currency="usd"></gecko-coin-price-marquee-widget>
      </div>)
  }
  /**
   * 
   * @returns 第二页面容器
   */
  function SecondContent() {
    return (<div id='secondContent' className={styles.secondContent}>
      <div className={styles.secondContentTop}>

        <div className={styles.secondTextLeftTopContent}>
          <div className={styles.secondTextLeftTopTop}>Meme Coin Marketcap</div>
          <div className={styles.secondTextLeftTopMiddle}>110%+</div>
          <div className={styles.secondTextLeftTopBottom}>growth in the last 30d</div>
        </div>
        <div className={styles.secondTextRightTopContent}>
          <div className={styles.secondTextRightTopTop}>Fundraising Progress</div>
          <div className={styles.secondTextRightTopMiddle}>64%</div>
          <div className={styles.secondTextRightTopBottom}>spot has been claimed</div>
        </div>
      </div>
      <div className={styles.secondContentMiddle}>
        <Image src="/secondLeftMiddle.png" width={568} height={568} alt='Meme Coin' className={styles.secondLeftMiddle}></Image>
        <div className={styles.secondTextRightMiddle}>
          MoonMeme Fund is the world’s first publicly accessible meme-focused investment fund. Now, everyone can join the meme token revolution and share in the profits of this thriving market.
        </div>
      </div>
      <div className={styles.secondContentBottom}>
        <div className={styles.secondTextLeftBottom}>
          With no minimum investment required, you can secure your spot today using either card or crypto. The fund launches as soon as we hit our $10M target—don’t miss your chance to be part of this groundbreaking opportunity!
        </div>
        <Image src="/secondRightBottom.png" width={450} height={450} alt='Meme Coin' className={styles.secondRightBottom}></Image>
      </div>
    </div>)
  }
  /**
   * 
   * @returns 底部分割线 
   */
  function BottomDivider() {
    return (<div className={styles.bottomDivider}></div>)
  }
  /**
   * 
   * @returns 第三页面容器
   */
  function ThirdContent() {
    return (<div className={styles.thirdContent}>
      <div className={styles.thirdTextContent}>
        <div className={styles.thirdTextTopContent}>
          <div className={styles.thirdTextTopLeft}>
            MoonMeen
          </div>
          <div className={styles.thirdTextTopRight}>
            Fund
          </div>
        </div>
        <div className={styles.thirdTextBottomContent}>
          <div className={styles.thirdTextBottom}>
            The World’s First Meme Fund for Everyone.
          </div>
        </div>
      </div>

      {/* <Image src="/bottomText.png" width={735} height={186} alt='MoonMeen Fund' className={styles.thirdContentText}></Image> */}
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
      <FirstContentButtom />
      <SecondContent />
      <BottomDivider />
      <ThirdContent />
    </div>
  );
}
