type ViewRatingPropsType = {
  rating: number;
};

export default function ViewRating({ rating }: ViewRatingPropsType) {
  return (
    <ul className="flex flex-row items-center">
      {[1, 2, 3, 4, 5].map(star => (
        <li key={star} className="text-yellow-400">
          {star <= rating ? (
            <i className="bx bxs-star"></i>
          ) : star === Math.ceil(rating) ? (
            <i className="bx bxs-star-half"></i>
          ) : (
            <i className="bx bx-star"></i>
          )}
        </li>
      ))}
      <p className="ml-2">({rating})</p>
    </ul>
  );
}
