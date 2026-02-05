import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Ban } from "lucide-react";
import { SEO } from "../components/SEO";

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 text-center">
      <SEO title="Página no encontrada" />

      {/* Icono animado */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-[#FF6B95] blur-2xl opacity-20 animate-pulse rounded-full"></div>
        <Ban className="w-24 h-24 text-[#FF6B95] relative z-10" />
      </div>

      <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-4">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide mb-6">
        ¡Balón Fuera!
      </h2>

      <p className="text-slate-400 max-w-md mx-auto mb-10 text-lg">
        Parece que esta jugada no ha salido bien. La página que buscas no existe
        o se ha movido de sitio.
      </p>

      <Link
        to="/"
        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-black uppercase tracking-widest text-sm hover:bg-[#FF6B95] hover:text-white transition-all duration-300"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Volver al campo
      </Link>
    </div>
  );
};
