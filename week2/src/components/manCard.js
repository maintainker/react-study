const ManCard = ({ human }) => {
  return (
    <li>
      {human.name}은 {human.age}살이고 {human.gender}이다.
    </li>
  );
};

export default ManCard;
