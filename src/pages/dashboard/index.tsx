import { useEffect } from "react";
import { StyledDashboard } from "./style";
import { useUser } from "../../hooks/useUser";
import { useProduct } from "../../hooks/useProduct";
import { ProductCard } from "../../components/productCard";

export const Dashboard = () => {
  const { userProfile, user, userUpdate, userLogout } = useUser();
  const { products } = useProduct();

  // useEffect(() => {
  //   userProfile();
  // }, []);

  console.log(products);

  return (
    <StyledDashboard>
      <h1>Dashboard</h1>
      <section>
        <div>
          <h3>{user?.name}</h3>
          <h4>{user?.email}</h4>
        </div>
        <div>
          <button>Editar</button>
          <button onClick={() => userLogout()}>Logout</button>
        </div>
      </section>

      <ul>
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            code={product.code}
            id={product.id}
          />
        ))}
      </ul>
    </StyledDashboard>
  );
};
