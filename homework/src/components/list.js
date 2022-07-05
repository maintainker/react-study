import { useState } from "react";
const ListItem = ({ item, removeItem }) => {
  const [colorIdx, setColorIdx] = useState(0);
  return (
    <li
      className={`colorset_${colorIdx}`}
      onClick={() => setColorIdx((colorIdx + 1) % 5)}
    >
      <span>{item.label}</span>
      <button onClick={removeItem}>삭제</button>
    </li>
  );
};

export default ListItem;
