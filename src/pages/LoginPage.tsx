import React, { useState } from "react";
import { Mail, Lock, ArrowLeft, Search, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

interface LoginPageProps {
  onBack: () => void;
}
const LoginPage: React.FC<LoginPageProps> = ({ onBack }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 
  const login = useAuthStore((state) => state.login);
  const handleSubmit = (e: any) => { e.preventDefault(); 
  login("fake-jwt-token"); 
  navigate("/dashboard"); 
};
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 md:p-8 font-['Plus_Jakarta_Sans']">
      {" "}
      {/* Back button */}{" "}
      <button
        onClick={() => navigate("/")}
        className="fixed top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-all font-semibold group"
      >
        {" "}
        <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-slate-900 transition-colors">
          {" "}
          <ArrowLeft size={16} />{" "}
        </div>{" "}
        Back to Home{" "}
      </button>{" "}
      <div className="max-w-6xl w-full bg-white rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row min-h-[720px] border border-slate-100">
        {" "}
        {/* Left Side: Visual Narrative */}{" "}
        <div className="flex-1 bg-slate-50/50 p-12 flex flex-col justify-between relative overflow-hidden">
          {" "}
          {/* Subtle background pattern */}{" "}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          ></div>{" "}
          <div className="relative z-10">
            {" "}
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Welcome to <span className="text-[#FF1F6D]">GoPerfect</span>
            </h1>{" "}
            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-sm">
              {" "}
              Rethink the way you source, engage, and hire world-class
              talent.{" "}
            </p>{" "}
          </div>{" "}
          {/* Enhanced Graphic Area */}{" "}
          <div className="relative h-[380px] flex items-center justify-center z-10">
            {" "}
            {/* Animated Globe Effect */}{" "}
            <div className="absolute w-72 h-72 border border-slate-200 rounded-full"></div>{" "}
            <div className="absolute w-72 h-72 border border-slate-100 rounded-full rotate-45"></div>{" "}
            <div className="absolute w-72 h-72 border border-slate-100 rounded-full -rotate-45"></div>{" "}
            {/* Floating Talent Context Tags */}{" "}
            <div className="relative w-full h-full flex items-center justify-center">
              {" "}
              {/* Tag 1: Left Top */}{" "}
              <div className="absolute top-12 -left-4 bg-white/90 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-2xl shadow-sm text-[11px] font-bold text-slate-700 flex items-center gap-2 transform -rotate-3 hover:rotate-0 transition-transform">
                {" "}
                <CheckCircle2 size={14} className="text-green-500" /> 12+ years
                in industry{" "}
              </div>{" "}
              {/* Tag 2: Left Bottom */}{" "}
              <div className="absolute bottom-16 -left-8 bg-white/90 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-2xl shadow-sm text-[11px] font-bold text-slate-700 flex items-center gap-2 transform rotate-2 hover:rotate-0 transition-transform">
                {" "}
                <Search size={14} className="text-blue-500" /> Expert in
                FinTech{" "}
              </div>{" "}
              {/* Tag 3: Right Top */}{" "}
              <div className="absolute top-24 -right-4 bg-white/90 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-2xl shadow-sm text-[11px] font-bold text-slate-700 flex items-center gap-2 transform rotate-3 hover:rotate-0 transition-transform">
                {" "}
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>{" "}
                Changed location{" "}
              </div>{" "}
              {/* Tag 4: Right Bottom */}{" "}
              <div className="absolute bottom-24 -right-8 bg-white/90 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-2xl shadow-sm text-[11px] font-bold text-slate-700 flex items-center gap-2 transform -rotate-2 hover:rotate-0 transition-transform">
                {" "}
                <div className="w-2 h-2 bg-[#FF1F6D] rounded-full"></div> IPO
                Experience{" "}
              </div>{" "}
              {/* Central Focus */}{" "}
              <div className="bg-white p-2 rounded-full shadow-2xl border-4 border-slate-50 z-20">
                {" "}
                <img
                  src="https://i.pravatar.cc/150?u=perfect-lead"
                  className="w-24 h-24 rounded-full object-cover"
                  alt="Featured Talent"
                />{" "}
              </div>{" "}
              {/* Secondary Avatars */}{" "}
              <img
                src="https://i.pravatar.cc/150?u=a1"
                className="absolute top-1/4 left-1/4 w-10 h-10 rounded-full border-2 border-white shadow-lg -translate-x-12"
                alt="Talent"
              />{" "}
              <img
                src="https://i.pravatar.cc/150?u=a2"
                className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full border-2 border-white shadow-lg translate-x-12"
                alt="Talent"
              />{" "}
            </div>{" "}
          </div>{" "}
          {/* Integrated Trust proof */}{" "}
          <div className="relative z-10">
            {" "}
            <div className="flex flex-col gap-4">
              {" "}
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                Validated by teams at
              </p>{" "}
              <div className="flex items-center gap-8 grayscale opacity-40 hover:opacity-100 transition-opacity">
                {" "}
                <span className="font-black text-slate-900 text-sm tracking-tighter">
                  PERPLEXITY
                </span>{" "}
                <span className="font-black text-slate-900 text-sm tracking-tighter">
                  CURSOR
                </span>{" "}
                <span className="font-black text-slate-900 text-sm tracking-tighter">
                  ANYSCALE
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Right Side: Auth Actions */}{" "}
        <div className="flex-[0.8] bg-white p-12 lg:p-16 flex flex-col">
          {" "}
          <div className="mb-auto flex justify-center lg:justify-start">
            {" "}
            <div className="flex items-center gap-2">
              {" "}
              <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-200">
                {" "}
                <div className="w-4 h-4 bg-white rounded-full translate-x-0.5"></div>{" "}
              </div>{" "}
              <span className="text-2xl font-black tracking-tight text-slate-900 italic">
                perfect
              </span>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-full max-w-sm mx-auto space-y-10">
            {" "}
            <div className="text-center lg:text-left space-y-2">
              {" "}
              <h2 className="text-3xl font-extrabold text-slate-900">
                Get started for free
              </h2>{" "}
              <p className="text-slate-500 font-medium">
                Join 2,000+ companies hiring today.
              </p>{" "}
            </div>{" "}
            <div className="space-y-4">
              {" "}
              <button onClick={handleSubmit} className="w-full py-4 px-6 border border-slate-200 rounded-2xl flex items-center justify-center gap-4 font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all group active:scale-[0.98]">
                {" "}
                
                <img
                  src="https://www.google.com/favicon.ico"
                  className="w-5 h-5"
                  alt="Google"
                />{" "}
                Continue with Google{" "}
              </button>{" "}
              <div className="relative flex items-center py-2">
                {" "}
                <div className="flex-grow border-t border-slate-100"></div>{" "}
                <span className="flex-shrink mx-4 text-xs font-bold text-slate-300 uppercase tracking-widest">
                  or
                </span>{" "}
                <div className="flex-grow border-t border-slate-100"></div>{" "}
              </div>{" "}
              <button className="w-full py-4 px-6 border border-slate-200 rounded-2xl flex items-center justify-center gap-4 font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all group active:scale-[0.98]">
                {" "}
                <Mail
                  size={20}
                  className="text-slate-400 group-hover:text-slate-900 transition-colors"
                />{" "}
                Continue with Email{" "}
              </button>{" "}
              <button className="w-full py-4 px-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center gap-4 font-bold text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all group active:scale-[0.98]">
                {" "}
                <Lock size={18} /> Enterprise SSO{" "}
              </button>{" "}
            </div>{" "}
            <div className="pt-4">
              {" "}
              <p className="text-center text-slate-400 text-[11px] leading-relaxed">
                {" "}
                By signing up, you agree to our{" "}
                <a
                  href="#"
                  className="text-slate-900 underline font-bold hover:text-[#FF1F6D]"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-slate-900 underline font-bold hover:text-[#FF1F6D]"
                >
                  Privacy Policy
                </a>
                .{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="mt-auto text-center pt-8 border-t border-slate-50">
            {" "}
            <p className="text-sm font-medium text-slate-500">
              {" "}
              New to GoPerfect?{" "}
              <a href="#" className="text-[#FF1F6D] font-bold hover:underline">
                Create an account
              </a>{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <p className="mt-8 text-slate-400 text-xs font-medium">
        © 2024 GoPerfect Technologies. All rights reserved.
      </p>{" "}
    </div>
  );
};
export default LoginPage;
