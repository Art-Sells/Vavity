'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Rules() {
  const [showModal, setShowModal] = useState(true)
  const [isClosing, setIsClosing] = useState(false)
  const [iconClosing, setIconClosing] = useState(false)

  useEffect(() => {
    const iconFadeOutTimer = setTimeout(() => {
      setIconClosing(true)
    }, 500)

    const fadeOutTimer = setTimeout(() => {
      setIsClosing(true)
    }, 1000)

    const closeTimer = setTimeout(() => {
      setShowModal(false)
    }, 2000)

    return () => {
      clearTimeout(iconFadeOutTimer)
      clearTimeout(fadeOutTimer)
      clearTimeout(closeTimer)
    }
  }, [])

  return (
    <main className={styles.main}>
      {showModal && (
        <div className={`${styles.modal} ${isClosing ? styles.modalClosing : ''}`}>
          <div className={styles.modalContent}>
            <Image
              src="/images/Vavity-Icon-Ivory.png"
              alt="Vavity Icon"
              width={40}
              height={40}
              className={`${styles.modalIcon} ${iconClosing ? styles.modalIconClosing : ''}`}
            />
          </div>
        </div>
      )}
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          <Image
            src="/images/Vavity-Icon-Ivory.png"
            alt="Back to Home"
            width={60}
            height={60}
            className={styles.backIcon}
          />
        </Link>
        
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>The Rules of Vavity</h1>
          
          <p className={styles.paragraph}>
            The autonomous system handles the rules, not humans.
          </p>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Autonomous Protections</h2>
            
            <p className={styles.paragraph}>
              Humans don't control the environment, alter the system or introduce volatility so panic doesn't affect others.
            </p>
            
            <p className={styles.paragraph}>
              <strong>Humanity's only contribution is: deciding whether to enter or wait.</strong>
            </p>
            
            <p className={styles.paragraph}>
              Once inside, the system protects humans from their own worst instincts by removing:
            </p>
            
            <ul className={styles.bulletList}>
              <li>loss realization</li>
              <li>fight-or-flight pressures</li>
            </ul>
            
            <p className={styles.paragraph}>This makes Vavity:</p>
            
            <ul className={styles.bulletList}>
              <li>non-manipulable</li>
              <li>non-inflationary</li>
              <li>non-extractive</li>
            </ul>
          </section>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Anchored Upward Limit</h2>
            
            <p className={styles.paragraph}>prevents:</p>
            
            <ul className={styles.bulletList}>
              <li>price hyperinflation</li>
              <li>runaway psychological valuation</li>
              <li>unbounded optimism or mania</li>
            </ul>
          </section>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Self-Limiting</h2>
            
            <ul className={styles.bulletList}>
              <li>Price cannot exceed external reference</li>
              <li>Price cannot fall below imports/purchases</li>
              <li>There is no mechanic that encourages runaway behavior (price hyper-inflation)</li>
            </ul>
          </section>
          
          <section className={styles.section}>
            <h2 className={`${styles.sectionTitle} ${styles.longTitle}`}>Why Previous Bear Market Obfuscating Financial Architectures Failed</h2>
            
            <p className={styles.paragraph}>
              Every failed monetary invention created to eliminate (or limit) investment losses was human dependent:
            </p>
            
            <ul className={styles.bulletList}>
              <li>human trust → issuance → risk</li>
              <li>human hype → exposure → greater collapse potential</li>
            </ul>
            
            <p className={styles.paragraph}>Vavity is:</p>
            
            <ul className={styles.bulletList}>
              <li><strong>autonomous</strong> — technology enforces the rules, not human judgment</li>
              <li><strong>bounded</strong> — prices cannot exceed external reference or fall below imports</li>
              <li><strong>self-limiting</strong> — no endogenous loops that spiral out of control</li>
              <li><strong>non-manipulable</strong> — irrational behavior cannot damage the architecture</li>
            </ul>
          </section>
        </div>
        
        <div className={styles.actions}>
          <Link 
            href="https://github.com/Art-Sells/Vavity/tree/main/Architecture" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            View Architecture
          </Link>
        </div>
      </div>
    </main>
  )
}

