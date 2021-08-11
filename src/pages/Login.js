import React from 'react'

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <div className="login">
                <form className="login_form">
                    <div className="text-3xl tracking-wide mb-15px pb-10px">
                        <h1>Login Here</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center h-100vh">
                    <input type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPasswprd(e.target.value)}/>
                    </div>

                    <div className="bg-black text-2xl rounded-md mt-10px py-17px px-30px text-white">
                        <button type="submit" className="submit_btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
