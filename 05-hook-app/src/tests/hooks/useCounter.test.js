import { renderHook, act } from "@testing-library/react-hooks";
import { useCouter } from "../../hooks/useCouter";

describe("Pruebas en useCouter", () => {
   test("debe de retornar valores por defecto", () => {
      const { result } = renderHook(() => useCouter());

      expect(result.current.counter).toBe(10);
      expect(typeof result.current.increment).toBe("function");
      expect(typeof result.current.decrement).toBe("function");
      expect(typeof result.current.reset).toBe("function");
   });

   test("debe de tener el counter en 100", () => {
      const { result } = renderHook(() => useCouter(100));

      expect(result.current.counter).toBe(100);
   });

   test("debe de incrementar el counter en 1", () => {
      const { result } = renderHook(() => useCouter(100));
      const { increment } = result.current;

      act(() => {
         increment();
      });

      const { counter } = result.current;
      expect(counter).toBe(101);
   });

   test("debe de decrementar el counter en 1", () => {
      const { result } = renderHook(() => useCouter(100));
      const { decrement } = result.current;

      act(() => {
         decrement();
      });

      const { counter } = result.current;
      expect(counter).toBe(99);
   });

   test("debe de establecer el valor en 100", () => {
      const { result } = renderHook(() => useCouter(100));
      const { decrement, reset } = result.current;

      act(() => {
         decrement();
         reset();
      });

      const { counter } = result.current;
      expect(counter).toBe(100);
   });
});
