"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SigninPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated floating neon blobs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-green-500 opacity-30 blur-3xl"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-green-400 opacity-20 blur-2xl"
        animate={{
          x: [50, -150, 100, 50],
          y: [-50, 150, -100, -50],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />

      {/* Light glow behind form */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-green-500/30 blur-[140px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
      />

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md bg-zinc-900/90 border border-green-500/50 rounded-2xl shadow-[0_0_25px_#22c55e] p-8"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-400">
            Your Personal AI Newsletter
          </h1>
          <p className="text-white mt-2">
            {isSignUp ? "Create your account" : "Sign in to your account"}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-green-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-black border border-green-500 text-green-100 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password with toggle */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-green-300 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                required
                className="w-full px-4 py-2 pr-12 rounded-lg bg-black border border-green-500 text-green-100 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-green-300 hover:text-green-400 cursor-pointer text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px #22c55e",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-green-500 text-black font-semibold transition cursor-pointer"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </motion.button>
        </form>

        {/* Toggle Signin/Signup */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsSignUp((prev) => !prev)}
            className="text-sm text-green-300 hover:text-green-400 transition cursor-pointer"
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
