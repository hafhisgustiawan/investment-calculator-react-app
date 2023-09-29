import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.type === 'reset' ? styles.buttonAlt : styles.button}
      onClick={props.type === 'reset' ? props.onResetData : () => {}}
    >
      {props.type === 'reset' ? 'Reset' : 'Calculate'}
    </button>
  );
};

export default Button;
