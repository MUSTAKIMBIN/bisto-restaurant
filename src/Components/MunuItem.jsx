

const MunuItem = ({item}) => {
    const { name, recipe, image, price} = item;
    return (
        <div className="flex space-x-3 my-3">
            <div>
                <img src={image} className="w-18 rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px]" alt="" />
            </div>
            <div>
                <h3 className="uppercase">{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-sm text-orange-400">{price}</p>
            
        </div>
    );
};

export default MunuItem;