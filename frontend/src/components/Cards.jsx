import {} from "react";

// eslint-disable-next-line react/prop-types
function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3 hover:scale-105 hover:m-5 duration-200">
        <div className="card bg-base-100 w-92  shadow-xl  dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              // eslint-disable-next-line react/prop-types
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer rounded-full p-2 border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                BUY NOW
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
