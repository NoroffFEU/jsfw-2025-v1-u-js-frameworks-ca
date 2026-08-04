import { ProductResponse, ProductsResponse } from "@/types/product";

const API_BASE_URL = "https://v2.api.noroff.dev";

export async function getProducts(): Promise<ProductsResponse> {
  const response = await fetch(`${API_BASE_URL}/online-shop`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getProduct(id: string): Promise<ProductResponse> {
  const response = await fetch(`${API_BASE_URL}/online-shop/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}