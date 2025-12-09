import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.logoPlaceholder}>
            <Image
              src="/images/Vavity-Icon-Ivory.png"
              alt="Vavity Icon"
              width={200}
              height={100}
              className={styles.logoImage}
            />
          </div>
          
          <h1 className={styles.title}>VAVITY</h1>
          
          <p className={styles.description}>
            <strong>An autonomous financial system that anchors asset prices before they fall.</strong>
          </p>
          
          <ul className={styles.list}>
            <li>This is accomplished by removing human psychology from financial systems.</li>
          </ul>
          
          <p className={styles.paragraph}>
            Bear markets are a human psychology issue, not a technical issue, so Vavity solves loss aversion psychologically through technical autonomy. By eliminating bear markets, Vavity introduces a new kind of marketplace and market dynamics:
          </p>
          
          <div className={styles.marketplaceSection}>
            <div className={styles.logoPlaceholder}>
              {/* Placeholder for Solid Marketplace logo */}
              <div className={styles.logoBox}>Solid Marketplace Logo</div>
            </div>
            <p className={styles.marketplaceItem}>
              <strong>Solid Marketplace:</strong> a marketplace in which investments either stagnate or increase.
            </p>
          </div>
          
          <div className={styles.marketplaceSection}>
            <div className={styles.logoPlaceholder}>
              <Image
                src="/images/Sloth.png"
                alt="Sloth Market Logo"
                width={200}
                height={100}
                className={styles.logoImage}
              />
            </div>
            <p className={styles.marketplaceItem}>
              <strong>Sloth Market:</strong> a market in which investments stagnate.
            </p>
          </div>
          
          <div className={styles.actions}>
            <Link href="/rules" className={styles.readMoreButton}>
              Read More
            </Link>
            
            <Link 
              href="https://github.com/Art-Sells/Vavity" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              View Architecture
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
