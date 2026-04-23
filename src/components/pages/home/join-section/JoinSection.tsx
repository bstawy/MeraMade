import JoinForm from "./JoinForm";

import styles from "./JoinSection.module.css";

const JoinSection = () => {
  return (
    <section id="joinForm">
      <div className={styles.container}>
        <h2 className={styles.title}>Join the Inner Circle</h2>
        <p className={styles.description}>
          Receive exclusive access to our seasonal releases, event invitations,
          and artisanal baking guides.
        </p>
        <JoinForm />
        <p className={styles.terms}>
          BY SUBSCRIBING, YOU AGREE TO OUR PRIVACY POLICY AND NOCTURNAL TERMS.
        </p>
      </div>
    </section>
  );
};

export default JoinSection;
