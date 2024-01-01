import Image from "next/image";
import Link from "next/link";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
    const res = await fetch(`${url}${id}`);

    if(!res.ok) {
        throw new Error('Failed to fetch a drink..');
    }

    return res.json();
}
const SingleDrinkPage = async ({params}) => {

    const data = await getSingleDrink(params.id);
    const title = data?.drinks[0]?.strDrink;
    const imgSRC = data?.drinks[0]?.strDrinkThumb;

    //console.log(params.id);
  return (
    <div>
        <Link href='/drinks' className="btn btn-primary mt-8 mb-12 capitalize">
            back to drinks
        </Link>
        <Image 
        src={imgSRC} 
        width={300} 
        height={300} 
        className="w-48 h-48 rounded-lg shadow-lg mb-4" 
        priority 
        alt={title} />
        <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  )
}

export default SingleDrinkPage