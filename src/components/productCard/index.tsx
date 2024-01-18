import { useProduct } from "../../hooks/useProduct";
import { IProduct } from "../../providers/@types";
import { StyledProductCard } from "./style";
import { FaRegTrashAlt } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";


export const ProductCard = (product: IProduct) => {
  const { products, setProducts, productDelete, setEditProduct } = useProduct();

  const deleteHandler = (id: number) => {
    productDelete(id);
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

 
  return (
    <StyledProductCard>
      <div className="info">
        <div>{product.code}</div>

        <div>{product.name}</div>
      </div>

      <div className="btn">
        <button className="upd" onClick={() => setEditProduct(product)}>
        <TiPencil />
        </button>
        <button className="del" onClick={() => deleteHandler(product.id)}>
        <FaRegTrashAlt />
        </button>
      </div>
    </StyledProductCard>
  );
};
