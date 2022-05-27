import { Container, InputContainer } from "./styles";

export const Input = ({ register, label, name, errors, ...rest }) => {
  return (
    <Container>
      <div className="Label">
        {label} {!!errors && <span className="errors">{errors}</span>}
      </div>
      <InputContainer>
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};
