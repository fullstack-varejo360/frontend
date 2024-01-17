import { useProduct } from "../../hooks/useProduct";
import { IProduct } from "../../providers/@types";
import { StyledProductCard } from "./style";


export const ProductCard = (product: IProduct) => {
  const { products, setProducts, productDelete, setEditProduct } = useProduct();

  const deleteHandler = (id: number) => {
    productDelete(id);
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  return (
    <StyledProductCard>
      <h4>Código</h4>
      <h3>{product.code}</h3>
      <h4>Nome</h4>
      <h3>{product.name}</h3>

      <div className="btn">
        <button className="upd" onClick={()=>setEditProduct(product)}>Editar</button>
        <button className="del" onClick={() => deleteHandler(product.id)}>Deletar</button>
      </div>
    </StyledProductCard>
  );
};
