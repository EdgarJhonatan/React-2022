import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem>", () => {
   const title = "Un título";
   const url = "https://localhost/jdm.jpg";
   const wrapper = shallow(<GifGridItem title={title} url={url} />);

   test("debe de mostrar el componente correctamente", () => {
      expect(wrapper).toMatchSnapshot();
   });

   test("debe de tener un párrafo con el title", () => {
      const p = wrapper.find("p");
      expect(p.text().trim()).toBe(title);
   });

   test("debe tener la imagen igual al url y alt de los props", () => {
      const img = wrapper.find("img");
      expect(img.prop("src")).toBe(url);
      expect(img.prop("alt")).toBe(title);
   });

   test("debe de tener animate__fadeIn", () => {
      const div = wrapper.find("div").first();
      expect(div.prop("className").includes("animate__fadeIn")).toBe(
         true
      );
   });
});
