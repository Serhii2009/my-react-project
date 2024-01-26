import { useState, useId } from "react";

export const LangSwitcher = () => {
  const selectId = useId();
  const [lang, setLang] = useState("Ukrainian");

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        value={lang}
        onChange={(evt) => setLang(evt.target.value)}
      >
        <option value="Ukrainian">Ukrainian</option>
        <option value="English">English</option>
        <option value="Polish">Polish</option>
      </select>
      <p>Select language: {lang}</p>
    </div>
  );
};
