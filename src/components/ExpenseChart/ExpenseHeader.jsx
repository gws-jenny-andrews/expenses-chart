import styles from "../../styles/expensechart.module.scss";
import Logo from "../Logo";

const ExpenseHeader = ({balance}) => {
    return (
      <div className={styles.header}>
        <div className={styles.headerBalanceWrapper}>
          <div className={styles.headerTitle}>My balance</div>
          <div className={styles.headerBalance}>${balance}</div>
        </div>
        <Logo />
      </div>
    );
  };

  export default ExpenseHeader;