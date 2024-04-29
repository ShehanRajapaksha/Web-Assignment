import { Rating } from "@material-tailwind/react";
 
export function ReadonlyRating() {
  return (
    <div className="text-xs">
      <Rating ratedColor="yellow" value={3} readonly size="small" />
    </div>
  );
}
