import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
}

export const SEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    // 1. Actualizar el Título
    // Si el título ya lleva "CV Noáin", lo dejamos tal cual. Si no, se lo añadimos.
    document.title = title.includes("CV Noáin") ? title : `${title} | CV Noáin`;

    // 2. Actualizar la Descripción
    if (description) {
      let metaDescription = document.querySelector("meta[name='description']");
      // Si no existe la etiqueta meta, la creamos
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);

  return null; // Este componente no renderiza nada visible
};
