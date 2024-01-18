import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useProvider } from "../../../hooks/providerHook";
import {
  TContactUpdateData,
  contactUpdateSchema,
} from "../../../validators/contactsCalidators";
import { StyleModalWrapper } from "../../modalWrapper/style";
import { StyledUpdateContactForm } from "./style";

export const UpdateContactForm = () => {
  const { register, handleSubmit } = useForm<TContactUpdateData>({
    resolver: zodResolver(contactUpdateSchema),
  });

  const { setEdit, updateContact, edit } = useProvider();
  console.log(edit);

  const submit: SubmitHandler<TContactUpdateData> = (data) => {
    const nonEmptyData: Partial<TContactUpdateData> = {};
    for (const key in data) {
      if (data[key as keyof TContactUpdateData] !== "") {
        nonEmptyData[key as keyof TContactUpdateData] =
          data[key as keyof TContactUpdateData];
      }
    }

    if (edit) {
      updateContact(edit.id, nonEmptyData);
    }

    setEdit(null);
  };

  return (
    <StyleModalWrapper>
      <StyledUpdateContactForm>
        <form onSubmit={handleSubmit(submit)}>
          <div className="header">
            <h3>Editar Contato</h3>
            <span onClick={() => setEdit(null)}>X</span>
          </div>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Digite o nome..." {...register("name")} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Digite o e-mail..." {...register("email")} />
          <label htmlFor="phone">Telefone</label>
          <input type="text" id="phone" placeholder="Digite o telefone..." {...register("phone")} />

          <button className="btnForm" type="submit">EDITAR</button>
        </form>
      </StyledUpdateContactForm>
    </StyleModalWrapper>
  );
};
