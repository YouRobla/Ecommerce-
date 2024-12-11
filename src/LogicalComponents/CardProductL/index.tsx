import Buttom from "../../components/Buttom";
import CardProductSection from "../../components/CardProductSection";
import UseFetch from '../../Hooks/UseFetch';
import { Product1 } from "../../Types/products";
interface ICardProductL {
  titleSection: string;
  startProduct:string
}

const CardProductL = ({ titleSection,startProduct }: ICardProductL) => {
  const { data, loading, error } = UseFetch<Product1[]>(`products?offset=${startProduct}&limit=4`);
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No se encontraron productos.</div>;
  return (
    <section className="mt-10">
      <h2 className=" font-integral-cf-extra-bold text-center text-4xl">{titleSection}</h2>
      <div className=" grid grid-flow-ol-reverse  grid-cols-4  p-16 gap-10 ">
        {
          data.map((product) => (
            <CardProductSection key={product.id} {...product} />
          ))
        }
      </div>
      <div className="flex justify-center">
      <Buttom nameButtom="View All" backgroundColor="White" textColor="black" borderColor="border-black" width="w-[200px] " />
      </div>
    </section>
  );
};

export default CardProductL;