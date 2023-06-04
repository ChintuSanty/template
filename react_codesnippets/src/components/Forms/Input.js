import CustomInput from "../reusable/CustomInput";

const Input = () => {
    return (
        <CustomInput
        label="Username"
        minLength={5}
        value=""
        required={true}
        textColor="black"
        backgroundColor="white"
      />
    )
}

export default Input