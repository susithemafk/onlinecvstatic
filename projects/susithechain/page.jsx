import Heading from "@/app/components/Heading"
import styles from '../projectsStyles.module.scss' 
import Button from "@/app/components/Button"

import Image from "next/image"

import hero from '../../assets/projects/susithechain/hero2.jpg' 
import create from '../../assets/projects/susithechain/tutorial.jpg' 
import cart from '../../assets/projects/susithechain/cart.png' 
import order from '../../assets/projects/susithechain/order.png'
import success from '../../assets/projects/susithechain/success.png'
import Link from "next/link"

const page = () => {
    return (
        <div>
            <section className = {`${styles.page} container-medium`}>

                <div className = "heading">
                    <Heading image = {hero} alt = "susithechain thumbnail" top = {27} />
                </div> 

                <h1 className = {styles.mainHeading}>susithechain</h1>
                <p className = {styles.subMainHeading}>React</p>

                <section className = {styles.description}>
                    <h2>O projektu</h2>
                    <p>Mimo programování vyrábím řetízky. Přišlo mi jako skvělý nápad umožnit uživateli a vlastně i sám sobě navrhnout si celý řetízek, vidět, jak přibližně bude vypadat a znát cenu spotřebovaného materiálu. Aplikace umožňuje provést objednávku - přidat do košíku, změnit množství, upravit vytvořený řetízek, zvolit dopravu i zaplatit objednávku. Doprava je řešena pomocí API od Zásilkovny, kdy se zobrazí uživateli widget a po potvrzení se jeho vybrané místo propíše do objednávky. Platba je řešena přes PayPal, který nabízí i testovací prostředí, na kterém to i právě nyní jede. Email a heslo k test PayPalu níže. </p>
                </section> 

                <section className = {styles.leftSidedRow}>
                    <div className = {styles.content}>
                        <h2>Projekt</h2>
                        <p>Projekt je čistě můj, vlastní design, kód, napojení externích služeb a další. Nejvíce jsem se naučil právě z toho napojování na API Zásilkovny a PayPalu. Také určitě může uživatele zaujmout interaktivní tutorial, přidaný na stránce /create</p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.smallImage}`}>
                        <Image 
                            src = {hero} 
                            alt = "susithechain project" 
                        />
                    </div>
                </section>
                
                <section className = {styles.rightSidedRow}>
                    <div className = {styles.content}>
                        <h2>Create</h2>
                        <p>Na stránce create se děje to, o čem celý projekt vlastně je. Zde si můžeš pomocí několika tlačítek vytvořit vlastní řetízek. Při prvním načtení stránky tě provede tutorial (neboj, local storage zajistí abys ho viděl fakt jen jednou). </p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.smallImage}`}>
                        <Image 
                            src = {create} 
                            alt = "tutorial page" 
                            style = {{objectPosition: "center bottom"}}
                        />
                    </div>
                </section>
                
                <section className = {styles.leftSidedRow}>
                    <div className = {styles.content}>
                        <h2>Cart</h2>
                        <p>Uživatel si po tvorbě řetízku může projet věci v košíku, vrátit se k navrženému řetízku nebo ho odebrat. Zde se volí doprava a počítá celková cena objednávky. </p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.largeImage}`}>
                        <Image 
                            src = {cart} 
                            alt = "cart page" 
                        />
                    </div>
                </section>
                
                <section className = {styles.rightSidedRow}>
                    <div className = {styles.content}>
                        <h2>Order</h2>
                        <p>Na této stránce uživatel zadává své osobní údaje a pokračuje platbou přes PayPal. </p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.largeImage}`}>
                        <Image 
                            src = {order} 
                            alt = "order page" 
                        />
                    </div>
                </section>

                <section className = {styles.leftSidedRow}>
                    <div className = {styles.content}>
                        <h2>Order finished</h2>
                        <p>Po úspěšném procesu objednávky přijde mně i uživateli email. Také má uživatel možnost si stáhnout fakturu k objednávce a nebo nám napsat zpětnou vazbu. </p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.largeImage}`}>
                        <Image 
                            src = {success} 
                            alt = "order finished page" 
                        />
                    </div>
                </section> 

                <h2 className = "mt-5">Chcete si to zkusit?</h2> 
                <p>Do objednávky se nebojte zadat své pravé údaje, můžete si tak ověřit, že funguje posílání emailu. 
                    <br /><br />
                    Údaje k testovacímu PayPal účtu jsou:
                    <br /><br />
                    susithechain@susithechain.cz <br />
                    12345678
                </p> 

                <div className = {styles.link}>
                    <Link href = "https://susithemafk.github.io/susithechain/" target = "_blank">https://susithemafk.github.io/susithechain/</Link>
                </div>

                <Link href = "/projects">
                    <Button variant = "primary" className = "d-block mx-auto mt-4 mb-5">všechny projekty</Button>
                </Link>


            </section>
        </div>
    )
}

export default page