import { useState } from "react";

const Select = ({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}) => {
  const [selectedItem, setSelectedItem] = useState<string>(options[0].value);

  return (
    <></>
    // <Listbox value={selectedItem} onChange={setSelectedItem}>
    //   <Listbox.Button>{selectedItem}</Listbox.Button>
    //   <Listbox.Options>
    //     {options.map((option) => (
    //       <Listbox.Option key={option.value} value={option.value}>
    //         {option.label}
    //       </Listbox.Option>
    //     ))}
    //   </Listbox.Options>
    // </Listbox>
  );
};
export default Select;
