import Heading from "@/app/components/Heading"
import styles from '../projectsStyles.module.scss' 
import Button from "@/app/components/Button"

import Image from "next/image"

import hero from '../../assets/projects/podlahy-sucharda/hero.webp' 
import services from '../../assets/projects/podlahy-sucharda/services.webp' 
import seo from '../../assets/projects/podlahy-sucharda/seo.webp'

import Link from "next/link"

const page = () => {
    return (
        <div>
            <section className = {`${styles.page} container-medium`}>

                <div className = "heading">
                    <Heading image = {hero} alt = "podlahy-sucharda website thumbnail" top = {0} />
                </div> 

                <h1 className = {styles.mainHeading}>Podlahy Sucharda</h1>
                <p className = {styles.subMainHeading}>PHP, WordPress</p>

                <section className = {styles.description}>
                    <h2>Popis</h2>
                    <p>Můj taťka i starší brácha dělají podlahy a já teda jsem se dal spíše směrem k technologiím a abych jim tedy alespoň nějak pomohl, vytvořil jsem jim webové stránky. Jedná se o custom šablonu v PHP pro Wordpress, díky němuž můžeme jednodušeji postovat blogové články. </p>
                </section> 

                <section className = {styles.leftSidedRow}>
                    <div className = {styles.content}>
                        <h2>Projekt</h2>
                        <p>Jedná se o prezentační web se zaměřením na podlahářské služby. </p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.smallImage}`} style = {{maxHeight: '300px'}}>
                        <Image 
                            src = {services} 
                            alt = "services section on podlahy-sucharda page" 
                        />
                    </div>
                </section>
                
                <section className = {styles.rightSidedRow}>
                    <div className = {styles.content}>
                        <h2>SEO</h2>
                        <p>Na co jsem se v tomto projektu zaměřil nejvíc byla právě rychlost a SEO. S výsledky tohoto měření jsem velice spokojen a myslím že hodně webů by takovéto rychlosti chtělo dosáhnout. </p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.smallImage}`} style = {{maxHeight: '300px'}}>
                        <Image 
                            src = {seo} 
                            alt = "seo results for podlahy-sucharda page" 
                        />
                    </div>
                </section>

                <div className = {`${styles.link} mt-2`}>
                    <Link href = "https://podlahy-sucharda.cz/" target = "_blank">https://podlahy-sucharda.cz/</Link>
                </div>

                <Link href = "/projects">
                    <Button variant = "primary" className = "d-block mx-auto mt-4 mb-5">všechny projekty</Button>
                </Link>


            </section>
        </div>
    )
}

export default page