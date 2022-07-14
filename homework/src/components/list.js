import { useState } from "react";
import { useDispatch } from "react-redux";
import { RemoveTodo } from "../redux/slices/todosSlice";

/**
 * item {
 *  label : 이름
 *  id: 고유 번호
 *  isSuccess: 완료 여부
 *  isSelected: 선택 여부
 * }
 *
 */

const ListItem = ({ item, cardIdx }) => {
  const [colorIdx, setColorIdx] = useState(0);
  const dispatch = useDispatch();
  const removeItemBox = (e) => {
    e.stopPropagation();
    console.log("test");
    dispatch(RemoveTodo({ cardIdx, itemIdx: item.id }));
  };
  return (
    <li
      className={`colorset_${colorIdx}`}
      onClick={() => setColorIdx((colorIdx + 1) % 5)}
    >
      <span>{item.label}</span>
      <button onClick={removeItemBox}>삭제</button>
    </li>
  );
};

export default ListItem;
