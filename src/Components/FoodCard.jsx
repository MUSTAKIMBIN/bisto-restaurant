const FoodCard = ({item}) => {
    const {name, image, price , recipe} = item;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="food image"
          />
        </figure>
          <p className="absolute right-2 top-3 text-sm text-white font-medium px-3 py-2 rounded-md bg-slate-800">{price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
