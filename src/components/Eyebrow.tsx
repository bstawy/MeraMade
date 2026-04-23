interface EyebrowProps {
  text: string;
  fontSize?: string;
  letterSpacing?: string;
}

const Eyebrow = ({
  text,
  fontSize = "var(--fs-14)",
  letterSpacing = "0.3rem",
}: EyebrowProps) => {
  const styles = {
    marginBottom: "var(--space-8)",
    color: "var(--color-accent)",
    fontSize: fontSize,
    fontWeight: "var(--fw-medium)",
    letterSpacing: letterSpacing,
  };

  return <div style={styles}>{text}</div>;
};

export default Eyebrow;
