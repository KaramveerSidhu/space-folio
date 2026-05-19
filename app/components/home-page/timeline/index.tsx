import { TIMELINE_ITEMS } from "@data";
import styles from "./Timeline.module.scss";

const Timeline = () => {
  return (
    <section id="timeline" className={styles.timeline}>
      <h1 className={styles.heading}>Timeline</h1>
      <div className={styles.items}>
        {TIMELINE_ITEMS.map((item) => {
          return (
            <article key={item.id} className={styles.item}>
              <div className={styles.marker} aria-hidden="true" />
              <div className={styles.itemContent}>
                <div className={styles.meta}>
                  <mark>{item.type}</mark>
                  <span>{item.period}</span>
                </div>
                <h2 className={styles.title}>{item.title}</h2>
                <div className={styles.organization}>{item.organization}</div>
                {item.location && (
                  <div className={styles.location}>{item.location}</div>
                )}
                <ul className={styles.highlights}>
                  {item.highlights.map((highlight) => {
                    return <li key={highlight}>{highlight}</li>;
                  })}
                </ul>
                {item.skills && (
                  <div className={styles.skills}>
                    {item.skills.map((skill) => {
                      return <mark key={skill}>{skill}</mark>;
                    })}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
