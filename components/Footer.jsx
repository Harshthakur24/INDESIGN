import style from "@/styles/Footer.module.css";
import Link from "next/link";
import SplitStyle from "./UI/SplitStyle";
import {
  EMAIL,
  PHONE,
} from "@/assets/icons";
import { socialLinks } from "@/content";

export default function Footer() {
  return (
    <section className={style.footerContainer}>
      <div className={style.footerTop}>
        <nav className={style.footerTopLink}>
          <Link
            href="/"
            className={style.footerLink}
          >
            <SplitStyle text="INDESIGN" />
          </Link>
        </nav>
        <div>
          <h4>Opening Hours</h4>
          <p>Week days: 08:00AM - 08:00PM</p>
          <p>Saturday, Sunday: 10:00AM - 06:00PM</p>
        </div>
        <div>
          <h4>Address</h4>
          <p>New Delhi, India</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            <a href="mailto:thakur2004harsh@gmail.com">
              <EMAIL /> thakur2004harsh@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+919311840704">
              <PHONE /> (+91) 9311840704
            </a>
          </p>
        </div>
      </div>
      <div className={style.divider}></div>
      <div className={style.footerBottom}>
        <div>
          <p>@2025, All Rights Reserved</p>
        </div>
        <div>
          {socialLinks.map((link) => (
            <Link href={link.link} key={link.link} className={style.socialLink} target="_blank" rel="noopener noreferrer">
              <link.icon />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
