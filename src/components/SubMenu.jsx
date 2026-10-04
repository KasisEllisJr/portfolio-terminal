export default function SubMenu({
  items,
  selectedIndex,
  setSelectedIndex,
}) {
  if (!items) {
    return null;
  }

  return (
    <nav className="sub-menu">
      {items.map((item, index) => {
        const isSelected = selectedIndex === index;

        return (
          <button
            key={item.id}
            className={`sub-menu-item ${
              isSelected ? "selected" : ""
            }`}
            onMouseEnter={() => setSelectedIndex(index)}
          >
            <span className="menu-pointer">
              {isSelected ? ">" : " "}
            </span>

            {item.label}
          </button>
        );
      })}
    </nav>
  );
}