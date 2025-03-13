import { useState } from "react";
import { loginUser } from "../auth/auth";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GalleryVerticalEnd } from "lucide-react"


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token: string = await loginUser(email, password); // Explicitly type as string
      localStorage.setItem("token", token);
      console.log("login successful")
      navigate("/dashboard");
    } catch (error: any) {
      setMessage(error.message);
    }
  };
  

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <img src="/logo_no_border.svg" alt="Logo" className="h-10 w-10" />
          </div>
          AppLy
        </a>
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Welcome Back</CardTitle>
              <CardDescription>Login with your Email and Password</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin}>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id='email' type='email' placeholder="email@example.com" onChange={(e) => setEmail(e.target.value)} required/>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)} required/>
                  </div>
                  <Button type="submit" className="w-full">Login</Button>
                </div>
                </form>
                <div className="text-center text-sm">
                  Don't have an account?
                  <Link to="/signup">Sign up here</Link>.
                </div>
            </CardContent>
          </Card>
        </div>
    </div>
    </div>
    // <div>
    //   <h2>Login</h2>
    //   <form onSubmit={handleLogin}>
    //     <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
    //     <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
    //     <button type="submit">Log In</button>
    //   </form>
    //   {message && <p>{message}</p>}

    //   <p>
    //     Don't have an account? <Link to="/signup">Sign up here</Link>.
    //   </p>
    // </div>
  );
}
