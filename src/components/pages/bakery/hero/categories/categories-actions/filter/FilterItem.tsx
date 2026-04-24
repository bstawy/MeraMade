import Button from "@/components/Button/Button";
import { BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/Button/buttonTypes";

interface FilterItemProps {
  name: { en: string; ar: string };
  isActive: boolean;
  onClick: () => void;
}

const FilterItem = ({ name, isActive, onClick }: FilterItemProps) => {
  return (
    <Button
      label={name.en}
      variant={isActive ? BUTTON_VARIANTS.PRIMARY : BUTTON_VARIANTS.GHOST}
      size={BUTTON_SIZES.MEDIUM}
      onClick={onClick}
    />
  );
};

export default FilterItem;
