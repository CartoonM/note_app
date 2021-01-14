import classes from "./Loader.module.scss";

const Loader = props => {
  return (
    <div className={classes["lds-dual-ring"]} ></div>
  );
};

export default Loader
