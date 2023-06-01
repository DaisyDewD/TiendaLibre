import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Header.module.css";
import { useRouter } from "next/router";
import {
  TEXTS_BY_LANGUAGE,
  defaultLocale,
  locales,
  localeNames,
} from "../../locale/constants";

const Header: FC = () => {
  const { locale, asPath } = useRouter();

  const { HEADER } =
    TEXTS_BY_LANGUAGE[
      (locale || defaultLocale) as keyof typeof TEXTS_BY_LANGUAGE
    ];
  // tomo como default el locale en inglés
  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        <div className={styles.logo}>
          <figure>
            <a href={asPath} >
            <Image src="/logo.png"  alt="logo" width={50} height={50} /></a>
          </figure>
          <div className={styles.appName}>
          <a href={asPath} >
        <p>Tienda</p>
        <p>Libre</p></a>
      </div>
        </div>
        <div className={styles.navbar}>
          <Link href="./">{HEADER.PRODUCTS}</Link>
          <Link href="./tycs">{HEADER.TYCS}</Link>
        </div>
      </div>
      <div className={styles.localeSwith}>
        <Link href={asPath} locale={locales.ES_ES}>
          <a>
            <Image
              src="/español.png"
              alt="espanish"
              width={20}
              height={20}
              layout="fixed"
            />
            {localeNames[locales.ES_ES as keyof typeof localeNames]}
          </a>
        </Link>
        <Link href={asPath} locale={locales.EN_US}>
          <a>
            <Image
              src="/english.png"
              alt="english"
              width={20}
              height={20}
              layout="fixed"
            />
            {localeNames[locales.EN_US as keyof typeof localeNames]}
          </a>
        </Link>
        <Link href={asPath} locale={locales.PT_BR}>
          <a>
            <Image
              src="/portugues.png"
              alt="Português"
              width={20}
              height={20}
              layout="fixed"
            />
            {localeNames[locales.PT_BR as keyof typeof localeNames]}
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
