import { describe, expect, it } from "vitest";
import { sum } from "./sum";

// describe -> digunakan untuk mengelompokkan unit testing berdasar object testing
// object testing adalah function sum
describe("sum", () => {
  // bikin beberapa skenario
  // skenario positive case
  it("diharapkan mengembalikan kembalian angka positif", () => {
    // ingat! AAA -> Arrange, Act, dan Assert
    // Arrange -> mempersiapkan semua hal yang kita butuhkan selama proses testing
    const a = 6;
    const b = 7;

    // Act -> menjalankan function yang dilakukan pengetesan
    const result = sum(a, b);

    // Assert -> melakukan validasi apakah actual value = expected value
    expect(result).toBe(13);
  });
});
