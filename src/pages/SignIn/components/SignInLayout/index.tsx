import stylesClasses from "src/pages/SignIn/components/SignInLayout/styles.module.scss";
import Input from "src/components/Input";
import Button from "src/components/Button";
const SignInLayout = () => {
  return (
    <div className={stylesClasses.wrapper}>
      <form className={stylesClasses.form}>
        <Input
          className={stylesClasses.nameField}
          variant="standard"
          placeholder="Name"
          color="success"
        />
        <Button color="success" variant="outlined">
          Join
        </Button>
      </form>
    </div>
  );
};

export default SignInLayout;
