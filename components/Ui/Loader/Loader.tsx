import * as Styles from "./Loader.styles";

const Loader = () => {
  return (
    <Styles.Loader>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Styles.Loader>
  );
};

export default Loader;
