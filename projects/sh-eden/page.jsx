import Heading from "@/app/components/Heading"
import styles from '../projectsStyles.module.scss' 
import Button from "@/app/components/Button"

import Image from "next/image"

import hero from '../../assets/projects/sh-eden/hero_main.webp' 
import cenik from '../../assets/projects/sh-eden/cenik.webp' 
import admin from '../../assets/projects/sh-eden/admin.webp'

import Link from "next/link"

const page = () => {
    return (
        <div>
            <section className = {`${styles.page} container-medium`}>

                <div className = "heading">
                    <Heading image = {hero} alt = "sh-eden website thumbnail" top = {0} />
                </div> 

                <h1 className = {styles.mainHeading}>SH Eden</h1>
                <p className = {styles.subMainHeading}>PHP, WordPress</p>

                <section className = {styles.description}>
                    <h2>Popis</h2>
                    <p>Stránky pro domov seniorů Eden jsem dělal už pracovně ve firmě Grapefruit. Jelikož jsem ale web vytvářel úplně celý, myslím, že si zaslouží být mezi mými projekty. </p>
                </section> 

                <section className = {styles.leftSidedRow}>
                    <div className = {styles.content}>
                        <h2>Projekt</h2>
                        <p>Web je tvořen pro zájemce nebo blízké zájemce o ubytování v centru SH Eden. </p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.smallImage}`} style = {{maxHeight: '300px'}}>
                        <Image 
                            src = {hero} 
                            alt = "main section on sh-eden page" 
                        />
                    </div>
                </section>
                
                <section className = {styles.rightSidedRow}>
                    <div className = {styles.content}>
                        <h2>Jednoduchost</h2>
                        <p>Stránky mají krásný klidný design a jde z nich cítit jednoduchost. Uživatel se nemá kde ztratit a dozví se vše co potřebuje. </p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.smallImage}`} style = {{maxHeight: '310px'}}>
                        <Image 
                            src = {cenik} 
                            alt = "pricing page on sh-eden webpage" 
                        />
                    </div>
                </section>
                
                <section className = {styles.leftSidedRow}>
                    <div className = {styles.content}>
                        <h2>Administrace</h2>
                        <p>Weby tvořím s myšlenkou, aby si mohl klient základní části webu upravovat sám. Všechny texty na webu je klient schopen měnit bez možnosti „něco zničit“. </p>
                    </div>
                    <div className = {`${styles.imgWrapper} ${styles.smallImage}`} style = {{maxHeight: '240px'}}>
                        <Image 
                            src = {admin} 
                            alt = "administration page for sh-eden webpage" 
                        />
                    </div>
                </section>

                <div className = {`${styles.link} mt-2`}>
                    <Link href = "https://sheden.grapefruit.cz/" target = "_blank">https://sheden.grapefruit.cz/</Link>
                </div>

                <Link href = "/projects">
                    <Button variant = "primary" className = "d-block mx-auto mt-4 mb-5">všechny projekty</Button>
                </Link>


            </section>
        </div>
    )
}

export default page