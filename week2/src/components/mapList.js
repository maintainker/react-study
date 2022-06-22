import ManCard from "./manCard";

const mockData = new Array(10).fill(null).map((_, idx) => {
  return {
    name: `ssul-${idx}`,
    age: `${10 + idx}`,
    gender: idx % 2 === 0 ? "M" : "W",
  };
});

const MapList = () => {
  return (
    <ul>
      {mockData.map((el, idx) => (
        <ManCard key={idx} human={el} />
      ))}
    </ul>
  );
};
export default MapList;
