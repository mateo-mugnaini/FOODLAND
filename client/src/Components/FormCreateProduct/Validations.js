export default function ValidateProduct(product) {
  const errors = {};

  // Validating name field
  if (!product.name || product.name.trim().length === 0) {
    errors.name = "Name is required";
  } else if (product.name.trim().length > 100) {
    errors.name = "Name cannot be longer than 100 characters";
  }

  // Validating slug field
  if (!product.slug || product.slug.trim().length === 0) {
    errors.slug = "Slug is required";
  } else if (product.slug.trim().length > 100) {
    errors.slug = window.alert("Slug cannot be longer than 100 characters");
  }

  // Validating price field
  if (product.price <= 0) {
    errors.price = "Price cannot be negative";
  }

  // Validating category field
  if (!product.category || product.category.trim().length === 0) {
    errors.category = "Category is required";
  }

  // Validating brand field
  if (!product.brand || product.brand.trim().length === 0) {
    errors.brand = "Brand is required";
  } else if (product.brand.trim().length > 100) {
    errors.brand = "Brand cannot be longer than 100 characters";
  }

  // Validating stock field
  if (product.stock <= 0) {
    errors.stock = "Stock cannot be 0 or negative";
  }

  // Validating description field
  if (!product.description || product.description.trim().length === 0) {
    errors.description = "Description is required";
  } else if (product.description.trim().length > 500) {
    errors.description = "Description cannot be longer than 500 characters";
  }

  return errors;
}
