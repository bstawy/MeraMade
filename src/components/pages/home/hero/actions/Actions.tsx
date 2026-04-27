import ArrowIcon from "@/assets/icons/arrow_icon.svg";

import Button from "@/components/Button/Button";
import { BUTTON_VARIANTS } from "@/components/Button/buttonTypes";

import styles from "./Actions.module.css";
import Link from "next/link";
import { useLanguage } from "@/features/language/useLanguage";

const Actions = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.actions}>
      <Link href={"/bakery"}>
        <Button label={t("viewMenu")} icon={<ArrowIcon />} />
      </Link>

      <Button label={t("ourProcess")} variant={BUTTON_VARIANTS.GHOST} />
    </div>
  );
};

export default Actions;
