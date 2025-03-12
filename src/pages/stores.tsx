"use client";

import { useState } from "react";

interface Store {
  id: number;
  name: string;
}

const StoresPage = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [storeName, setStoreName] = useState("");

  const addStore = () => {
    if (storeName.trim() !== "") {
      setStores([...stores, { id: Date.now(), name: storeName }]);
      setStoreName("");
    }
  };

  const removeStore = (id: number) => {
    setStores(stores.filter((store) => store.id !== id));
  };

  return (
    <div
      className="bg-cyan-300"
      style={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <h1 className="bold mt-5">Stores Management</h1>
      <div className="flex justify-between align-center bg-gray-200 p-4 w-5/6">
        <input
          className="h-10 text-2xl font-sans"
          style={{ width: "90%", border: "None", outline: "None" }}
          type="text"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          placeholder="Enter store name"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addStore();
            }
          }}
        />
        <button className="bg-blue-500 h-10 w-25" onClick={addStore}>
          Add Store
        </button>
      </div>
      <div className="bg-slate-300 flex flex-col justify-between align-center my-10 bg-gray-200  w-5/6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="flex h-10 w-full my-5 px-5 justify-between align-center"
          >
            <div className="font-sans h-full flex justify-center align-center">
              {store.name}
            </div>
            <button
              className="bg-red-300 h-10 w-20"
              onClick={() => removeStore(store.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoresPage;
