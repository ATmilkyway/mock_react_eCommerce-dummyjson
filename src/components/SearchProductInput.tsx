import useProductsQueryStore from "@/store/useProductsQueryStore";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

const SearchProductInput = () => {
  const setSearchProducts = useProductsQueryStore((s) => s.setSearchProducts);
  const reset = useProductsQueryStore((s) => s.reset);

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!ref.current) return;
        reset();
        setSearchProducts(ref.current.value.trim() || undefined);
        ref.current.value = "";
      }}
    >
      <InputGroup width="full" startElement={<LuSearch color="gray.500" />}>
        <Input ref={ref} placeholder="Search products..." borderRadius="full" />
      </InputGroup>
    </form>
  );
};

export default SearchProductInput;
