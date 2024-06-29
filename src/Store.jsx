import { useSearchParams } from "react-router-dom";

const Store = () => {
  const [searchQuery, setSearchQuery] = useSearchParams({
    category: "",
    price: "",
    brand: "",
  });

  const products = [
    { name: "Laptop", category: "Electronics", price: "1000", brand: "Apple" },
    { name: "Shoes", category: "Fashion", price: "100", brand: "Nike" },
    { name: "Phone", category: "Electronics", price: "800", brand: "Samsung" },
  ];

  const category = searchQuery.get("category");
  const price = searchQuery.get("price");
  const brand = searchQuery.get("brand");

  const filteredProducts = products.filter((product) => {
    return (
      (category
        ? product.category.toLowerCase().includes(category.toLowerCase())
        : true) &&
      (price ? product.price <= price : true) &&
      (brand ? product.brand.toLowerCase().includes(brand.toLowerCase()) : true)
    );
  });

  return (
    <div>
      <h1>Store</h1>
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>
            {product.name} - {product.category} - {product.price} -{" "}
            {product.brand}
          </li>
        ))}
      </ul>
      <label>Select By Category: </label>
      <select
        value={category}
        onChange={(e) =>
          setSearchQuery((prev) => {
            prev.set("category", e.target.value);
            return prev;
          })
        }
      >
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
      </select>
      <br />
      <br />

      <input
        type="range"
        min="0"
        max="2000"
        value={price}
        onChange={(e) =>
          setSearchQuery((prev) => {
            prev.set("price", e.target.value);
            return prev;
          })
        }
      />
      <br />
      <br />

      <label>Select By Brand: </label>
      <select
        value={brand}
        onChange={(e) =>
          setSearchQuery((prev) => {
            prev.set("brand", e.target.value);
            return prev;
          })
        }
      >
        <option value="Apple">Apple</option>
        <option value="Nike">Nike</option>
        <option value="Samsung">Samsung</option>
      </select>
      <br />
      <br />
    </div>
  );
};

export default Store;
