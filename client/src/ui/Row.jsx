function Row({ type, children }) {
  const styles = {
    horizontal: "flex items-center ",
    fullHorizontal: "flex justify-between items-center ",
    vertical: "flex flex-col ",
  };

  return <div className={styles[type]}>{children}</div>;
}

export default Row;
