import { useState } from "react";
import { useProvider } from "../../hooks/providerHook";
import { toast } from "react-toastify";
import { StyledSearchInput } from "./style";
import { IContact } from "../../provider/@types";
import { api } from "../../services/api";

export const SearchInput = () => {
  const { setContacts, getContacts } = useProvider();

  const [searchedItem, setSearchedItem] = useState<string>("");

  const reset = () => {
    getContacts();
  };

  const search = async (searchedItem: string) => {
    if (searchedItem === "") {
      toast.error("Digite alguma busca...");
    } else {
      const contacts = await api.get<IContact[]>("/contacts");
      const searchedContact = contacts.data.filter((contact) => {
        return (
          contact.name.toLowerCase().includes(searchedItem.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchedItem.toLowerCase()) ||
          contact.phone.toLowerCase().includes(searchedItem.toLowerCase())
        );
      });
      setContacts(searchedContact);
    }
  };

  const submit = (e: any) => {
    e.preventDefault();

    search(searchedItem);
    setSearchedItem("");
  };

  return (
    <StyledSearchInput>
      <form onSubmit={submit}>
        <input
          type="text"
          value={searchedItem}
          placeholder="Digite sua pesquisa..."
          onChange={(e) => setSearchedItem(e.target.value)}
        />
        <div>
          <button className="search" type="submit">
            Buscar
          </button>
          <button type="reset" onClick={() => reset()}>
            Todos
          </button>
        </div>
      </form>
    </StyledSearchInput>
  );
};
