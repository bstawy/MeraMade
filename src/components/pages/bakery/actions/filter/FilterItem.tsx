import Button from "@/components/Button/Button";
import { BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/Button/buttonTypes";
import { useLanguage } from "@/features/language/useLanguage";

interface FilterItemProps {
  name: { en: string; ar: string };
  isActive: boolean;
  onClick: () => void;
}

const FilterItem = ({ name, isActive, onClick }: FilterItemProps) => {
  const { locale } = useLanguage();

  const title = locale === "en" ? name.en : name.ar;

  return (
    <Button
      label={title}
      variant={isActive ? BUTTON_VARIANTS.PRIMARY : BUTTON_VARIANTS.GHOST}
      size={BUTTON_SIZES.MEDIUM}
      onClick={onClick}
    />
  );
};

export default FilterItem;
