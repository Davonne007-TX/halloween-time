export default function Image({ image, alt, styles }) {
  return (
    <section>
      <img src={image} alt={alt} className={styles} />
    </section>
  );
}
