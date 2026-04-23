import styles from "./HeaderActions.module.css";

interface HeaderActionButtonProps {
  icon: React.ReactNode;
  onTap?: () => void;
}

const HeaderActionButton = ({ icon, onTap }: HeaderActionButtonProps) => {
  return (
    <button type="button" onClick={onTap} className={styles.icon}>
      {icon}
    </button>
  );
};

export default HeaderActionButton;
