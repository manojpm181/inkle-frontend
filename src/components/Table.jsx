import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

export default function Table({ data, onEdit }) {
  // ✅ STEP 2 — COLUMNS MATCH API
  const columns = [
    {
      accessorKey: "name",
      header: "Entity",
    },
    {
      accessorKey: "gender",
      header: "Gender",
      cell: ({ getValue }) => {
        const gender = getValue();
        return (
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              gender === "Male"
                ? "bg-red-100 text-red-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {gender}
          </span>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: "Request Date",
    },
    {
      accessorKey: "country",
      header: "Country",
    },
    {
      id: "actions",
      header: "Edit",
      cell: ({ row }) => (
        <button
          onClick={() => onEdit(row.original)}
          className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
        >
          ✏️
        </button>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // ✅ STEP 3 — CLEAN TABLE DESIGN
  return (
  <table className="w-full text-gray-800 table-auto">
  <thead>
    {table.getHeaderGroups().map((hg) => (
      <tr key={hg.id} className="border-b border-gray-200">
        {hg.headers.map((h) => (
          <th
            key={h.id}
            className="text-left py-3 px-6 text-sm font-semibold"
          >
            {flexRender(h.column.columnDef.header, h.getContext())}
          </th>
        ))}
      </tr>
    ))}
  </thead>

  <tbody>
    {table.getRowModel().rows.map((row) => (
      <tr
        key={row.id}
        className="border-b border-gray-100 hover:bg-gray-50 transition"
      >
        {row.getVisibleCells().map((cell) => (
          <td key={cell.id} className="py-3 px-6 text-sm">
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>

  );
}
