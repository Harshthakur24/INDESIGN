"use client";

import Link from "next/link";
import { SHORT_ARROW, NAV } from "@/assets/icons";
import TrackButton from "./UI/TrackButton";
import SplitStyle from "./UI/SplitStyle";
import style from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={style.heroContainer}>
      <div className={style.hero}>
        <main className={style.heroBody}>
          <p>1 MAY 2024</p>
          <h1>THE CONFERENCE FOR PRODUCT DESINGER</h1>
        </main>

        <footer className={style.footer}>
          <p>
            Join us for an immersive day of inspiring talks, hands-on workshops, 
            and networking opportunities with industry leaders. Whether you&apos;re a 
            seasoned designer or just starting your journey, this conference will 
            provide valuable insights and practical skills to elevate your product 
            design career.
          </p>

          <TrackButton
            href="/explore-more"
            className={style.explore}
            childProps={{ className: style.exploreInner }}
          >
            <span>
              <SHORT_ARROW deg={-45} />
            </span>
            <span>Explore More</span>
          </TrackButton>
        </footer>
      </div>
    </section>
  );
}
