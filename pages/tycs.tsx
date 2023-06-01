import { GetStaticProps, NextPage } from "next";
import React, { version } from "react";
import styles from "../styles/TYC.module.css";
import Head from "next/head";
import { TEXTS_BY_LANGUAGE} from "../locale/constants";
import { useRouter } from "next/router";

type TyC = { id: number; title: string; description: string };

export interface ITyCProps {
  data: {
    version: string;
    tycs: TyC[];
}
}

const TYCS: NextPage<ITyCProps> = ({data}) => {
  const { version, tycs } = data;
  const renderTyc: (tyc: TyC) => JSX.Element = ({ id, title, description }) => (
 
    <div key={id} className={styles.box}>
      <h3 className={styles.boxTitle}>{title}</h3>
      <p className={styles.boxDescription}>{description}</p>
    </div>
  
  );

 const {locale} = useRouter();

 const { MAIN} =
 TEXTS_BY_LANGUAGE[
 (locale || "defaultLocale") as keyof typeof TEXTS_BY_LANGUAGE
 ];

  return (
    <div className={styles.tycContainer}>
      <Head>
        <title className={styles.tycTitle}>{`Tienda Libre - ${MAIN.TYCS}`}</title>
        <meta 
          name="description"
          content={MAIN.TYCS}
        />
      </Head>
     
      <h2 className={styles.tycTitle}>{MAIN.TYCS}</h2>
      <p className={styles.version}>Versión: {version}</p>
      
      {tycs.map(renderTyc)}
      </div>
     

  );


}




//Aqui se hace la llamada a la API

export const getStaticProps: GetStaticProps = async ({locale}) => {

  const baseURL = "http://localhost:3000/"
  const response = await fetch(`${baseURL}/api/faqs/${locale} `);
  const data = await response.json();
  return {
    props: {
      data,
    }
  }
}

export default TYCS;
