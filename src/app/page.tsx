import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page} >
    <Image src="/ChaToken.png" width={369} height={80} alt="icon"/>
    </div>
  );
}
