import Icon from "@components/ui/Icon";
import { PUBLICATIONS } from "@data";
import Link from "next/link";
import styles from "./Publications.module.scss";

const Publications = () => {
  return (
    <section id="publications" className={styles.publications}>
      <h1 className={styles.heading}>Publications</h1>
      <div className={styles.list}>
        {PUBLICATIONS.map((publication) => {
          return (
            <article key={publication.id} className={styles.publication}>
              <div className={styles.publicationHeader}>
                <div className={styles.meta}>
                  <mark>{publication.type}</mark>
                  <span>{publication.date}</span>
                </div>
                <Link
                  href={publication.url}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    url="external"
                    width="20px"
                    height="20px"
                    title="Open"
                  />
                </Link>
              </div>
              <h2 className={styles.title}>{publication.title}</h2>
              <div className={styles.venue}>{publication.venue}</div>
              <p className={styles.description}>{publication.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Publications;
