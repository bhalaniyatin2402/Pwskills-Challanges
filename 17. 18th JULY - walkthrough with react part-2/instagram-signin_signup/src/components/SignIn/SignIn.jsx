function SignIn() {
    return(
        <div className="sign-in">
            <input type="text" name="email" placeholder="username" />
            <input type="text" name="email" placeholder="password" />
            <input type="submit" value="Sign In" className="sign-in-btn" />
        </div>
    )
}

export default SignIn
