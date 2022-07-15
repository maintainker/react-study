import { useDispatch } from "react-redux";
import { RemoveTodo, ToggleTodo } from "../redux/slices/todosSlice";

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
  const dispatch = useDispatch();
  const removeItemBox = (e) => {
    e.stopPropagation();
    dispatch(RemoveTodo({ cardIdx, itemIdx: item.id }));
  };
  const selectItem = () => {
    dispatch(ToggleTodo({ cardIdx, itemIdx: item.id }));
  };
  return (
    <li className={item.isSelected ? `colorset_1` : ""} onClick={selectItem}>
      <span>{item.label}</span>
      <button onClick={removeItemBox}>삭제</button>
    </li>
  );
};

export default ListItem;
