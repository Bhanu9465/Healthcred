import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { 
  Upload, 
  FileText, 
  Shield, 
  CheckCircle2, 
  AlertCircle,
  Camera,
  Stethoscope,
  Activity,
  Brain
} from "lucide-react";

interface HealthRecordUploadProps {
  onNavigate: (section: string) => void;
}

export function HealthRecordUpload({ onNavigate }: HealthRecordUploadProps) {
  const [uploadStep, setUploadStep] = useState(1);
  const [isUploading, setIsUploading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadStep(2);
    }
  };

  const handleUpload = async () => {
    setIsUploading(true);
    // Simulate upload process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsUploading(false);
    setUploadStep(3);
    setIsVerifying(true);
    
    // Simulate AI verification
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsVerifying(false);
    setIsComplete(true);
    setUploadStep(4);
  };

  const renderUploadArea = () => (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors">
      <div className="mx-auto mb-4 rounded-full bg-green-100 p-3 w-16 h-16 flex items-center justify-center">
        <Upload className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="mb-2 text-lg text-gray-900">Upload Medical Document</h3>
      <p className="mb-4 text-gray-600">
        Drag and drop your file here, or click to browse
      </p>
      <p className="text-sm text-gray-500 mb-4">
        Supported formats: PDF, JPG, PNG (max 10MB)
      </p>
      <input
        type="file"
        id="file-upload"
        className="hidden"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileSelect}
      />
      <Button 
        asChild
        className="bg-green-600 hover:bg-green-700"
      >
        <label htmlFor="file-upload" className="cursor-pointer">
          <Camera className="mr-2 h-4 w-4" />
          Choose File
        </label>
      </Button>
    </div>
  );

  const renderFileDetails = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="rounded-full bg-green-100 p-2">
          <FileText className="h-5 w-5 text-green-600" />
        </div>
        <div className="flex-1">
          <h4 className="text-green-900">{selectedFile?.name}</h4>
          <p className="text-sm text-green-700">
            {selectedFile ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` : ''}
          </p>
        </div>
        <Badge className="bg-green-100 text-green-800">Ready to upload</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="record-type">Record Type</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="prescription">Prescription</SelectItem>
              <SelectItem value="lab-report">Lab Report</SelectItem>
              <SelectItem value="receipt">Medical Receipt</SelectItem>
              <SelectItem value="diagnosis">Diagnosis Report</SelectItem>
              <SelectItem value="insurance">Insurance Document</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="date">Date of Service</Label>
          <Input type="date" id="date" />
        </div>
      </div>

      <div>
        <Label htmlFor="provider">Healthcare Provider</Label>
        <Input id="provider" placeholder="e.g., City General Hospital" />
      </div>

      <div>
        <Label htmlFor="amount">Medical Expense Amount</Label>
        <Input id="amount" type="number" placeholder="0.00" />
      </div>

      <div>
        <Label htmlFor="notes">Additional Notes (Optional)</Label>
        <Textarea 
          id="notes" 
          placeholder="Any additional information about this record..."
          className="h-20"
        />
      </div>

      <Button 
        onClick={handleUpload}
        className="w-full bg-green-600 hover:bg-green-700"
        disabled={isUploading}
      >
        {isUploading ? "Uploading..." : "Upload & Verify with Blockchain"}
        <Shield className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );

  const renderVerification = () => (
    <div className="text-center space-y-6">
      <div className="mx-auto rounded-full bg-blue-100 p-4 w-20 h-20 flex items-center justify-center">
        {isVerifying ? (
          <Brain className="h-8 w-8 text-blue-600 animate-pulse" />
        ) : (
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        )}
      </div>

      <div>
        <h3 className="text-xl text-gray-900 mb-2">
          {isVerifying ? "AI Verification in Progress" : "Verification Complete"}
        </h3>
        <p className="text-gray-600">
          {isVerifying 
            ? "Our AI is analyzing your document and verifying authenticity..."
            : "Document successfully verified and added to blockchain"
          }
        </p>
      </div>

      {isVerifying && (
        <div className="space-y-4">
          <Progress value={65} className="w-full" />
          <div className="text-sm text-gray-500">
            Analyzing medical content and validating with Mesh.js...
          </div>
        </div>
      )}

      {isComplete && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <h4 className="text-green-900">Verification Results</h4>
          </div>
          <div className="text-left space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Document Type:</span>
              <span className="text-gray-900">Medical Receipt</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Amount Verified:</span>
              <span className="text-gray-900">$245.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">HealthScore Impact:</span>
              <span className="text-green-600">+8 points</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Blockchain Hash:</span>
              <span className="text-gray-900 font-mono text-xs">0x7a8b...3f2d</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderComplete = () => (
    <div className="text-center space-y-6">
      <div className="mx-auto rounded-full bg-green-100 p-4 w-20 h-20 flex items-center justify-center">
        <CheckCircle2 className="h-8 w-8 text-green-600" />
      </div>

      <div>
        <h3 className="text-xl text-gray-900 mb-2">Record Successfully Added!</h3>
        <p className="text-gray-600">
          Your medical record has been securely stored and your HealthScore has been updated.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Activity className="h-5 w-5 text-blue-600" />
          <h4 className="text-blue-900">What's Next?</h4>
        </div>
        <div className="text-left space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <span>Your HealthScore increased by 8 points</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <span>New aid offers are now available</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-blue-600" />
            <span>Consider uploading more recent records for better offers</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={() => onNavigate('dashboard')}
          className="bg-green-600 hover:bg-green-700"
        >
          View Dashboard
        </Button>
        <Button 
          variant="outline"
          onClick={() => onNavigate('healthscore')}
        >
          Check HealthScore
        </Button>
        <Button 
          variant="outline"
          onClick={() => onNavigate('aid')}
        >
          Browse Aid Offers
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-full bg-green-100 p-2">
              <Stethoscope className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-3xl text-gray-900">Upload Health Record</h1>
          </div>
          <p className="text-gray-600">
            Securely upload and verify your medical documents with AI and blockchain technology.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div 
                key={step}
                className={`flex items-center justify-center w-8 h-8 rounded-full text-sm ${
                  uploadStep >= step 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Select File</span>
            <span>Add Details</span>
            <span>AI Verify</span>
            <span>Complete</span>
          </div>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <CardTitle>
              {uploadStep === 1 && "Select Document"}
              {uploadStep === 2 && "Document Details"}
              {uploadStep === 3 && "Blockchain Verification"}
              {uploadStep === 4 && "Upload Complete"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {uploadStep === 1 && renderUploadArea()}
            {uploadStep === 2 && renderFileDetails()}
            {uploadStep === 3 && renderVerification()}
            {uploadStep === 4 && renderComplete()}
          </CardContent>
        </Card>

        {/* Help Text */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="text-blue-900 mb-1">Secure & Private</h4>
              <p className="text-sm text-blue-700">
                All documents are encrypted and stored on the Cardano blockchain. 
                Your data remains private and under your control at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}