import { createContext, useEffect, useState } from "react";
import { IProduct, ProductContextValues, ProductProviderProps } from "./@types";
import {
  TProductCreateData,
  TProductUpdateData,
} from "../validators/productValidator";
import { useUser } from "../hooks/useUser";
import { toast } from "react-toastify";
import { api } from "../service/api";

export const ProductContext = createContext({} as ProductContextValues);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const { navigate, token } = useUser();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [singleProduct, setSingleProduct] = useState<IProduct | null>(null);
  const [editProduct, setEditProduct] = useState<IProduct | null>(null);
  const [searchedItem, setSearchedItem] = useState<string>("");

  const productCreate = async (data: TProductCreateData) => {
    try {
      const response = await api.post<IProduct>("/product", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);

      toast.success("Cadastro com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const productListAll = async () => {
    try {
      const response = await api.post<IProduct[]>("/product", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const productListPag = async () => {
    try {
      const response = await api.get<any>("/product/pag", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.content);
      setProducts(response.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const productRetrive = async (productId: number) => {
    if (token) {
      try {
        const response = await api.get<IProduct>(`/product/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSingleProduct(response.data);
        toast.success("Atualização com sucesso");
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const productUpdate = async (productId: number, data: TProductUpdateData) => {
    if (token) {
      try {
        const response = await api.patch<IProduct>(
          `/product/${productId}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSingleProduct(response.data);
        toast.success("Atualização com sucesso");
      } catch (error) {
        console.log(error);
        toast.error(`${error}`);
      }
    }
  };

  const productDelete = async (productId: number) => {
    if (token) {
      try {
        const response = await api.delete<void>(`/product/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        toast.success("Produto deletado");
        // setSingleProduct(null)
      } catch (error) {
        console.log(error);
        toast.error(`${error}`);
      }
    }
  };

  useEffect(() => {
    productListPag();
  }, [token,singleProduct, editProduct]);

  useEffect(() => {
    productListAll();
  }, [searchedItem]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        singleProduct,
        setSingleProduct,
        editProduct,
        setEditProduct,
        searchedItem,
        setSearchedItem,
        productCreate,
        productListAll,
        productListPag,
        productRetrive,
        productUpdate,
        productDelete,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
