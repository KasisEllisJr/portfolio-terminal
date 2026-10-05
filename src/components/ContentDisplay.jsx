export default function ContentDisplay({
  selectedItem,
  isActive,
}) {
  if (!selectedItem) {
    return (
      <section
        className={`content-display landing-content ${
          isActive ? "panel-active" : "panel-inactive"
        }`}
      >
        <p>Welcome to my personal portfolio.</p>

        <p>
          Select a directory to explore the system.
        </p>
      </section>
    );
  }

  return (
    <section
      className={`content-display ${
        isActive ? "panel-active" : "panel-inactive"
      }`}
    >
      <h1>{selectedItem.title}</h1>

      <div className="content-divider">
        --------------------------------
      </div>

      <p>{selectedItem.content}</p>
    </section>
  );
}