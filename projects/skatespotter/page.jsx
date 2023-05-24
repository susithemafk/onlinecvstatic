import Heading from "@/app/components/Heading"
import styles from '../projectsStyles.module.scss' 
import Button from "@/app/components/Button"

import Image from "next/image"

import hero from '../../assets/projects/skatespotter/hero.webp' 
import allplaces from '../../assets/projects/skatespotter/allplaces.webp' 
import single from '../../assets/projects/skatespotter/single.webp' 
import account from '../../assets/projects/skatespotter/account.webp' 
import map from '../../assets/projects/skatespotter/map.webp'

import Link from "next/link"

const page = () => {
    return (
        <div>
            <section className = {`${styles.page} container-medium`}>

                <div className = "heading">
                    <Heading image = {hero} alt = "skatespotter thumbnail" top = {0} />
                </div> 

                <h1 className = {styles.mainHeading}>Skatespotter</h1>
                <p className = {styles.subMainHeading}>React</p>

                <section className = {styles.description}>
                    <h2>O projektu</h2>
                    <p>Miluju skateboarding a celou kulturu okolo toho, a tak jsem se rozhodl vytvořit webovou aplikaci pro moje skejťácký kámoše a pro celý skateboarding v Česku. Ve zkratce zde najdeš různé street spoty a skateparky. Uživatel, který se zaregistruje, má i možnost nové spoty přidávat a upravovat, komentovat ostatní a hodnotit. Zatím ještě promýšlím strategii, se kterou budu appku publikovat (myslím tím, jak to pojmu marketingově), takže ji nyní pouze testuji, vylepšuji a konzultuji její budoucnost s kamarády. </p>
                </section> 

                <section className = {styles.leftSidedRow}>
                    <div className = {styles.content}>
                        <h2>Projekt</h2>
                        <p>Projekt jsem dělal celý sám - koncept, design, kód, databáze a vše ostatní. Design jsem dělal v Adobe XD. Aplikace je psaná v Reactu v kombinaci s SASS. NoSQL databáze a autorizace uživatele je řešena přes Firebase. </p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.smallImage}`}>
                        <Image 
                            src = {hero} 
                            alt = "skatespotter project" 
                        />
                    </div>
                </section>
                
                <section className = {styles.rightSidedRow}>
                    <div className = {styles.content}>
                        <h2>Spoty</h2>
                        <p>Stránka se všemi spoty nabídne uživateli projet databázi všech přidaných spotů a skateparků dle vybraných kategorií. Uživatel může také vyhledávat pomocí pole Vyhledej spot - hledání projede název a město. Dále je možnost si spoty seřadit. </p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.smallImage}`}>
                        <Image 
                            src = {allplaces} 
                            alt = "all skate spots page" 
                            // style = {{objectPosition: "center bottom"}}
                        />
                    </div>
                </section>
                
                <section className = {styles.leftSidedRow}>
                    <div className = {styles.content}>
                        <h2>Single spot</h2>
                        <p>Zde se návštěvník dozví něco o konkrétním spotu. Pod příspěvkem je možnost přidat komentář a hodnocení. Uživatel má poté možnost svůj komentář kdykoli smazat. Tvůrce spotu má možnost celý spot smazat či upravit. Nahrané obrázky jsou kompresovány pomocí knihovny browser-image-compression. </p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.largeImage}`}>
                        <Image 
                            src = {single} 
                            alt = "single skate spot page" 
                        />
                    </div>
                </section>
                
                <section className = {styles.rightSidedRow}>
                    <div className = {styles.content}>
                        <h2>Účet</h2>
                        <p>Správa svého účtu je možná na této stránce. Uživatel zde může měnit přezdívku, email, heslo a smazat účet. Komentáře a spoty po uživateli nadále zůstávají označené přezdívkou unknown. </p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.largeImage}`}>
                        <Image 
                            src = {account} 
                            alt = "account page" 
                        />
                    </div>
                </section>

                <section className = {styles.leftSidedRow}>
                    <div className = {styles.content}>
                        <h2>Mapa</h2>
                        <p>Stránka s mapou nabídne uživateli najít spot v jeho blízkosti. Načte si jeho polohu a tam se přesune. Každá kategorie má vlastní ikonku. Info okno nabídne Detail - single post stránku a odkaz na Google Mapy. </p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.largeImage}`}>
                        <Image 
                            src = {map} 
                            alt = "map of skate spots page" 
                        />
                    </div>
                </section> 

                <div className = {styles.link}>
                    <Link href = "https://susithemafk.github.io/susiskatespotter/" target = "_blank">https://susithemafk.github.io/susiskatespotter/</Link>
                </div>

                <Link href = "/projects">
                    <Button variant = "primary" className = "d-block mx-auto mt-4 mb-5">všechny projekty</Button>
                </Link>


            </section>
        </div>
    )
}

export default page