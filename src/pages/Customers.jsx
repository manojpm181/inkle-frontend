import { useEffect, useState } from "react";
import { getCustomers } from "../api";
import Table from "../components/Table";
import EditModal from "../components/EditModal";
import { motion, AnimatePresence } from "framer-motion";

export default function Customers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    setLoading(true);
    const res = await getCustomers();
    setData(res.data);
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center py-12"
    >
      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          text-4xl 
          font-extrabold 
          text-transparent 
          bg-clip-text 
          bg-gradient-to-r 
          from-indigo-600 
          via-purple-600 
          to-pink-600 
          mb-10 
          text-center
        "
      >
        Customer Management Dashboard
      </motion.h1>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ boxShadow: "0px 20px 40px rgba(168, 85, 247, .25)" }}
        className="
          w-full 
          max-w-5xl 
          bg-white 
          rounded-3xl 
          shadow-2xl 
          border 
          border-gray-200 
          p-8
          transition
          duration-300
        "
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Customers
        </h2>

        {loading ? (
          <div className="space-y-4 animate-pulse">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-6 bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 rounded-lg"
              />
            ))}
          </div>
        ) : (
          <Table data={data} onEdit={setSelected} />
        )}
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex justify-center items-center p-4 z-50"
          >
            <EditModal
              customer={selected}
              onClose={() => setSelected(null)}
              refresh={load}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
