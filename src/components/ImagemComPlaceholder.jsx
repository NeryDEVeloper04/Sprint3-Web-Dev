import { useState } from "react";


function ImagemComPlaceholder({ src, alt, className = "", style = {}, placeholderLabel }) {
  const [erro, setErro] = useState(false);

  if (erro) {
    return (
      <div className="img-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        <span>{placeholderLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setErro(true)}
    />
  );
}

export default ImagemComPlaceholder;
