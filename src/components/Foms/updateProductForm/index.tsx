import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { StyleModalWrapper } from "../../modalWrapper/style";
import {
  TProductUpdateData,
  productUpdateSchema,
} from "../../../validators/productValidator";
import { useProduct } from "../../../hooks/useProduct";
import { StyledUpdateProductForm } from "./style";
import { useEffect } from "react";
import { useUser } from "../../../hooks/useUser";

export const UpdateProductForm = () => {
  const { register, handleSubmit, reset } = useForm<TProductUpdateData>({
    resolver: zodResolver(productUpdateSchema),
  });

  const { setEditProduct, productUpdate, editProduct } = useProduct();

  useEffect(() => {
    // Atualiza os valores iniciais quando o produto a ser editado mudar
    if (editProduct) {
      reset({
        code: editProduct.code,
        name: editProduct.name,
        // ... outros campos do produto
      });
    }
  }, [editProduct, reset]);

  const submit = (data: TProductUpdateData) => {
    const nonEmptyData: Partial<TProductUpdateData> = {};
    for (const key in data) {
      if (data[key as keyof TProductUpdateData] !== "") {
        nonEmptyData[key as keyof TProductUpdateData] =
          data[key as keyof TProductUpdateData];
      }
    }

    if (editProduct) {
      productUpdate(editProduct.id, nonEmptyData);
    }

    setEditProduct(null);
  };

  return (
    <StyleModalWrapper>
      <StyledUpdateProductForm>
        <h3>Editar Produto</h3>
        <form onSubmit={handleSubmit(submit)}>
          <section>
            <div className="header">
              <h3>{editProduct?.name}</h3>
              <span onClick={() => setEditProduct(null)}>X</span>
            </div>
            <div>
              <label htmlFor="code">Código</label>
              <input
                type="number"
                id="code"
                placeholder="Digite o código..."
                {...register("code")}
              />
            </div>
            <div>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Digite o nome..."
                {...register("name")}
              />
            </div>
          </section>

          <button className="btnForm" type="submit">
            EDITAR
          </button>
        </form>
      </StyledUpdateProductForm>
    </StyleModalWrapper>
  );
};
