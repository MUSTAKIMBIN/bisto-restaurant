import FoodCard from "./FoodCard";

const OrderTabs = ({items}) => {
  return (
    <div className="grid md:grid-cols-3 gap-5 my-10">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTabs;
