import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import bgImg from './assets/Photos/bg.png';
import Lander from './components/Lander';

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch('http://localhost:9000/');
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFoodItems();
  }, []);

  const filteredData = data.filter((item) => {
    const matchesCategory =
      selectedCategory.toLowerCase() === 'all' ||
      item.type.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark">
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div
        className="flex-1 bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <Lander fooditemslist={filteredData} />
      </div>
    </div>
  );
}

export default App;
