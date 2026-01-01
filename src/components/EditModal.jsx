import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { getCountries, updateCustomer } from "../api";

export default function EditModal({ customer, onClose, refresh }) {
  const [name, setName] = useState(customer.name);
  const [country, setCountry] = useState(customer.country);
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [saving, setSaving] = useState(false);

  const inputRef = useRef();

 const filtered = countries.filter((c) =>
  c.name.toLowerCase().includes(country.toLowerCase())
);


  const isDirty =
    name !== customer.name || country !== customer.country;

  useEffect(() => {
    const load = async () => {
      const res = await getCountries();
      setCountries(res.data);
    };
    load();
  }, []);

  useEffect(() => inputRef.current?.focus(), []);

  const handleSave = async () => {
    try {
      setSaving(true);

      await updateCustomer(customer.id, {
        ...customer,
        name,
        country,
      });

      toast.success("Customer updated");
      refresh();
      onClose();
    } catch {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4"
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-gray-200 p-6"
      >
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-semibold text-gray-800">
            Edit Customer
          </h3>

          <button
            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Name */}
    <label className="block text-sm text-gray-800 mb-1 font-medium">
  Name <span className="text-red-600 ml-1">*</span>
</label>


        <input
  ref={inputRef}
  className="w-full border border-gray-300 rounded-lg p-2.5
             bg-white text-gray-800 placeholder-gray-500
             focus:ring-2 focus:ring-indigo-400 outline-none mb-4"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>


        {/* Country */}
        <label className="block text-sm text-gray-600 mb-1">
  Country
</label>

<div className="border border-gray-300 rounded-lg mb-6 bg-white">
  <input
    className="w-full p-2.5 border-b border-gray-200 outline-none
               bg-white text-gray-800 placeholder-gray-500"
    placeholder="Type or search country..."
    value={country}
    onChange={(e) => setCountry(e.target.value)}
  />

  <div className="max-h-40 overflow-y-auto">
    {filtered.length > 0 ? (
      filtered.map((c) => (
        <div
          key={c.id}
          onClick={() => setCountry(c.name)}
          className={`px-3 py-2 cursor-pointer text-gray-900   text-sm ${
            c.name === country
              ? "bg-indigo-50 text-indigo-700 font-medium"
              : "hover:bg-gray-50"
          }`}
        >
          {c.name}
        </div>
      ))
    ) : (
      <div className="px-3 py-2 text-gray-500 text-sm">
        No matches — press Enter to use "{country}"
      </div>
    )}
  </div>
</div>


        {/* Footer Buttons */}
        <div className="flex justify-end gap-3 mt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            disabled={!isDirty || saving}
            onClick={handleSave}
            className={`px-5 py-2 rounded-lg ${
              !isDirty
                ? "bg-gray-200 text-gray-500"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
