// import React, { useState } from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
// import Input from '../../components/ui/Input';
// import Button from '../../components/ui/Button';
// import { useNavigate } from 'react-router-dom';
// import { Loader2, User, Mail, Phone, BadgeCheck } from 'lucide-react';

// const AddEmployeeForm: React.FC = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     ename: '',
//     email: '',
//     phnone: '',
//     eployeeId: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     // Simulated API call
//     setTimeout(() => {
//       console.log('Employee Added:', formData);
//       setLoading(false);
//       navigate('/employees');
//     }, 1200);
//   };

//   return (
//     <div className="p-6 max-w-2xl mx-auto animate-fadeIn">
//       <Card className="shadow-xl rounded-3xl border border-gray-200 transition hover:shadow-2xl duration-300">
//         <CardHeader className="pb-2">
//           <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
//             <User className="w-6 h-6 text-primary" />
//             Add New Employee
//           </CardTitle>
//           <p className="text-sm text-gray-500 mt-1">Fill in the employee’s details below.</p>
//         </CardHeader>

//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-6 mt-4">
//             {/* Full Name */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
//               <div className="relative">
//                 <User className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//                 <Input
//                   name="ename"
//                   placeholder="Sampath Begari Sravan"
//                   value={formData.ename}
//                   onChange={handleChange}
//                   required
//                   className="pl-10 w-full focus:ring-2 focus:ring-primary/30 transition"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//                 <Input
//                   name="email"
//                   type="email"
//                   placeholder="sampath.begari@example.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="pl-10 w-full focus:ring-2 focus:ring-primary/30 transition"
//                 />
//               </div>
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
//               <div className="relative">
//                 <Phone className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//                 <Input
//                   name="phnone"
//                   type="tel"
//                   placeholder="9876543210"
//                   value={formData.phnone}
//                   onChange={handleChange}
//                   required
//                   className="pl-10 w-full focus:ring-2 focus:ring-primary/30 transition"
//                 />
//               </div>
//             </div>

//             {/* Employee ID */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-700">Employee ID</label>
//               <div className="relative">
//                 <BadgeCheck className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//                 <Input
//                   name="eployeeId"
//                   placeholder="EMP002"
//                   value={formData.eployeeId}
//                   onChange={handleChange}
//                   required
//                   className="pl-10 w-full focus:ring-2 focus:ring-primary/30 transition"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="pt-2">
//               <Button
//                 type="submit"
//                 variant="primary"
//                 className="w-full py-2.5 text-base font-semibold rounded-xl"
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 className="animate-spin mr-2 h-5 w-5" />
//                     Saving...
//                   </>
//                 ) : (
//                   'Save Employee'
//                 )}
//               </Button>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default AddEmployeeForm;




// import React, { useState } from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
// import Input from '../../components/ui/Input';
// import Button from '../../components/ui/Button';
// import { useNavigate } from 'react-router-dom';
// import { Loader2, User, Mail, Phone, BadgeCheck } from 'lucide-react';
// import axios from 'axios';

// const AddEmployeeForm: React.FC = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const [formData, setFormData] = useState({
//     ename: '',
//     email: '',
//     phnone: '',
//     eployeeId: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setError(null); // Clear error on input change
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       // Make API call to backend
//       const response = await axios.post('http://localhost:8080/emps/saveEmp', {
//         ename: formData.ename,
//         email: formData.email,
//         phnone: formData.phnone,
//         eployeeId: formData.eployeeId,
//       });

//       if (response.status === 200 || response.status === 201) {
//         console.log('Employee Added:', response.data);
//         navigate('/employees');
//       }
//     } catch (err) {
//       console.error('Error adding employee:', err);
//       setError('Failed to add employee. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-2xl mx-auto animate-fadeIn">
//       <Card className="shadow-xl rounded-3xl border border-gray-200 transition hover:shadow-2xl duration-300">
//         <CardHeader className="pb-2">
//           <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
//             <User className="w-6 h-6 text-primary" />
//             Add New Employee
//           </CardTitle>
//           <p className="text-sm text-gray-500 mt-1">Fill in the employee’s details below.</p>
//         </CardHeader>

//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-6 mt-4">
//             {/* Error Message */}
//             {error && (
//               <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
//                 {error}
//               </div>
//             )}

//             {/* Full Name */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
//               <div className="relative">
//                 <User className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//                 <Input
//                   name="ename"
//                   placeholder="Sampath Begari Sravan"
//                   value={formData.ename}
//                   onChange={handleChange}
//                   required
//                   className="pl-10 w-full focus:ring-2 focus:ring-primary/30 transition"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//                 <Input
//                   name="email"
//                   type="email"
//                   placeholder="sampath.begari@example.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="pl-10 w-full focus:ring-2 focus:ring-primary/30 transition"
//                 />
//               </div>
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
//               <div className="relative">
//                 <Phone className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//                 <Input
//                   name="phnone"
//                   type="tel"
//                   placeholder="9876543210"
//                   value={formData.phnone}
//                   onChange={handleChange}
//                   required
//                   className="pl-10 w-full focus:ring-2 focus:ring-primary/30 transition"
//                 />
//               </div>
//             </div>

//             {/* Employee ID */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-700">Employee ID</label>
//               <div className="relative">
//                 <BadgeCheck className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//                 <Input
//                   name="eployeeId"
//                   placeholder="EMP002"
//                   value={formData.eployeeId}
//                   onChange={handleChange}
//                   required
//                   className="pl-10 w-full focus:ring-2 focus:ring-primary/30 transition"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="pt-2">
//               <Button
//                 type="submit"
//                 variant="primary"
//                 className="w-full py-2.5 text-base font-semibold rounded-xl"
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 className="animate-spin mr-2 h-5 w-5" />
//                     Saving...
//                   </>
//                 ) : (
//                   'Save Employee'
//                 )}
//               </Button>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default AddEmployeeForm;





import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Loader2, User, Mail, Phone, BadgeCheck } from 'lucide-react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const AddEmployeeForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    ename: '',
    email: '',
    phnone: '',
    eployeeId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null); // Clear error on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:8080/emps/saveEmp', formData);

      if (response.status === 200 || response.status === 201) {
        toast.success('Employee added successfully!');
        setTimeout(() => navigate('/employees'), 1000); // Redirect after toast
      }
    } catch (err) {
      console.error('Error adding employee:', err);
      setError('Failed to add employee. Please try again.');
      toast.error('Failed to add employee.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto animate-fadeIn">
      <Toaster position="top-right" />
      <Card className="shadow-xl rounded-3xl border border-gray-200 transition hover:shadow-2xl duration-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <User className="w-6 h-6 text-primary" />
            Add New Employee
          </CardTitle>
          <p className="text-sm text-gray-500 mt-1">Fill in the employee’s details below.</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            {error && (
              <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Full Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                <Input
                  name="ename"
                  placeholder="Sampath Begari Sravan"
                  value={formData.ename}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                <Input
                  name="email"
                  type="email"
                  placeholder="sampath.begari@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                <Input
                  name="phnone"
                  type="tel"
                  placeholder="9876543210"
                  value={formData.phnone}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>
            </div>

            {/* Employee ID */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Employee ID</label>
              <div className="relative">
                <BadgeCheck className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                <Input
                  name="eployeeId"
                  placeholder="EMP002"
                  value={formData.eployeeId}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                className="w-full py-2.5 text-base font-semibold rounded-xl"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Saving...
                  </>
                ) : (
                  'Save Employee'
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddEmployeeForm;

