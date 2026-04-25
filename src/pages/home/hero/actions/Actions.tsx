import ArrowIcon from "@/assets/icons/arrow_icon.svg";

import Button from "@/components/Button/Button";
import { BUTTON_VARIANTS } from "@/components/Button/buttonTypes";

import styles from "./Actions.module.css";
import Link from "next/link";

const Actions = () => {
  return (
    <div className={styles.actions}>
      <Link href={"/bakery"}>
        <Button label="View Menu" icon={<ArrowIcon />} />
      </Link>

      <Button label="Our Process" variant={BUTTON_VARIANTS.GHOST} />
    </div>
  );
};

export default Actions;
