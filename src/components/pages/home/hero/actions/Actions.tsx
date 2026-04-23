import ArrowIcon from "@/assets/arrow_icon.svg";

import Button from "@/components/Button/Button";
import { BUTTON_VARIANTS } from "@/components/Button/buttonTypes";

import styles from "./Actions.module.css";

const Actions = () => {
  return (
    <div className={styles.actions}>
      <Button label="View Menu" icon={<ArrowIcon />} />
      <Button label="Our Process" variant={BUTTON_VARIANTS.GHOST} />
    </div>
  );
};

export default Actions;
