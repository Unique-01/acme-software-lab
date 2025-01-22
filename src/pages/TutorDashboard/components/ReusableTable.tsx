interface Student {
    id: string;
    name: string;
    studentId: string;
    status: string;
}

interface ReusableTableProps {
    students: Student[];
}

const ReusableTable: React.FC<ReusableTableProps> = ({ students }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg table-auto">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-3">#</th>
                        <th className="p-3">Student Name</th>
                        <th className="p-3">Student ID</th>
                        <th className="p-3 ">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id} className="border-b">
                            <td className="p-3 text-center">
                                <div className="flex items-center justify-center gap-3">
                                    <input type="checkbox" className="size-4" />{" "}
                                    {index + 1}
                                </div>
                            </td>
                            <td className="p-3 text-center">{student.name}</td>
                            <td className="p-3 text-center">
                                {student.studentId}
                            </td>
                            <td className="p-3 text-center">
                                {student.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReusableTable;
