import React, { useState, useEffect, useCallback } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import ProductCard from "./ui/productCard";

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const itemsPerFetch = 10;

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const InfiniteScrollList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const cacheKey = "products";
      const cacheData = await AsyncStorage.getItem(cacheKey);
      if (cacheData) {
        setProducts(JSON.parse(cacheData));
      }
      // Fetch products from API
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${itemsPerFetch}&skip=${products.length}&select=title,price,thumbnail`
      );
      const data = response.data.products;
      if (data.length > 0) {
        setProducts((prevProducts) => {
          const newProducts = [...prevProducts, ...data];
          AsyncStorage.setItem(cacheKey, JSON.stringify(newProducts));
          return newProducts;
        });
      } else {
        setHasMore(false); // No more products to load
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    fetchProducts();
  };

  const renderItem = useCallback(({ item }: { item: Product }) => {
    return (
      <ProductCard
        id={item.id}
        title={item.title}
        price={item.price}
        thumbnail={item.thumbnail}
      />
    );
  }, []);
  const renderFooter = () => {
    if (!loading) return null;

    return (
      <View className="flex-1 items-center justify-center p-4">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };

  return (
    <View className="flex-1">
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Ensure your items have unique IDs
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5} // Trigger load more when reaching 50% of the end
        ListFooterComponent={renderFooter}
        numColumns={2}
      />
    </View>
  );
};

export default InfiniteScrollList;
