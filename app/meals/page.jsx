import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";

async function MealsPage() {
  const meals = await getMeals();
  
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and create your own meal!</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}

export default MealsPage;
