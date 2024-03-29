import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
   const [inputValue, setInputValue] = useState("");

   const handleInputChange = (e) => {
      setInputValue(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim().length > 2) {
         setCategories((cats) => [inputValue, ...cats]);
         setInputValue("");
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <p>{inputValue}</p>
         <input
            type="text"
            placeholder="Search something"
            value={inputValue}
            onChange={handleInputChange}
         />
      </form>
   );
};

// Para obligar que envíen la función (componente) desde el AddCategory
AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired,
};
