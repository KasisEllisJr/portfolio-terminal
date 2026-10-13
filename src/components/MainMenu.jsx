export default function MainMenu({
  items,
  selectedIndex,
  setSelectedIndex,
  onOpen,
  isActive,
  setActivePanel,
}) {
  return (
    <nav className={`main-menu ${isActive ? "panel-active" : "panel-inactive"}`}>
      {items.map((item, index) => {
        const isSelected = selectedIndex === index && isActive;

        return (
          <button
            key={item.id}
            className={`menu-item ${
              isSelected ? "selected" : ""
            }`}
            onMouseEnter={() => {
              setSelectedIndex(index);
              setActivePanel("main");
            }}
            onClick={() => onOpen(index)}
          >
            <span className="menu-pointer">
              {isSelected ? ">" : " "}
            </span>

            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}