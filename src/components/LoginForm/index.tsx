import { Form, Remember } from "./styles";

interface LoginFormProps {
    active: boolean;
}

function LoginForm({ active }:LoginFormProps) {
    return (
        <Form active={active}>
            <h3>login</h3>
            <input type="email" placeholder="enter your email" className="box" />
            <input type="password" placeholder="enter your password" className="box" />
            <Remember>
                <input type="checkbox" id="remember-me"/>
                <label htmlFor="remember-me">remember me</label>
            </Remember>
            <input type="submit" value="login now" />
            <p>forget password? <a href="#">click here</a> </p>
            <p>don't have an account? <a href="#">create account</a> </p>
        </Form>
    );
}

export { LoginForm };