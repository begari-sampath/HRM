import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { FileText, Download, Upload, Folder } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const DocumentsPage: React.FC = () => {
  const documentCategories = [
    {
      id: 1,
      name: 'Employee Contracts',
      count: 24,
      icon: FileText
    },
    {
      id: 2,
      name: 'Company Policies',
      count: 12,
      icon: FileText
    },
    {
      id: 3,
      name: 'HR Forms',
      count: 8,
      icon: FileText
    },
    {
      id: 4,
      name: 'Training Materials',
      count: 15,
      icon: FileText
    }
  ];

  const recentDocuments = [
    {
      id: 1,
      name: 'Employee Handbook 2024',
      type: 'PDF',
      size: '2.4 MB',
      updatedAt: '2024-03-15'
    },
    {
      id: 2,
      name: 'Leave Policy',
      type: 'DOC',
      size: '1.8 MB',
      updatedAt: '2024-03-14'
    },
    {
      id: 3,
      name: 'Performance Review Template',
      type: 'XLSX',
      size: '956 KB',
      updatedAt: '2024-03-13'
    }
  ];
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/upload');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-600">Manage and access company documents</p>
        </div>
         <Button variant="primary" onClick={handleRedirect}>
      <Upload size={20} className="mr-2" />
      Upload Document
    </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {documentCategories.map((category) => (
          <Card key={category.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <category.icon size={24} className="text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} documents</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {recentDocuments.map((doc) => (
              <div key={doc.id} className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded">
                    <FileText size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{doc.name}</h4>
                    <p className="text-sm text-gray-600">
                      {doc.type} • {doc.size} • Updated {new Date(doc.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download size={16} className="mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentsPage;