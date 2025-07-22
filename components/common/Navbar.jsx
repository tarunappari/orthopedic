"use client";
import React from 'react'
import styles from '@/styles/common/Navbar.module.scss'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';


const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {/* <Link href='/'><Image src={logo} alt="logo" width={255}height={150} /></Link> */}
                Ortho
            </div>
            <div className={pathname === "/about" ? styles.whiteLinks : ""}>
                <Link href="#about" >About</Link>
                <Link href="#services">Services</Link>
                <Link href="#doctor">Doctors</Link>
                <Link href="#contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;