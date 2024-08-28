import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useState } from "react";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const postForm = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<span className="mb-3 text-4xl font-bold">Login</span>
			<span className="font-light text-gray-400 mb-4">
				Please enter your details
			</span>
			<form onSubmit={postForm}>
				<div className="py-4">
					<span className="mb-2 text-md">Username</span>
					<input
						type="text"
						className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
						name="username"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div className="py-4">
					<span className="mb-2 text-md">Password</span>
					<input
						type="password"
						name="pass"
						id="pass"
						className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<input
						type="checkbox"
						checked={rememberMe}
						onChange={() => setRememberMe(!rememberMe)}
						className="mr-2 leading-tight mt-4 "
					/>
					<label className="text-sm text-gray-700">Remember Me</label>
				</div>

				<div className="pt-4">
					<button
						className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
						type="submit">
						Login
					</button>
				</div>

				<div className="mt-4 text-center">
					<a href="#" className="text-sm text-blue-600 hover:underline">
						Forgot Password?
					</a>
				</div>
				<div className="mt-6">
					<div className="flex items-center justify-center">
						<button className="flex items-center px-4 py-2 mr-2 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700">
							Google <FaGoogle className="ml-2" />
						</button>
						<button className="flex items-center px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
							Facebook <FaFacebook className="ml-2" />
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default LoginForm;
