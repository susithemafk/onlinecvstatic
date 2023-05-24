import Heading from "@/app/components/Heading"
import styles from '../projectsStyles.module.scss' 
import Button from "@/app/components/Button"

import Image from "next/image"

import hero from '../../assets/projects/teachablewithsimpsons/hero.webp' 
import empty from '../../assets/projects/teachablewithsimpsons/empty.webp'
import result from '../../assets/projects/teachablewithsimpsons/result.webp'

import Link from "next/link"

const page = () => {
    return (
        <div>
            <section className = {`${styles.page} container-medium`}>

                <div className = "heading">
                    <Heading image = {hero} alt = "teachable with simpsons project thumbnail" top = {0} />
                </div> 

                <h1 className = {styles.mainHeading}>teachable with simpsons</h1>
                <p className = {styles.subMainHeading}>JavaScript</p>

                <section className = {styles.description}>
                    <h2>O projektu</h2>
                    <p>Viděl jsem aplikaci Teachable Machine od Google, kde si můžeš natrénovat vlastní model, který poté hodnotí podobnost obrázků, dle tvých vstupů při trénování. To byla věta že:D Jednoduše, natrénoval jsem model, který nyní přijímá obrázkový input a srovnává ho s natrénovanými daty. Pro zajímavost na procenta, zkontroluj konzoli. Projekt je čisté HTML, CSS a JavaScript. </p>
                </section> 

                <section className = {styles.leftSidedRow}>
                    <div className = {styles.content}>
                        <h2>Input</h2>
                        <p>Vize je taková, že uživatel nahraje svoji fotku a zjistí, komu ze Simpsonů je nejvíce podobný. </p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.smallImage}`} style = {{maxHeight: '300px'}}>
                        <Image 
                            src = {empty} 
                            alt = "empty inputs on my projects page" 
                        />
                    </div>
                </section>
                
                <section className = {styles.rightSidedRow}>
                    <div className = {styles.content}>
                        <h2>Výsledek</h2>
                        <p>Po vložení stiskneš spustit a po pár vteřinách dostáváš výsledek. Konkrétní procentuální shoda je k nalezení v konzoli s hodnotami 0:1. </p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.smallImage}`} style = {{maxHeight: '300px'}}>
                        <Image 
                            src = {result} 
                            alt = " result of the inputs after submitting" 
                        />
                    </div>
                </section>

                <div className = {`${styles.link} mt-2`}>
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